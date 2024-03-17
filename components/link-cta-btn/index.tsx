import { btnWrapperCss } from "@/components/link-cta-btn/styles";
import { LinkCtaBtnProps } from "@/components/link-cta-btn/types";
import Link from "next/link";

export default function LinkCtaBtn(props: LinkCtaBtnProps) {
  const { text, extraStyles, link } = props;
  return (
    <Link href={link} css={[btnWrapperCss, extraStyles]}>
      {text}
    </Link>
  );
}
