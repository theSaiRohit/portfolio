import { css } from "@emotion/react";

const linesWrapperCss = css`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const leftLinesWrapperCss = css`
  ${linesWrapperCss}
  right: 50%;
`;

export const rightLinesWrapperCss = css`
  ${linesWrapperCss}
  left: 50%;
`;
const lineSvgCss = css`
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: -2.5px;
  opacity: 0.4;
`;

const lineAnim = (lineNum: number) => css`
  animation: grow-line ease;
  animation-duration: 1.6s;
  animation-fill-mode: forwards;
  animation-delay: calc(0.08s * (11 - ${lineNum}));
  scale: 0;
  @keyframes grow-line {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }
`;

export const leftLinesCss = (num: number) => css`
  ${lineSvgCss}
  transform-origin: bottom right;
  background: linear-gradient(to left, rgba(45, 213, 68, 0.2), rgba(156, 70, 212, 1));
  transform: rotate(calc(4.6 * ${num}deg));
  ${lineAnim(num)}
`;

export const rightLinesCss = (num: number) => css`
  ${lineSvgCss}
  transform-origin: bottom left;
  background: linear-gradient(to right, rgba(45, 213, 68, 0.2), rgba(156, 70, 212, 1));
  transform: rotate(calc(-4.6 * ${num}deg));
  ${lineAnim(num)}
`;
