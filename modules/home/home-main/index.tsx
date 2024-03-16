import { h1Content, h2Text } from "@/modules/home/home-main/content";
import { h1SpanCss, h1WrapperCss, h2Css, mainCss } from "@/modules/home/home-main/styles";

export default function HomeMain() {
  const h1Mapper = (text: string) => {
    return (
      <span key={`h1-span-${text}`} css={h1SpanCss}>
        {text}
      </span>
    );
  };
  return (
    <main css={mainCss}>
      <h1 css={h1WrapperCss}>{h1Content.map(h1Mapper)}</h1>
      <h2 css={h2Css}>{h2Text}</h2>
    </main>
  );
}
