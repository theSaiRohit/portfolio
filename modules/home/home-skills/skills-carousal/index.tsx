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
  const pressRef = useRef(false);
  const startVal = useRef(0);
  const angleRef = useRef(0);
  const ballRef = useRef<HTMLDivElement>(null);
  const skillTitleContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (innerHeight < 758) return;
    let pressed = pressRef.current;
    const container = skillsCarousalContainerRef.current;
    const ball = ballRef.current;
    const titleContainer = skillTitleContainer.current;
    const titleArray = Array.from(titleContainer?.children ?? []);

    if (container) {
      const { left } = container.getBoundingClientRect();
      const downHandler = (event: MouseEvent) => {
        container.style.cursor = "grabbing";
        pressed = true;
        startVal.current = event.x - left;
        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(0.8)";
        }
      };
      const upHandler = () => {
        container.style.cursor = "grab";
        pressed = false;
        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(1)";
        }
        const rotateVal = (container.style.getPropertyValue("transform") as any).match(/-?\d+/)[0];
        const index =
          rotateVal > 0
            ? (rotateVal / 45) % skillData.length === 0
              ? 0
              : skillData.length - ((rotateVal / 45) % skillData.length)
            : (-1 * (rotateVal / 45)) % skillData.length;
        for (const titleElem of titleArray) {
          (titleElem as HTMLElement)?.style.setProperty("opacity", "0");
        }
        (titleArray[index] as HTMLElement)?.style.setProperty("opacity", "1");
      };
      const moveHandler = (event: MouseEvent) => {
        if (!pressed) return;
        else {
          const { x } = event;
          angleRef.current = angleRef.current + (x - startVal.current - left);
          const rotVal = Math.ceil(angleRef.current / 2000) * 45;
          container.style.transform = `rotate(${rotVal}deg)`;
        }
      };

      container.addEventListener("mousedown", downHandler);
      container.addEventListener("mouseup", upHandler);
      container.addEventListener("mousemove", moveHandler);
      container.addEventListener("mouseleave", upHandler);

      return () => {
        container.removeEventListener("mousedown", downHandler);
        container.removeEventListener("mouseup", upHandler);
        container.removeEventListener("mousemove", moveHandler);
        container.removeEventListener("mouseleave", upHandler);
      };
    }
  });
  useEffect(() => {
    if (innerHeight > 758) return;
    let pressed = pressRef.current;
    const container = skillsCarousalContainerRef.current;
    const ball = ballRef.current;
    const titleContainer = skillTitleContainer.current;
    const titleArray = Array.from(titleContainer?.children ?? []);

    if (container) {
      const { left } = container.getBoundingClientRect();
      const downHandler = (event: TouchEvent) => {
        container.style.cursor = "grabbing";
        pressed = true;
        startVal.current = event.touches[0].clientX - left;
        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(0.8)";
        }
      };
      const upHandler = () => {
        container.style.cursor = "grab";
        pressed = false;
        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(1)";
        }
        const rotateVal = (container.style.getPropertyValue("transform") as any).match(/-?\d+/)[0];
        const index =
          rotateVal > 0
            ? (rotateVal / 45) % skillData.length === 0
              ? 0
              : skillData.length - ((rotateVal / 45) % skillData.length)
            : (-1 * (rotateVal / 45)) % skillData.length;
        for (const titleElem of titleArray) {
          (titleElem as HTMLElement)?.style.setProperty("opacity", "0");
        }
        (titleArray[index] as HTMLElement)?.style.setProperty("opacity", "1");
      };
      const moveHandler = (event: TouchEvent) => {
        if (!pressed) return;
        else {
          const { clientX } = event.touches[0];
          angleRef.current = angleRef.current + (clientX - startVal.current - left);
          const rotVal = Math.ceil(angleRef.current / 2000) * 45;
          container.style.transform = `rotate(${rotVal}deg)`;
        }
      };

      container.addEventListener("touchstart", downHandler);
      container.addEventListener("touchend", upHandler);
      container.addEventListener("touchmove", moveHandler);
      container.addEventListener("touchcancel", upHandler);

      return () => {
        container.removeEventListener("touchstart", downHandler);
        container.removeEventListener("touchend", upHandler);
        container.removeEventListener("touchmove", moveHandler);
        container.removeEventListener("touchcancel", upHandler);
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
      <h3 css={[skillsTitleCss, { opacity: index === 0 ? "1" : "0" }]} key={`skill-title-${title}`}>
        {title}
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
