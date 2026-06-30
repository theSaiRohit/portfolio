import { css } from "@emotion/react";

export const consentModalCss = css`
  position: fixed;
  bottom: var(--padding-mid);
  left: var(--padding-mid);
  z-index: 100;
  max-width: 360px;
  width: calc(100vw - (var(--padding-mid) * 2));
  display: flex;
  flex-direction: column;
  gap: var(--padding-small);
  padding: var(--padding-mid);
  border-radius: 16px;
  background-color: var(--color-bg-black);
  border: 1px solid var(--color-off-gray);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  color: var(--color-text-default);
`;

export const consentTextCss = css`
  font-size: var(--font-size-small);
  line-height: var(--line-height);
  color: var(--color-text-gray);
  margin: 0;
`;

export const consentActionsCss = css`
  display: flex;
  gap: var(--padding-small);
`;

export const consentBtnBaseCss = css`
  flex: 1;
  padding: 10px 16px;
  border-radius: 10px;
  font-family: var(--font-default);
  font-size: var(--font-size-small);
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const consentAcceptCss = css`
  background-color: var(--color-highlight);
  color: var(--color-bg-black);
`;

export const consentDeclineCss = css`
  background-color: transparent;
  border-color: var(--color-off-gray);
  color: var(--color-text-default);
`;
