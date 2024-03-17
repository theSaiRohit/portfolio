import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const experienceWrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--padding-dw);
  min-height: 160vh;
  position: relative;
  ${mediaQuery.tablet} {
    min-height: fit-content;
    gap: var(--padding-mw);
    padding: calc(2 * var(--padding-dw)) 0;
  }
`;

export const experienceBlobOneCss = css`
  top: -10%;
  opacity: 0.8;
  left: -5%;
  background: conic-gradient(rgba(229, 255, 0, 0.6) 60%, rgba(0, 221, 255, 0.4) 40%);
  height: 300px;
  border-radius: 29% 71% 70% 30% / 22% 41% 59% 78%;
  ${mediaQuery.tablet} {
    height: 100px;
    left: 0;
  }
`;

export const experienceBlobTwoCss = css`
  top: 30%;
  opacity: 0.5;
  right: -10%;
  background: conic-gradient(rgba(30, 255, 0, 0.4) 60%, rgba(184, 202, 26, 0.6) 40%);
  height: 400px;
  border-radius: 49% 71% 90% 30% / 12% 41% 29% 48%;
  ${mediaQuery.tablet} {
    height: 180px;
    top: 40%;
    right: -20%;
  }
`;

export const experienceCardCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-off-gray);
  color: var(--color-text-gray);
  margin: 0 var(--gutter-padding);
  cursor: pointer;
  padding: var(--bor-rad-large) 0;
  ${mediaQuery.desktop} {
    &:hover {
      .exp-header-span {
        transform: translateY(-100%);
      }
    }
  }
  ${mediaQuery.tablet} {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding-mid) 0;
    gap: var(--scrollbar-width);
  }
`;

const activeClassCss = css`
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(var(--bor-rad-large));
  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const experiencePositionWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-small);
  ${activeClassCss};
`;

export const experiencePositionCss = css`
  font-size: var(--font-size-mid);
  font-weight: 400;
  display: flex;
  overflow: hidden;
  height: fit-content;
  ${mediaQuery.miniDesktop} {
    --font-size-mid: var(--font-size-icon);
    color: var(--color-text-default);
  }
  ${mediaQuery.tablet} {
    --font-size-mid: 1.2rem;
    color: var(--color-text-default);
  }
`;

export const experiencePosSpanCss = css`
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  ${mediaQuery.desktop} {
    position: relative;
    &::before {
      position: absolute;
      top: 100%;
      left: 0;
      content: attr(data-text);
      height: 100%;
      width: 100%;
      font-size: var(--font-size-mid);
      color: var(--color-text-default);
    }
  }
`;

export const experienceTypeWrapperCss = css`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: var(--scrollbar-width);
  ${activeClassCss};
  ${mediaQuery.tablet} {
    text-align: left;
  }
`;
