import { css } from "@emotion/react";

export const footerSocialsWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--bor-rad-large);
`;

export const socialsHeadingCss = css`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-large);
  .socials-heading-text {
    &:nth-of-type(1) {
      color: var(--color-text-gray);
    }
  }
`;

export const mailCss = css`
  color: var(--color-text-gray);
  text-decoration: none;
  position: relative;
  padding-bottom: var(--scrollbar-width);
  width: fit-content;
  transition: all 0.3s ease;
  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    background-color: var(--color-highlight);
    height: 2px;
    width: 0%;
    transition: all 0.3s ease;
    right: 0;
    bottom: 0;
  }
  &:hover {
    color: var(--color-highlight);
    &::before {
      width: 100%;
      left: 0;
    }
  }
`;

export const socialIconsWrapperCss = css`
  display: flex;
  gap: calc(var(--padding-mid) + var(--padding-small));
`;

export const socialIconCss = css`
  color: var(--color-text-default);
  font-size: var(--font-size-icon);
`;
