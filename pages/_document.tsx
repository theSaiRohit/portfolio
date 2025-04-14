import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <Script
          strategy="beforeInteractive"
          src="https://cdn-stag.optimeleon.com/por-8dwep/def-8dwep/main.js"
        />
        <Script
          id="abhide"
          dangerouslySetInnerHTML={{
            __html: `
            var timeout = 3000;
            !function(h,i,d,e){var t,n=h.createElement("style");n.id=e,n.innerHTML="body{opacity:0}",h.head.appendChild(n),t=d,i.rmfk=function(){var t=h.getElementById(e);t&&t.parentNode.removeChild(t)},setTimeout(i.rmfk,t)}(document,window,timeout,"abhide");
          `
          }}
        /> */}
        <Script id="optimeleon-overlay" strategy="beforeInteractive">
          {`
          !(function (h, i, e) {
            var t = 3000;
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
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
