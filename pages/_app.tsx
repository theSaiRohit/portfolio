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
          <script type="text/javascript">
            {`window.setOptiCookieConsent = function(consent) {
    localStorage.setItem("opti_consent", consent);
  };
  
   // Auto-accept consent if explicit consent mode is disabled
   window.setOptiCookieConsent("yes");
  `}
          </script>

          <script type="text/javascript" async>
            {`!(function (h, i, e) {
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
 
  !function(e,t,n,o,a,s,u){e.optimeleon||(a=e.optimeleon=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},a.push=a,a.queue=[],(s=t.createElement(n)).async=!0,s.src="https://cdn-stag.optimeleon.com/sai-azyhc/sai-azyhd/v1.main.js",(u=t.getElementsByTagName(n)[0]).parentNode.insertBefore(s,u))}(window,document,"script");
  optimeleon("init",true,true);`}
          </script>
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
