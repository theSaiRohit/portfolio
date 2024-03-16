import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerCreditsWrapperCss = css`
  margin: var(--padding-mw);
  display: flex;
  gap: var(--scrollbar-width);
  ${mediaQuery.mobile} {
    flex-direction: column;
    text-align: center;
  }
`;

export const creditCss = css`
  text-decoration: none;
  color: var(--color-highlight);
`;
