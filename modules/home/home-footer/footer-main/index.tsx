import FooterNav from "@/modules/home/home-footer/footer-main/footer-nav";
import FooterSocials from "@/modules/home/home-footer/footer-main/footer-socials";
import { footerMainWrapperCss } from "@/modules/home/home-footer/footer-main/styles";

export default function FooterMain() {
  return (
    <div css={footerMainWrapperCss}>
      <FooterSocials />
      <FooterNav />
    </div>
  );
}
