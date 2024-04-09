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
    let startVal = 0;
    let angle = 0;
    if (container) {
      const { left } = container.getBoundingClientRect();

      const downHandler = (e: TouchEvent | MouseEvent) => {
        container.style.cursor = "grabbing";
        pressed = true;
        startVal = ((e as TouchEvent)?.touches?.[0]?.clientX ?? (e as MouseEvent)?.x ?? left) - left;
        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(0.8)";
        }
      };
      const upHandler = (e: TouchEvent | MouseEvent) => {
        container.style.cursor = "grab";
        pressed = false;
        const rotateVal = (container.style.getPropertyValue("transform") as any).match(/-?\d+/)?.[0];
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
        if (ball) {
          ball.style.transform = "translate(-50%, 50%) scale(1)";
        }
      };
      const moveHandler = (e: TouchEvent | MouseEvent) => {
        if (!pressed) return;
        const { clientX, x } = ((e as TouchEvent)?.touches?.[0] ?? (e as MouseEvent) ?? ({} as never)) as any;
        angle = angle + ((clientX ?? x ?? startVal + left) - startVal - left);
        const rotVal = Math.ceil(angle / 2000) * 45;
        container.style.transform = `rotate(${rotVal}deg)`;
      };
      container.addEventListener("touchstart", downHandler);
      container.addEventListener("touchend", upHandler);
      container.addEventListener("touchmove", moveHandler);
      container.addEventListener("touchcancel", upHandler);

      container.addEventListener("mousedown", downHandler);
      container.addEventListener("mouseup", upHandler);
      container.addEventListener("mousemove", moveHandler);
      container.addEventListener("mouseleave", upHandler);

      return () => {
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
