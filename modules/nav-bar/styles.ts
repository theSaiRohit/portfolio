import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const navWrapperCss = css`
  display: flex;
  padding: 0 var(--padding-mid);
  background-color: var(--color-bg-black);
  border-radius: var(--bor-rad-large);
  width: fit-content;
  border: 1px solid var(--color-off-gray);
  position: fixed;
  bottom: 4vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const navItemWrapperCss = (char: number) => css`
  text-decoration: none;
  color: var(--color-text-default);
  padding: var(--padding-mid) var(--padding-small);
  position: relative;
  &:nth-of-type(1) {
    width: calc(55px + var(--padding-small) + var(--scrollbar-width));
  }
  &:nth-of-type(2) {
    width: calc(48px + var(--padding-small) + var(--scrollbar-width));
  }
  &:nth-of-type(3) {
    width: calc(98px + var(--padding-small) + var(--scrollbar-width));
  }
  &:nth-of-type(4) {
    width: calc(70px + var(--padding-small) + var(--scrollbar-width));
  }
  &:nth-of-type(5) {
    width: calc(71px + var(--padding-small) + var(--scrollbar-width));
  }
`;

export const navItemCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
  &::before {
    position: absolute;
    content: "";
    border-radius: var(--bor-rad-large);
    background-color: var(--color-highlight);
    height: 0%;
    width: 0%;
    z-index: var(--z-low-a);
    transition: all 0.3s ease;
  }
  &:hover {
    color: var(--color-bg-black);
    &::before {
      height: 100%;
      width: 100%;
      padding: var(--scrollbar-width) var(--padding-small);
    }
  }
`;
