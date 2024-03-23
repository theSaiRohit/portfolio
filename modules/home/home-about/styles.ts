import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const aboutWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-dw);
  padding-top: calc(1.5 * var(--padding-dw));
  ${mediaQuery.tablet} {
    padding-top: var(--padding-mw);
    gap: 0;
  }
`;

export const aboutHeadingCss = css`
  margin-left: var(--gutter-padding);
  width: 100%;
`;

export const aboutDescCss = css`
  width: 50%;
  font-size: var(--font-size-small);
  color: var(--color-highlight);
  margin: auto;
  line-height: calc(var(--padding-small) + var(--padding-mid));
  ${mediaQuery.tablet} {
    width: 90%;
    --font-size-small: 1rem;
    line-height: calc(1.75 * var(--padding-small));
    padding-top: var(--padding-mw);
  }
`;

export const svgWrapperCss = css`
  position: relative;
  height: 100vh;
`;

export const aboutBallCss = css`
  height: 20vh;
  aspect-ratio: 1;
  box-shadow: inset -15px -25px 25px 0 hsla(30, 100%, 45.3%, 0.25), inset 0 0 12px 0 hsla(30, 100%, 45.3%, 0.25);
  z-index: 0;
  ${mediaQuery.tablet} {
    height: 10vh;
    box-shadow: inset -5px -7.5px 15px 0 hsla(30, 100%, 45.3%, 0.5), inset 0 0 5px 0 hsla(30, 100%, 45.3%, 0.25);
  }
`;
