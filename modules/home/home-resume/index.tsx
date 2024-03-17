import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import { mail } from "@/modules/footer/footer-main/footer-socials/content";
import {
  developerClg,
  developerDescription,
  developerName,
  developerPosition,
  developerStudies,
  resumeCtaText
} from "@/modules/home/home-resume/content";
import {
  devPositionTextCss,
  homeResumeWrapperCss,
  resumeBtnCss,
  resumeCardsWrapperCss,
  resumeContainerCss,
  resumeDescriptionCss,
  resumeMailCss,
  resumeNameCss,
  resumeWorkImgCss,
  resumeWorkImgWrapperCss,
  resumeWrapperCss
} from "@/modules/home/home-resume/styles";
import Link from "next/link";

export default function HomeResume() {
  return (
    <section css={homeResumeWrapperCss}>
      <div css={resumeCardsWrapperCss}>
        <div css={resumeWorkImgWrapperCss}>
          <ImageWrapper alt="Vs-code Work | Next.js" src="/images/resume-work.png" extraStyles={resumeWorkImgCss} />
        </div>
        <div css={resumeWrapperCss}>
          <div css={resumeContainerCss}>
            <span css={resumeNameCss}>{developerName}</span>
            <span css={devPositionTextCss}>{developerPosition}</span>
            <span>{developerStudies}</span>
            <span>{developerClg}</span>
            <Link href={`mailto:${mail}`} css={resumeMailCss}>
              {mail}
            </Link>
            <p css={resumeDescriptionCss}>{developerDescription}</p>
            <LinkCtaBtn link="/" text={resumeCtaText} extraStyles={resumeBtnCss} />
          </div>
        </div>
      </div>
    </section>
  );
}
