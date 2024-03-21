import { css } from "@emotion/react";

export const workWrapperCss = css`
  position: relative;
  padding-top: var(--padding-dw);
`;

export const worksContainerCss = css`
  position: relative;
`;

export const worksStickyContainerCss = css`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const sliderContainer = css`
  display: flex;
  height: 100vh;
  padding: var(--padding-dw) 0;
  gap: var(--gutter-padding);
`;
