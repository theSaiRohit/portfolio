import HomeExperience from "@/modules/home/home-experience";
import HomeLandingBg from "@/modules/home/home-landing-bg";
import HomeMain from "@/modules/home/home-main";
import HomeResume from "@/modules/home/home-resume";
import HomeWorks from "@/modules/home/home-works";
import { blankElemCss } from "@/modules/home/styles";
import UnderDev from "@/modules/under-dev";

export default function HomePageModule() {
  return (
    <>
      <HomeMain />
      <HomeLandingBg />
      <div css={blankElemCss}></div>
      <HomeWorks />
      <HomeResume />
      <HomeExperience />
    </>
  );
}
