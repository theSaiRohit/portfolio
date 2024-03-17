import { errorMsg, errorName } from "@/modules/error-404/error-strip/content";
import {
  errorInfoContainerCss,
  errorMsgCss,
  errorNameCss,
  errorStripCss,
  errorStripTrackCss
} from "@/modules/error-404/error-strip/styles";
import { ErrorStripProps } from "@/modules/error-404/error-strip/types";

export default function ErrorStrip(props: ErrorStripProps) {
  const { rotate, zIndex, top } = props;
  const errorMapper = (_: unknown, index: number) => {
    return (
      <div key={index} css={errorInfoContainerCss}>
        <span css={errorNameCss}>{errorName}</span>
        <span css={errorMsgCss}>{errorMsg}</span>
      </div>
    );
  };
  return (
    <div css={errorStripCss(rotate, zIndex, top)}>
      <div css={errorStripTrackCss}>{Array(10).fill({}).map(errorMapper)}</div>
      <div css={errorStripTrackCss}>{Array(10).fill({}).map(errorMapper)}</div>
    </div>
  );
}
