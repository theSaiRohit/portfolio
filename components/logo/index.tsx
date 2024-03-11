import NameSvg from "@/components/logo/name-svg";
import { logoBallCss, logoWrapperCss } from "@/components/logo/styles";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" css={logoWrapperCss}>
      <span css={logoBallCss}></span>
      <NameSvg />
    </Link>
  );
}
