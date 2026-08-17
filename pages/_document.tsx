import { Head, Html, Main, NextScript } from "next/document";

// QA branch (869ehvdg8): the site-wide snippet lives in _app.tsx now, ordered before
// the <title> tag — Next's F22 placement check (installation-probe.ts) requires the
// script within the first 3 <head> children (idx <= 2, packages/shim/src/render.ts),
// and _document.tsx's own Head renders AFTER _app's merged content, so a script placed
// here always lands after Next's own charSet/viewport (unavoidable, must be first for
// the browser to parse the rest) plus whatever _app already contributed.
// Not for merge — see pages/qa-* for the per-page detection-ladder fixtures.

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
