import MessageStrip from "@/components/message-strip";
import { workStripMsg } from "@/modules/home/home-works/content";
import {
  sliderContainer,
  workWrapperCss,
  worksContainerCss,
  worksStickyContainerCss
} from "@/modules/home/home-works/styles";
import WorksCarousal from "@/modules/home/home-works/works-carousal";
import WorksIntro from "@/modules/home/home-works/works-intro";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

export default function HomeWorks() {
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const slidingContainerRef = useRef<HTMLDivElement>(null);
  const worksCarousalRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = worksContainerRef.current;
    const slidingContainer = slidingContainerRef.current;
    const worksCarousal = worksCarousalRef.current;
    const slider = sliderRef.current;
    const topVal = slider?.getBoundingClientRect().top;
    if (worksCarousal) {
      const { width, left } = worksCarousal.getBoundingClientRect();
      setContainerHeight(width - (window.innerWidth - left) + innerHeight);
    }
    if (container) {
      container.style.height = `${containerHeight}px`;
    }
    const lerp = (start: number, end: number, time: number) => {
      return start * (1 - time) + end * time;
    };

    if (slidingContainer) {
      let targetScroll = 0;
      let currentScroll = slidingContainer.scrollLeft;

      const scrollHandler = () => {
        if (topVal) {
          if (scrollY - topVal > 0 && scrollY - topVal < containerHeight - window.innerHeight) {
            const scrollAmount = scrollY - topVal;
            targetScroll = scrollAmount;
          }
        }
      };

      const smoothScroll = () => {
        currentScroll = lerp(currentScroll, targetScroll, 0.1);
        slidingContainer.scrollLeft = currentScroll;
        if (Math.abs(currentScroll - targetScroll) > 0.5) {
          requestAnimationFrame(smoothScroll);
        }
      };

      window.addEventListener("scroll", () => {
        scrollHandler();
        smoothScroll();
      });

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [containerHeight]);
  return (
    <section css={workWrapperCss}>
      <MessageStrip
        textOne={workStripMsg.split(" ")[0]}
        textTwo={workStripMsg.split(" ")[1]}
        rotate="0"
        top="0"
        zIndex="0"
      />
      <div css={worksContainerCss} ref={worksContainerRef}>
        <div css={worksStickyContainerCss} ref={slidingContainerRef}>
          <div css={sliderContainer} ref={sliderRef}>
            <WorksIntro />
            <WorksCarousal ref={worksCarousalRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
