import { mail } from "@/common-content";
import Heading from "@/components/heading";
import LinkCtaBtn from "@/components/link-cta-btn";
import MessageStrip from "@/components/message-strip";
import { workCtaText, workStripMsg, worksDescription, worksHeading } from "@/modules/home/home-works/content";
import { workWrapperCss } from "@/modules/home/home-works/styles";

export default function HomeWorks() {
  const worksMapper = (_: unknown, index: number) => {
    return <div key={index}>hi</div>;
  };
  return (
    <section css={workWrapperCss}>
      <MessageStrip
        textOne={workStripMsg.split(" ")[0]}
        textTwo={workStripMsg.split(" ")[1]}
        rotate="0"
        top="0"
        zIndex="0"
      />
      <div>
        <div css={{ display: "flex", flexDirection: "column" }}>
          <Heading text={worksHeading} />
          <p>{worksDescription}</p>
          <LinkCtaBtn link={`mailto:${mail}`} text={workCtaText} />
        </div>
        <div>{Array(5).fill({}).map(worksMapper)}</div>
      </div>
    </section>
  );
}
