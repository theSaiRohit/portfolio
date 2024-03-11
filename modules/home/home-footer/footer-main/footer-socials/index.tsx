import { mail, socials, socialsHeading } from "@/modules/home/home-footer/footer-main/footer-socials/content";
import {
  footerSocialsWrapperCss,
  mailCss,
  socialIconCss,
  socialIconsWrapperCss,
  socialsHeadingCss
} from "@/modules/home/home-footer/footer-main/footer-socials/styles";
import Link from "next/link";

export default function FooterSocials() {
  const socialsMapper = (socialHandle: (typeof socials)[0], index: number) => {
    const { Icon, link } = socialHandle;
    return (
      <Link href={link} key={`social-handle-${index}`} css={socialIconCss}>
        <Icon />
      </Link>
    );
  };
  const socialsHeadingMapper = (text: string) => {
    return (
      <span key={text} className="socials-heading-text">
        {text}
      </span>
    );
  };
  return (
    <div css={footerSocialsWrapperCss}>
      <h2 css={socialsHeadingCss}>{socialsHeading.split(" ").map(socialsHeadingMapper)}</h2>
      <Link href={`mailto:${mail}`} css={mailCss}>
        {mail}
      </Link>
      <div css={socialIconsWrapperCss}>{socials.map(socialsMapper)}</div>
    </div>
  );
}
