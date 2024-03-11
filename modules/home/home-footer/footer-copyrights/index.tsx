import { copyrightText, poweredByText } from "@/modules/home/home-footer/footer-copyrights/content";
import { footerCopyrightsWrapperCss } from "@/modules/home/home-footer/footer-copyrights/styles";

export default function FooterCopyrights() {
  return (
    <div css={footerCopyrightsWrapperCss}>
      <span>{copyrightText}</span>
      <span>{poweredByText}</span>
    </div>
  );
}
