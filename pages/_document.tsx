import { Head, Html, Main, NextScript } from "next/document";

// QA branch (869ehvdg8): the site-wide Optimeleon snippet is removed here so each
// /qa-* test page can carry its own isolated install variant instead. Not for merge —
// see pages/qa-* for the fixtures.

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
