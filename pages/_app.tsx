import GlobalContextProvider from "@/context/global-context/context-provider";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import NavBar from "@/modules/nav-bar";
import { globalStyles } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  return (
      <GlobalContextProvider>
        <Head>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `!(function (h, i, e) { var t = 5000; var n = h.createElement("style"); n.id = e; n.innerHTML = "body{opacity:0}"; h.head.appendChild(n); i.rmfk = function () { var t = h.getElementById(e); t && t.parentNode.removeChild(t); }; setTimeout(i.rmfk, t); })(document, window, "optimeleon-overlay");`,
            }}
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `window.setOptiCookieConsent = function(consent) { localStorage.setItem("opti_consent", consent); };`,
            }}
          /> */}
          {/* <script
            async
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,n,o,a,c,l){e.optimeleon||(a=e.optimeleon=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},a.push=a,a.queue=[],(c=t.createElement(n)).async=!0,c.src="https://cdn-stag.optimeleon.com/cli-pvk31/sai-pvk36/v1.main.js",(l=t.getElementsByTagName(n)[0]).parentNode.insertBefore(c,l))}(window,document,"script"); optimeleon("init",true,true);`,
            }}
          /> */}
          <script src="https://webappdatastaging.blob.core.windows.net/cus-pkitr/ver-pkitw/main.js" async />
          <title>Sai Rohit</title>
        </Head>
        <Global styles={globalStyles} />
        <Header />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </GlobalContextProvider>
  );
}
