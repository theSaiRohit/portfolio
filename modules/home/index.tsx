import HomeLandingBg from "@/modules/home/home-landing-bg";
import HomeMain from "@/modules/home/home-main";
import HomeResume from "@/modules/home/home-resume";
import { blankElemCss } from "@/modules/home/styles";

export default function HomePageModule() {
  return (
    <>
      {/* <HomeMain />
      <HomeLandingBg />
      <div css={blankElemCss}></div> */}
      <HomeResume />
    </>
  );
}
