import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerNavCss = css`
  --grid-col: 3;
  display: grid;
  grid-template-columns: repeat(var(--grid-col), 1fr);
  gap: 4.5vw;
  width: 65%;
  ${mediaQuery.miniDesktop} {
    margin-top: var(--padding-mw);
    width: 100%;
  }
  ${mediaQuery.mobile} {
    --grid-col: 2;
  }
`;

export const gridItemsValCss = (row: string, col: string) => css`
  ${mediaQuery.desktop} {
    grid-column: ${col};
    grid-row: ${row};
  }
`;

export const footerNavLinkCss = css`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: calc(2 * var(--scrollbar-width));
  color: inherit;
  .footer-nav-desc {
    color: var(--color-text-gray);
  }
  &:hover {
    .footer-nav-title {
      transform: translateY(-30px);
    }
  }
  ${mediaQuery.tablet} {
    .footer-nav-desc {
      display: none;
    }
  }
`;

export const footerNavTitleWrapperCss = css`
  display: flex;
  flex-direction: column;
  height: 30px;
  overflow: hidden;
  .footer-nav-title {
    transition: all 0.15s linear;
    padding: var(--scrollbar-width) 0;
    &:nth-of-type(2) {
      color: var(--color-highlight);
    }
  }
`;
