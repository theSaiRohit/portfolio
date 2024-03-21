import ImageWrapper from "@/components/image-wrapper";
import {
  workCardCss,
  workCardCtaCss,
  workCardCtaSvgCss,
  workCardsWrapperCss,
  workCtaWrapper,
  workImgCss,
  workTitleCss,
  workTitleWrapperCss
} from "@/modules/home/home-works/works-carousal/styles";
import Link from "next/link";
import { Ref, forwardRef } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function WC(_: unknown, ref: Ref<HTMLDivElement>) {
  const worksMapper = (_: unknown, index: number) => {
    return (
      <div key={`works-card-${index}`} css={[workCardCss, { "--custom-color": "hsla(70, 80%, 90%, 1)" }]}>
        <div css={workTitleWrapperCss}>
          <h3 css={workTitleCss}>Site Name</h3>
          <div css={workCtaWrapper}>
            <Link href="/" css={workCardCtaCss} className="link-wrapper">
              <span>Visit</span>
              <BsArrowUpRightCircleFill css={workCardCtaSvgCss} />
            </Link>
          </div>
        </div>
        <ImageWrapper alt="website template" src="/images/website-template.webp" extraStyles={workImgCss} />
      </div>
    );
  };
  return (
    <div css={workCardsWrapperCss} ref={ref}>
      {Array(5).fill({}).map(worksMapper)}
    </div>
  );
}

const WorksCarousal = forwardRef(WC);
export default WorksCarousal;
