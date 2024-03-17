import { css } from "@emotion/react";

export const logoWrapperCss = css`
  position: relative;
  text-decoration: none;
  margin: 10vh;
`;

export const logoBallCss = css`
  height: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(123deg, #585252 15%, #000000 60%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  box-shadow: inset -3px -5px 10px 0 hsla(30, 100%, 45.3%, 0.5), inset 0 0 2.4px 0 hsla(30, 100%, 45.3%, 0.25);
`;
