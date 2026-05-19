import ImageWrapper from "@/components/image-wrapper";
import { skillData } from "@/modules/home/home-skills/skills-carousal/content";
import {
  skillBallCss,
  skillItemContainerCss,
  skillItemWrapperCss,
  skillsCarousalContainerCss,
  skillsCarousalWrapperCss,
  skillsImgCss,
  skillsTitleCss
} from "@/modules/home/home-skills/skills-carousal/styles";
import { useEffect, useRef } from "react";

export default function SkillsCarousal() {
  const skillsCarousalContainerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const skillTitleContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pressed = false;
    const container = skillsCarousalContainerRef.current;
    const ball = ballRef.current;
    const titleContainer = skillTitleContainer.current;
    const titleArray = Array.from(titleContainer?.children ?? []);
    let rotateVal = 0;
    let startX = 0;
    let startRotateVal = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;
    let animationFrameId: number | null = null;

    const SENSITIVITY = 0.25; // Lower = more sensitive
    const FRICTION = 0.92; // Momentum decay
    const SNAP_THRESHOLD = 22.5; // Half of anglePerSkill

    if (container) {
      const updateActiveTitle = (currentRotation: number) => {
        const totalSkills = skillData.length;
        const anglePerSkill = 360 / totalSkills;
        let index = Math.round(((180 - currentRotation) % 360 + 360) % 360 / anglePerSkill) % totalSkills;

        for (const titleElem of titleArray) {
          (titleElem as HTMLElement)?.classList.remove("active");
        }
        (titleArray[index] as HTMLElement)?.classList.add("active");
      };

      const snapToNearestSkill = () => {
        const anglePerSkill = 360 / skillData.length;
        const snappedVal = Math.round(rotateVal / anglePerSkill) * anglePerSkill;
        
        container.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        rotateVal = snappedVal;
        container.style.transform = `rotate(${rotateVal}deg)`;
        updateActiveTitle(rotateVal);
      };

      const applyMomentum = () => {
        if (Math.abs(velocity) < 0.1) {
          snapToNearestSkill();
          return;
        }

        const animate = () => {
          rotateVal += velocity;
          velocity *= FRICTION;

          container.style.transition = "none";
          container.style.transform = `rotate(${rotateVal}deg)`;
          updateActiveTitle(rotateVal);

          if (Math.abs(velocity) > 0.1) {
            animationFrameId = requestAnimationFrame(animate);
          } else {
            snapToNearestSkill();
          }
        };

        animationFrameId = requestAnimationFrame(animate);
      };

      const downHandler = (e: TouchEvent | MouseEvent) => {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }

        container.style.transition = "none";
        container.style.cursor = "grabbing";
        pressed = true;
        startX = (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
        lastX = startX;
        startRotateVal = rotateVal;
        lastTime = Date.now();
        velocity = 0;

        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(0.8)";
        }
      };

      const upHandler = (e: TouchEvent | MouseEvent) => {
        if (!pressed) return;
        container.style.cursor = "grab";
        pressed = false;

        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(1)";
        }

        applyMomentum();
      };

      const moveHandler = (e: TouchEvent | MouseEvent) => {
        if (!pressed) return;

        const currentX = (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
        const currentTime = Date.now();
        const timeDelta = Math.max(currentTime - lastTime, 1);
        const diffX = currentX - lastX;

        // Calculate velocity for momentum
        velocity = (diffX * SENSITIVITY) / (timeDelta / 16); // Normalize to ~60fps

        rotateVal += diffX * SENSITIVITY;

        container.style.transform = `rotate(${rotateVal}deg)`;
        updateActiveTitle(rotateVal);

        lastX = currentX;
        lastTime = currentTime;
      };

      container.addEventListener("touchstart", downHandler, { passive: true });
      container.addEventListener("touchend", upHandler);
      container.addEventListener("touchmove", moveHandler, { passive: true });
      container.addEventListener("touchcancel", upHandler);

      container.addEventListener("mousedown", downHandler);
      container.addEventListener("mouseup", upHandler);
      container.addEventListener("mousemove", moveHandler);
      container.addEventListener("mouseleave", upHandler);

      return () => {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
        }

        container.removeEventListener("touchstart", downHandler);
        container.removeEventListener("touchend", upHandler);
        container.removeEventListener("touchmove", moveHandler);
        container.removeEventListener("touchcancel", upHandler);

        container.removeEventListener("mousedown", downHandler);
        container.removeEventListener("mouseup", upHandler);
        container.removeEventListener("mousemove", moveHandler);
        container.removeEventListener("mouseleave", upHandler);
      };
    }
  }, []);

  const skillImgMapper = (skill: (typeof skillData)[0], index: number) => {
    const { img, title } = skill;
    return (
      <div css={skillItemWrapperCss(index, 8)} key={`skill-${title}`}>
        <div css={skillItemContainerCss}>
          <ImageWrapper alt={title} src={img} extraStyles={skillsImgCss} />
        </div>
      </div>
    );
  };
  const skillNameMapper = (skill: (typeof skillData)[0], index: number) => {
    const { title } = skill;
    return (
      <h3 css={skillsTitleCss} key={`skill-title-${title}`} className={index === 0 ? "active" : ""}>
        <span>{title}</span>
      </h3>
    );
  };
  return (
    <>
      <div css={skillsCarousalWrapperCss}>
        <div ref={skillsCarousalContainerRef} css={skillsCarousalContainerCss}>
          {skillData.map(skillImgMapper)}
        </div>
      </div>
      <div ref={skillTitleContainer}>{skillData.map(skillNameMapper)}</div>
      <div css={skillBallCss} ref={ballRef}></div>
    </>
  );
}
