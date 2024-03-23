import NameSvg from "@/components/logo/name-svg";
import { logoBallCss, logoWrapperCss } from "@/components/logo/styles";
import { useCallback } from "react";

export default function Logo() {
  const logoClickHandler = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <div css={logoWrapperCss} onClick={logoClickHandler}>
      <span css={logoBallCss}></span>
      <NameSvg />
    </div>
  );
}
