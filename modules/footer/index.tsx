import Logo from "@/components/logo";
import NoiseTexture from "@/components/noise-texture";
import FooterBg from "@/modules/footer/footer-bg";
import FooterCopyrights from "@/modules/footer/footer-copyrights";
import FooterCredits from "@/modules/footer/footer-credits";
import FooterMain from "@/modules/footer/footer-main";
import { footerBlobOneCss, footerWrapperCss } from "@/modules/footer/styles";
import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Footer in view - tracking scroll event");
          window.optimeleon?.("track", "portfolio_scroll")
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);
  return (
    <footer css={footerWrapperCss} className="scroll-section" ref={footerRef}>
      <NoiseTexture />
      <div css={footerBlobOneCss} />
      <FooterMain />
      <Logo />
      <FooterCopyrights />
      <FooterCredits />
      <FooterBg />
    </footer>
  );
}
