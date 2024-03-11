import { css } from "@emotion/react";

export const logoWrapperCss = css`
  position: relative;
  text-decoration: none;
  margin: 10vh;
`;

export const logoBallCss = css`
  height: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(123deg, rgb(196, 255, 247) 15%, hsl(182, 83.9%, 39%) 60%);
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::before {
    position: absolute;
    content: "";
    height: 120%;
    width: 120%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    filter: blur(15px);
    background: linear-gradient(123deg, rgba(196, 255, 247, 0.35) 15%, rgba(16, 177, 183, 0.75) 60%);
  }
`;
