import ImageWrapper from "@/components/image-wrapper";
import Logo from "@/components/logo";
import NoiseTexture from "@/components/noise-texture";
import FooterBg from "@/modules/footer/footer-bg";
import FooterCopyrights from "@/modules/footer/footer-copyrights";
import FooterCredits from "@/modules/footer/footer-credits";
import FooterMain from "@/modules/footer/footer-main";
import { footerBlobOneCss, footerWrapperCss } from "@/modules/footer/styles";

export default function Footer() {
  return (
    <footer css={footerWrapperCss} className="scroll-section">
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
