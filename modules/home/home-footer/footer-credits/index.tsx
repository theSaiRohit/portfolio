import {
  inspirationPortfolioLink,
  inspoPortfolioName,
  inspoText
} from "@/modules/home/home-footer/footer-credits/content";
import { creditCss, footerCreditsWrapperCss } from "@/modules/home/home-footer/footer-credits/styles";
import Link from "next/link";

export default function FooterCredits() {
  return (
    <div css={footerCreditsWrapperCss}>
      <span>{inspoText}</span>
      <Link href={inspirationPortfolioLink} css={creditCss}>
        {inspoPortfolioName}
      </Link>
    </div>
  );
}
