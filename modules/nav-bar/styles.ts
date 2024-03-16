import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const navWrapperCss = css`
  display: flex;
  gap: var(--padding-mid);
  padding: calc(0.8 * var(--padding-mid)) var(--padding-mid);
  background-color: var(--color-bg-black);
  border-radius: var(--bor-rad-large);
  width: fit-content;
  border: 1px solid var(--color-off-gray);
  position: fixed;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const navItemCss = css`
  text-decoration: none;
  color: var(--color-text-default);
`;
