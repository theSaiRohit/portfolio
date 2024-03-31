import ImageWrapper from "@/components/image-wrapper";
import {
  skillBallCss,
  skillItemContainerCss,
  skillItemWrapperCss,
  skillsCarousalContainerCss,
  skillsCarousalWrapperCss,
  skillsImgCss
} from "@/modules/home/home-skills/skills-carousal/styles";
import { useEffect, useRef } from "react";

export default function SkillsCarousal() {
  const skillsCarousalContainerRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef(false);
  const startVal = useRef(0);
  const angleRef = useRef(0);
  const ballRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let pressed = pressRef.current;
    const container = skillsCarousalContainerRef.current;
    const ball = ballRef.current;
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

      return () => {
        container.removeEventListener("mousedown", downHandler);
        container.removeEventListener("mouseup", upHandler);
        container.removeEventListener("mousemove", moveHandler);
      };
    }
  });
  const skillItemMapper = (_: unknown, index: number) => {
    return (
      <div key={index} css={skillItemWrapperCss(index, 8)}>
        <div css={skillItemContainerCss}>
          <ImageWrapper alt="-" src="/images/resume-work.png" extraStyles={skillsImgCss} />
        </div>
      </div>
    );
  };
  return (
    <>
      <div css={skillsCarousalWrapperCss}>
        <div ref={skillsCarousalContainerRef} css={skillsCarousalContainerCss}>
          {Array(8).fill({}).map(skillItemMapper)}
        </div>
      </div>
      <div css={skillBallCss} ref={ballRef}></div>
    </>
  );
}
