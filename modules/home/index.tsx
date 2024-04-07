import HomeAbout from "@/modules/home/home-about";
import HomeExperience from "@/modules/home/home-experience";
import HomeLandingBg from "@/modules/home/home-landing-bg";
import HomeResume from "@/modules/home/home-resume";
import HomeSkills from "@/modules/home/home-skills";
import HomeWorks from "@/modules/home/home-works";

export default function HomePageModule() {
  return (
    <div css={{ paddingTop: "100vh" }}>
      <HomeLandingBg />
      <HomeWorks />
      <div css={{ overflowX: "hidden" }}>
        <HomeAbout />
        <HomeSkills />
        <HomeResume />
        <HomeExperience />
      </div>
    </div>
  );
}
