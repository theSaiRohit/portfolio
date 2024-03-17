import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const homeResumeWrapperCss = css`
  min-height: 120vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const resumeCardsWrapperCss = css`
  position: relative;
  &::before {
    z-index: -2;
    position: absolute;
    content: "";
    height: 120%;
    width: 120%;
    top: -25%;
    transform: rotate(-135deg);
    background: linear-gradient(-135deg, #ff00e1 5%, #00009f);
    filter: blur(100px);
    border-radius: 39% 61% 61% 39% / 16% 24% 76% 84%;
  }
`;

export const ImgWrapperCss = css`
  --resume-x: 550px;
  --resume-y: 350px;
  height: var(--resume-x);
  width: var(--resume-y);
  background-color: rgba(var(--color-text-default-rgb-ver), 0.25);
  backdrop-filter: blur(10px);
  border-radius: var(--padding-small);
  display: grid;
  place-items: center;
  padding: var(--padding-small);
  ${mediaQuery.tablet} {
    --resume-x: 400px;
    --resume-y: 100vw;
    max-width: 300px;
  }
`;

export const resumeWrapperCss = css`
  ${ImgWrapperCss};
  transform: translate(-40%, 0) rotate(-5deg);
  z-index: 1;
  ${mediaQuery.tablet} {
    transform: translate(-10%, 0) rotate(-5deg);
  }
`;

export const resumeContainerCss = css`
  height: 100%;
  width: 100%;
  border-radius: var(--padding-mid);
  display: flex;
  flex-direction: column;
  gap: var(--scrollbar-width);
  color: var(--color-bg-black);
  padding: var(--padding-mid);
  border: 2px solid var(--color-highlight);
  /* overflow: hidden; */
`;

export const resumeNameCss = css`
  font-size: var(--font-size-icon);
  color: var(--color-highlight);
  text-transform: uppercase;
  font-weight: 600;
`;

export const devPositionTextCss = css`
  font-weight: 600;
`;

export const resumeDescriptionCss = css`
  ${mediaQuery.tablet} {
    height: var(--bor-rad-large);
    width: 160px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const resumeBtnCss = css`
  margin-top: auto;
`;

export const resumeMailCss = css`
  margin: var(--padding-small) 0;
  text-decoration: none;
  color: var(--color-text-gray);
  border-bottom: 2px solid var(--color-text-gray);
  width: fit-content;
`;

export const resumeWorkImgWrapperCss = css`
  ${ImgWrapperCss};
  position: absolute;
  left: 30%;
  top: -10%;
  transform: rotate(12.5deg);
`;

export const resumeWorkImgCss = css`
  height: 100%;
  width: 100%;
  border-radius: var(--padding-mid);
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center;
  }
`;
