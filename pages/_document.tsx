import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'

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
        />

        Set OptiCookieConsent function
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.setOptiCookieConsent = (consent) => {
                localStorage.setItem("opti_consent", consent);
              };
            `,
          }}
        /> */}

        <Script strategy="beforeInteractive" src={`https://cdn.coframe.com/cf.min.js?project_id=${coframeProjectId}`} />
<Script id='coframe-setup' strategy="beforeInteractive">
    {`
    // Coframe antiflicker: hide body until coframe:show event or 2s timeout
    const style = document.createElement('style');
    style.innerHTML = 'body { opacity: 0 !important; }';
    const cfhide = () => document.head.appendChild(style);
    const cfshow = () => style.remove();
    cfhide(); setTimeout(cfshow, 2000);
    document.addEventListener('coframe:show', cfshow);
    
    // Coframe queue setup:
    window.CFQ = window.CFQ || [];
    window.CFQ.push({config: {
        projectId: '${coframeProjectId}',
        waitForHydration: true, // NOTE: make sure you implemented the second part of the instructions
    }});
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
