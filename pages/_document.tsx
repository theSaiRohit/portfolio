import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const coframeProjectId = '66cc648b38ae92381f5a6032'
  return (
    <Html lang="en">
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !(function(h, i, e) {
                var t = 2000;
                var n = h.createElement("style");
                n.id = e;
                n.innerHTML = "body{opacity:0}";
                h.head.appendChild(n);
                i.rmfk = function () {
                  var t = h.getElementById(e);
                  t && t.parentNode.removeChild(t);
                };
                setTimeout(i.rmfk, t);
              })(document, window, "optimeleon-overlay");
            `,
          }}
        /> */}

        {/* Set OptiCookieConsent function s*/}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.setOptiCookieConsent = (consent) => {
                localStorage.setItem("opti_consent", consent);
              };
            `,
          }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
