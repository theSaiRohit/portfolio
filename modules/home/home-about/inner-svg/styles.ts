import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const innerSvgCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-60deg);
  ${mediaQuery.tablet} {
    width: 67.5vw;
    aspect-ratio: 1;
  }
`;
