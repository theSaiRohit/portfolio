import { copyrightText, poweredByText } from "@/modules/home/home-footer/footer-copyrights/content";
import { footerCopyrightsWrapperCss } from "@/modules/home/home-footer/footer-copyrights/styles";

export default function FooterCopyrights() {
  return (
    <div css={footerCopyrightsWrapperCss}>
      <span className="copyright-text">{copyrightText}</span>
      <span className="poweredby-text">{poweredByText}</span>
    </div>
  );
}
