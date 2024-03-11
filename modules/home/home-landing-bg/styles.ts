import { css } from "@emotion/react";

export const homeLandingWrapperCss = css`
  height: 100vh;
  width: 100%;
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

export const blobCss = css`
  position: absolute;
  z-index: -2;
  filter: blur(100px);
  aspect-ratio: 1;
  transform: rotate(-135deg);
`;

export const blobOneCss = css`
  ${blobCss};
  top: 0;
  opacity: 0.8;
  right: -5%;
  background: conic-gradient(rgb(83, 16, 183) 60%, rgb(255, 159, 14) 40%);
  height: 300px;
  border-radius: 29% 71% 70% 30% / 22% 41% 59% 78%;
`;

export const blobTwoCss = css`
  ${blobCss};
  top: 25vh;
  opacity: 0.35;
  left: -200px;
  background: conic-gradient(#e0d023 60%, #001eff 40%);
  height: 400px;
  border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
`;

export const blobThreeCss = css`
  ${blobCss};
  top: 60vh;
  opacity: 0.3;
  left: 55vw;
  background: conic-gradient(rgb(16, 183, 72) 70%, rgb(255, 14, 14));
  height: 400px;
  border-radius: 31% 69% 23% 77% / 66% 18% 82% 34%;
`;
