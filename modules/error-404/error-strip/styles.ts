import { css } from "@emotion/react";

export const errorStripCss = (rotate: string, zIndex: string, top: string) => css`
  display: flex;
  height: var(--padding-mw);
  width: 120%;
  transform: rotate(${rotate});
  position: absolute;
  top: ${top};
  z-index: ${zIndex};
  background-color: var(--color-bg-black);
  overflow: hidden;
`;

export const errorStripTrackCss = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  animation: shift-left 45s linear infinite;
  gap: var(--padding-mid);
  padding-right: var(--padding-mid);
  @keyframes shift-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const errorInfoContainerCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-mid);
  height: 100%;
  width: fit-content;
`;

export const errorNameCss = css`
  color: var(--color-highlight);
  font-weight: 600;
`;

export const errorMsgCss = css`
  flex-shrink: 0;
`;
