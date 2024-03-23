import HomeAbout from "@/modules/home/home-about";
import HomeExperience from "@/modules/home/home-experience";
import HomeLandingBg from "@/modules/home/home-landing-bg";
import HomeResume from "@/modules/home/home-resume";
import HomeWorks from "@/modules/home/home-works";

export default function HomePageModule() {
  return (
    <>
      <HomeLandingBg />
      <HomeWorks />
      <div css={{ overflowX: "hidden" }}>
        <HomeAbout />
        <HomeResume />
        <HomeExperience />
      </div>
    </>
  );
}
