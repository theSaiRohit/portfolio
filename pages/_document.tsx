import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Optimeleon: loader + init. Consent is set from the ConsentModal (components/consent-modal). */}
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
