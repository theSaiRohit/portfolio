import { css } from "@emotion/react";

export const mainCss = css`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--padding-mw);
`;

export const h1WrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 7rem;
`;

export const h1SpanCss = css`
  display: flex;
  flex-shrink: 0;
  line-height: 95%;
`;

export const h2Css = css`
  text-align: center;
  font-weight: 400;
  width: 40vw;
  line-height: calc(var(--padding-small) + var(--padding-mid));
`;
