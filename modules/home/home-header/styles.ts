import { css } from "@emotion/react";

export const homeHeaderWrapperCss = css`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5% 0 2.75%;
  margin-top: var(--padding-mw);
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
`;

export const headerTextWrapperCss = css`
  display: flex;
  align-items: center;
  gap: var(--bor-rad-large);
`;

export const locationWrapperCss = css`
  display: flex;
  align-items: center;
  gap: var(--scrollbar-width);
`;

export const indiaFlagCss = css`
  height: var(--padding-mid);
  aspect-ratio: 16 / 9;
  img {
    object-fit: contain;
  }
`;

export const workWrapperCss = css`
  display: flex;
  border: 1px solid var(--color-text-default);
  border-radius: var(--bor-rad-large);
  justify-content: center;
  align-items: center;
  gap: var(--padding-small);
  padding: calc(2 * var(--scrollbar-width)) var(--padding-small);
`;

export const ballGrow = css`
  @keyframes grow-ball {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    80% {
      transform: translate(-50%, -50%) scale(2.25);
      opacity: 0.2;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

export const greenBallCss = css`
  display: block;
  height: calc(2 * var(--scrollbar-width));
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--color-success);
  position: relative;
  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: var(--color-success);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0.2;
    animation: grow-ball 2s ease-in-out infinite;
  }
  ${ballGrow}
`;
