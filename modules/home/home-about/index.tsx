import Heading from "@/components/heading";
import { logoBallCss } from "@/components/logo/styles";
import { aboutDesc, aboutHeadingText } from "@/modules/home/home-about/content";
import InnerSvg from "@/modules/home/home-about/inner-svg";
import OuterSvg from "@/modules/home/home-about/outer-svg";
import {
  aboutBallCss,
  aboutDescCss,
  aboutHeadingCss,
  aboutWrapperCss,
  svgWrapperCss
} from "@/modules/home/home-about/styles";
import { useEffect, useRef } from "react";

export default function HomeAbout() {
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const svgWrapper = svgWrapperRef.current;
    if (svgWrapper) {
      const svgsArray = Array.from(svgWrapper.querySelectorAll("svg"));

      const svgRotateScrollHandler = (target: Element) => {
        if (target) {
          const { top } = target.getBoundingClientRect();
          if (target.classList.contains("outer-svg")) {
            if (top > -1 * window.innerHeight) {
              (target as HTMLElement).style.transform = `translate(-50%, -50%) rotate(-${
                45 - (50 * top) / innerHeight
              }deg)`;
            }
          } else {
            if (top > -1 * window.innerHeight) {
              (target as HTMLElement).style.transform = `translate(-50%, -50%) rotate(-${
                60 + (50 * top) / innerHeight
              }deg)`;
            }
          }
        }
      };

      const svgObvOptions: IntersectionObserverInit = {
        root: document,
        threshold: 0.15
      };

      const svgObvCallback: IntersectionObserverCallback = (entries) => {
        for (const entry of entries) {
          const { isIntersecting, target } = entry;
          if (isIntersecting) {
            addEventListener("scroll", () => svgRotateScrollHandler(target));
          } else {
            removeEventListener("scroll", () => svgRotateScrollHandler(target));
          }
        }
      };

      const svgObserver: IntersectionObserver = new IntersectionObserver(svgObvCallback, svgObvOptions);

      for (const svg of svgsArray) {
        svgObserver.observe(svg);
      }
      return () => {
        svgObserver.disconnect();
      };
    }
  }, []);
  return (
    <section css={aboutWrapperCss}>
      <Heading text={aboutHeadingText} extraStyles={aboutHeadingCss} />
      <p css={aboutDescCss}>{aboutDesc}</p>
      <div css={svgWrapperCss} ref={svgWrapperRef}>
        <OuterSvg />
        <InnerSvg />
        <div css={[logoBallCss, aboutBallCss]}></div>
      </div>
    </section>
  );
}
