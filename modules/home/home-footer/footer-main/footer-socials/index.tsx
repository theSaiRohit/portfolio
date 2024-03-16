import { mail, socials, socialsHeading } from "@/modules/home/home-footer/footer-main/footer-socials/content";
import {
  footerSocialsWrapperCss,
  mailCss,
  socialIconLinkCss,
  socialIconsWrapperCss,
  socialWrapperCss,
  socialsHeadingCss
} from "@/modules/home/home-footer/footer-main/footer-socials/styles";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function FooterSocials() {
  const socialLinksWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const linksWrapper = socialLinksWrapper.current;
    const linksArray: HTMLAnchorElement[] = Array.from(linksWrapper?.querySelectorAll(".link-wrapper") ?? []);
    const mouseMoveHanddler = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const { x, y, currentTarget } = e;
      const { left, top, height, width } = (currentTarget as HTMLDivElement).getBoundingClientRect();
      const xPos = x - left;
      const yPos = y - top;
      const xPercentage = 100 - (20 + (xPos / width) * 60);
      const yPercentage = 100 - (20 + (yPos / height) * 60);
      if (currentTarget) {
        (currentTarget as HTMLDivElement).style.setProperty("transition", "ease");
        (currentTarget as HTMLDivElement).style.setProperty(
          "transform",
          `translate(-${xPercentage}%, -${yPercentage}%)`
        );
      }
    };
    const mouseLeaveHandler = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const { currentTarget } = e;
      (currentTarget as HTMLDivElement).style.setProperty("transition", "transform 0.3s ease");
      (currentTarget as HTMLDivElement).style.setProperty("transform", "translate(-50%, -50%)");
    };

    for (const link of linksArray) {
      link.addEventListener("mousemove", mouseMoveHanddler);
      link.addEventListener("mouseleave", mouseLeaveHandler);
    }
    return () => {
      for (const link of linksArray) {
        link.removeEventListener("mousemove", mouseMoveHanddler);
        link.removeEventListener("mouseleave", mouseLeaveHandler);
      }
    };
  }, []);

  const socialsMapper = (socialHandle: (typeof socials)[0], index: number) => {
    const { Icon, link } = socialHandle;
    return (
      <Link
        href={link}
        key={`social-handle-${index}`}
        css={socialIconLinkCss}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div css={socialWrapperCss} className="link-wrapper">
          <Icon />
        </div>
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
      <div css={socialIconsWrapperCss} ref={socialLinksWrapper}>
        {socials.map(socialsMapper)}
      </div>
    </div>
  );
}
