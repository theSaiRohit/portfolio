import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const mainCss = css`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--padding-mw);
  ${mediaQuery.tablet} {
    gap: var(--padding-dw);
  }
`;

export const h1WrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--font-size-main);
  ${mediaQuery.miniDesktop} {
    font-size: var(--font-size-large);
  }
  ${mediaQuery.tablet} {
    --font-size-large: 10vw;
  }
`;

export const h1SpanCss = css`
  display: flex;
  flex-shrink: 0;
  line-height: 95%;
  ${mediaQuery.miniDesktop} {
    line-height: 120%;
  }
`;

export const h2Css = css`
  text-align: center;
  font-weight: 400;
  width: var(--tablet-width);
  font-size: var(--font-size-small);
  line-height: calc(var(--padding-small) + var(--padding-mid));
  ${mediaQuery.tablet} {
    --font-size-small: 1rem;
    width: 92.5%;
    line-height: calc(1.75 * var(--padding-small));
  }
`;
