import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const outerSvgCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  ${mediaQuery.tablet} {
    width: 115vw;
    aspect-ratio: 1;
  }
`;
