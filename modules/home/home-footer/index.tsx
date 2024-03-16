import ImageWrapper from "@/components/image-wrapper";
import Logo from "@/components/logo";
import NoiseTexture from "@/components/noise-texture";
import FooterBg from "@/modules/home/home-footer/footer-bg";
import FooterCopyrights from "@/modules/home/home-footer/footer-copyrights";
import FooterCredits from "@/modules/home/home-footer/footer-credits";
import FooterMain from "@/modules/home/home-footer/footer-main";
import { chihayaCss, footerBlobOneCss, footerWrapperCss } from "@/modules/home/home-footer/styles";

export default function HomeFooter() {
  return (
    <footer css={footerWrapperCss}>
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
