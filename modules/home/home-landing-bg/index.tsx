import NoiseTexture from "@/components/noise-texture";
import { noiseWrapperCss } from "@/components/noise-texture/styles";
import { blobOneCss, blobThreeCss, blobTwoCss, homeLandingWrapperCss } from "@/modules/home/home-landing-bg/styles";

export default function HomeLandingBg() {
  return (
    <section css={homeLandingWrapperCss}>
      <NoiseTexture />
      <div css={blobOneCss} />
      <div css={blobTwoCss} />
      <div css={blobThreeCss} />
    </section>
  );
}
