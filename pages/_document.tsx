import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Optimeleon: set consent. Switch statistics to false to decline third-party tracking. */}
        <script
          type="text/javascript"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `if (typeof window.setOptiCookieConsent === "function") { window.setOptiCookieConsent({ statistics: true }); }`,
          }}
        />
        {/* Optimeleon: loader + init */}
        <script
          type="text/javascript"
          async
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `!function(e,t,o,n,a,c,i){e.optimeleon||(a=e.optimeleon=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},a.push=a,a.queue=[],(c=t.createElement(o)).async=!0,c.src="https://cdn-dev.optimeleon.com/edg-gvzap/sai-e4ouu/v1.main.js",c.setAttribute("data-cookieconsent","ignore"),(i=t.getElementsByTagName(o)[0]).parentNode.insertBefore(c,i))}(window,document,"script"); optimeleon("init",true,true);`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
