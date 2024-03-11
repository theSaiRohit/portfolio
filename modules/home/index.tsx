import HomeFooter from "@/modules/home/home-footer";
import HomeHeader from "@/modules/home/home-header";
import HomeLandingBg from "@/modules/home/home-landing-bg";

export default function HomePageModule() {
  return (
    <>
      <HomeHeader />
      <HomeLandingBg />
      <div css={{ height: "100vh" }}></div>
      <HomeFooter />
    </>
  );
}
