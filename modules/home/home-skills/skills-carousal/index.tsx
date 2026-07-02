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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin);

export default function SkillsCarousal() {
  const skillsCarousalContainerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const skillTitleContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = skillsCarousalContainerRef.current;
    const ball = ballRef.current;
    const titleArray = Array.from(skillTitleContainer.current?.children ?? []);
    if (!container) return;

    const anglePerSkill = 360 / skillData.length;

    // Card i sits at (i * anglePerSkill) + rotation from 12 o'clock, so the card
    // at the top of the wheel is the one where rotation ≈ -i * anglePerSkill.
    const updateActiveTitle = (rotation: number) => {
      const normalized = ((-rotation % 360) + 360) % 360;
      const index = Math.round(normalized / anglePerSkill) % skillData.length;
      titleArray.forEach((titleElem, i) => {
        (titleElem as HTMLElement).classList.toggle("active", i === index);
      });
    };

    Draggable.create(container, {
      type: "rotation",
      inertia: true,
      snap: gsap.utils.snap(anglePerSkill),
      cursor: "grab",
      activeCursor: "grabbing",
      allowNativeTouchScrolling: true,
      onPress() {
        if (ball) ball.style.transform = "translate(-50%, 50%) scale(0.8)";
      },
      onRelease() {
        if (ball) ball.style.transform = "translate(-50%, 50%) scale(1)";
      },
      onDrag() {
        updateActiveTitle(this.rotation);
      },
      onThrowUpdate() {
        updateActiveTitle(this.rotation);
      }
    });
  });

  const skillImgMapper = (skill: (typeof skillData)[0], index: number) => {
    const { img, title } = skill;
    return (
      <div css={skillItemWrapperCss(index, skillData.length)} key={`skill-${title}`}>
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
