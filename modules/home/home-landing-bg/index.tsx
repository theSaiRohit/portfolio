import NoiseTexture from "@/components/noise-texture";
import HomeBlob from "@/modules/home/home-landing-bg/home-blobs";
import LinesAnim from "@/modules/home/home-landing-bg/lines-anim";
import { homeLandingWrapperCss } from "@/modules/home/home-landing-bg/styles";
import HomeMain from "@/modules/home/home-landing-bg/home-main";

export default function HomeLandingBg() {
  return (
    <section css={homeLandingWrapperCss}>
      <NoiseTexture />
      <HomeBlob />
      <LinesAnim />
      <HomeMain />
    </section>
  );
}
