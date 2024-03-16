import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerSocialsWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--bor-rad-large);
  ${mediaQuery.tablet} {
    gap: var(--padding-mid);
  }
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
  ${mediaQuery.tablet} {
    --font-size-large: 2rem;
  }
`;

export const mailCss = css`
  color: var(--color-text-gray);
  text-decoration: none;
  position: relative;
  padding-bottom: var(--padding-small);
  width: fit-content;
  transition: all 0.3s ease;
  ${mediaQuery.desktop} {
    &::before {
      z-index: -1;
      position: absolute;
      content: "";
      background-color: var(--color-highlight);
      height: 2px;
      width: 0%;
      transition: all 0.3s ease;
      right: -5%;
      bottom: 0;
    }
    &:hover {
      color: var(--color-highlight);
      &::before {
        width: 110%;
        left: -5%;
      }
    }
  }
`;

export const socialIconsWrapperCss = css`
  display: flex;
  /* gap: calc(var(--padding-mid) + var(--padding-small)); */
  ${mediaQuery.mobile} {
    width: 80%;
    flex-wrap: wrap;
  }
`;

export const socialIconLinkCss = css`
  position: relative;
  color: var(--color-text-default);
  font-size: var(--font-size-icon);
  height: calc(4 * var(--padding-small));
  aspect-ratio: 1;
`;

export const socialWrapperCss = css`
  color: var(--color-text-default);
  font-size: var(--font-size-icon);
  height: calc(2 * var(--padding-mid));
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  &::before {
    position: absolute;
    content: "";
    height: 0%;
    width: 0%;
    border-radius: 50%;
    background-color: var(--color-highlight);
    z-index: -1;
    transition: all 0.3s ease;
  }
  &:hover {
    &::before {
      height: 100%;
      width: 100%;
    }
  }
`;
