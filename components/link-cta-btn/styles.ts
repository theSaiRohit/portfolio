import { css } from "@emotion/react";

export const btnWrapperCss = css`
  padding: var(--padding-small) var(--padding-mid);
  text-decoration: none;
  color: var(--color-bg-black);
  border-radius: var(--bor-rad-large);
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  width: fit-content;
  height: fit-content;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-highlight);
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: "";
    width: 200%;
    aspect-ratio: 1;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: var(--color-text-default);
    z-index: -1;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  &:hover {
    &::after {
      transform: translate(-50%, -20%);
    }
  }
`;
