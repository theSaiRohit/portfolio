import Heading from "@/components/heading";
import MessageStrip from "@/components/message-strip";
import { experienceHeading } from "@/modules/home/home-experience/content";
import {
  experienceBlobOneCss,
  experienceBlobTwoCss,
  experienceCardCss,
  experiencePosSpanCss,
  experiencePositionCss,
  experiencePositionWrapperCss,
  experienceTypeWrapperCss,
  experienceWrapperCss
} from "@/modules/home/home-experience/styles";
import { blobCss } from "@/modules/home/home-landing-bg/home-blobs/styles";
import { commonHeaderCss } from "@/styles/common-styles";
import { useEffect, useRef } from "react";

export default function HomeExperience() {
  const expCardsContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const expCardsContainer = expCardsContainerRef.current;
    const expCards = Array.from(expCardsContainer?.children ?? []);

    if (expCardsContainer) {
      const expObvOptions: IntersectionObserverInit = {
        root: document,
        threshold: 0.8
      };
      const expObvCallback: IntersectionObserverCallback = (entries) => {
        for (const entry of entries) {
          const { boundingClientRect, target } = entry;
          const { top, height } = boundingClientRect;
          const expPosWrapper = target.querySelector(".exp-title");
          const expTypeWrapper = target.querySelector(".exp-type");
          if (top >= innerHeight - 0.9 * height) {
            expTypeWrapper?.classList.remove("active");
            expPosWrapper?.classList.remove("active");
          }
          if (entry.isIntersecting) {
            expTypeWrapper?.classList.add("active");
            expPosWrapper?.classList.add("active");
          }
        }
      };
      const expCardObserver = new IntersectionObserver(expObvCallback, expObvOptions);
      for (const expCard of expCards) {
        expCardObserver.observe(expCard);
      }
      return () => {
        expCardObserver.disconnect();
      };
    }
  }, []);

  const experienceMapper = (_: unknown, index: number) => {
    return (
      <div key={`exp-${index}`} css={experienceCardCss}>
        <div css={experiencePositionWrapperCss} className="exp-title">
          <h3 css={experiencePositionCss} className="exp-header">
            <span className="exp-header-span" css={experiencePosSpanCss} data-text="Frontend Developer">
              Frontend Developer
            </span>
          </h3>
          <span>Krishaka Argow</span>
        </div>
        <div css={experienceTypeWrapperCss} className="exp-type">
          <span>January 2022 - September 2023</span>
          <span>Remote</span>
        </div>
      </div>
    );
  };
  return (
    <section css={experienceWrapperCss} className="scroll-section">
      <MessageStrip
        rotate="5deg"
        top="var(--padding-mw)"
        zIndex="0"
        textOne={experienceHeading.split(" ")[0]}
        textTwo={experienceHeading.split(" ")[1]}
      />
      <MessageStrip
        rotate="-7deg"
        top="calc(-1 * var(--padding-dw))"
        zIndex="0"
        textOne={experienceHeading.split(" ")[0]}
        textTwo={experienceHeading.split(" ")[1]}
      />
      <span css={[blobCss, experienceBlobOneCss]}></span>
      <span css={[blobCss, experienceBlobTwoCss]}></span>
      <Heading text={experienceHeading} extraStyles={commonHeaderCss} />
      <div ref={expCardsContainerRef}>{Array(4).fill({}).map(experienceMapper)}</div>
    </section>
  );
}
