import ImageWrapper from "@/components/image-wrapper";
import Logo from "@/components/logo";
import { city, workText } from "@/modules/header/content";
import {
  greenBallCss,
  headerTextWrapperCss,
  homeHeaderWrapperCss,
  indiaFlagCss,
  locationWrapperCss,
  workPositionWrapperCss
} from "@/modules/header/styles";

export default function Header() {
  return (
    <header css={homeHeaderWrapperCss}>
      <Logo />
      <div css={headerTextWrapperCss}>
        <div css={locationWrapperCss}>
          <span>{city}</span>
          <ImageWrapper src="/images/india-flag-icon.png" alt="India Flag" extraStyles={indiaFlagCss} />
        </div>
        <div css={workPositionWrapperCss}>
          <span css={greenBallCss}></span>
          <span>{workText}</span>
        </div>
      </div>
    </header>
  );
}
