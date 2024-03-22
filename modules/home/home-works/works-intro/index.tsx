import { mail } from "@/common-content";
import Heading from "@/components/heading";
import LinkCtaBtn from "@/components/link-cta-btn";
import { workCtaText, worksDescription, worksHeading } from "@/modules/home/home-works/works-intro/content";
import { workIntroBlobCss, worksCtaBtnCss, worksIntroWrapperCss } from "@/modules/home/home-works/works-intro/styles";

export default function WorksIntro() {
  return (
    <div css={worksIntroWrapperCss}>
      <div css={workIntroBlobCss}></div>
      <Heading text={worksHeading} />
      <p>{worksDescription}</p>
      <LinkCtaBtn link={`mailto:${mail}`} text={workCtaText} extraStyles={worksCtaBtnCss} />
    </div>
  );
}
