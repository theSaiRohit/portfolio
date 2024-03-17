import LinkCtaBtn from "@/components/link-cta-btn";
import NoiseTexture from "@/components/noise-texture";
import { errorCta } from "@/modules/error-404/content";
import ErrorStrip from "@/modules/error-404/error-strip";
import { error404WrapperCss } from "@/modules/error-404/styles";
import HomeBlobs from "@/modules/home/home-landing-bg/home-blobs";
import Link from "next/link";

export default function Error404Module() {
  return (
    <section css={error404WrapperCss}>
      <HomeBlobs />
      <NoiseTexture />
      <ErrorStrip rotate="-30deg" zIndex="-1" top="20%" />
      <ErrorStrip rotate="10deg" zIndex="0" top="70%" />
      <LinkCtaBtn link="/" text={errorCta} />
    </section>
  );
}
