import HomeFooter from "@/modules/home/home-footer";
import HomeHeader from "@/modules/home/home-header";
import HomeLandingBg from "@/modules/home/home-landing-bg";
import HomeMain from "@/modules/home/home-main";
import { blankElemCss } from "@/modules/home/styles";

export default function HomePageModule() {
  return (
    <>
      {/* <HomeHeader />
      <HomeMain />
      <HomeLandingBg />
      <div css={blankElemCss}></div> */}
      <HomeFooter />
    </>
  );
}
