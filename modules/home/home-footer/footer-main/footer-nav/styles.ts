import { css } from "@emotion/react";

export const footerNavCss = css`
  --grid-col: 3;
  display: grid;
  grid-template-columns: repeat(var(--grid-col), 1fr);
  gap: 4.5vw;
  width: 65%;
`;

export const gridItemsValCss = (row: string, col: string) => css`
  grid-column: ${col};
  grid-row: ${row};
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
`;
