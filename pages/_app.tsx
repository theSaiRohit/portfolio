import GlobalContextProvider from "@/context/global-context/context-provider";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import NavBar from "@/modules/nav-bar";
import { globalStyles } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalContextProvider>
        <Head>
          <title>Sai Rohit</title>
        </Head>

        {/* --- Load Optimeleon Scripts Properly --- */}

        {/* Define helper function */}
        <Script id="set-opticookie-fn" strategy="afterInteractive">
          {`
            window.setOptiCookieConsent = function(consent) {
              localStorage.setItem("opti_consent", consent);
            };
          `}
        </Script>

        {/* Load Optimeleon main script */}
        <Script
          id="optimeleon-main"
          src="https://cdn-stag.optimeleon.com/sai-x7jcx/sai-x7jcx/v1.main.js"
          async
          strategy="afterInteractive"
        />

        {/* Initialize Optimeleon */}
        <Script id="optimeleon-init" strategy="afterInteractive">
          {`
            (function(e,t,n,o,c,a,s){
              if(!e.optimeleon){
                c = e.optimeleon = function(){
                  c.callMethod ? c.callMethod.apply(c, arguments) : c.queue.push(arguments);
                };
                c.push = c;
                c.queue = [];
                a = t.createElement(n);
                a.async = true;
                a.src = "https://cdn-stag.optimeleon.com/sai-x7jcx/sai-x7jcx/v1.main.js";
                s = t.getElementsByTagName(n)[0];
                s.parentNode.insertBefore(a, s);
              }
            })(window, document, "script");
            optimeleon("init", true, true);
          `}
        </Script>

        {/* Set consent immediately */}
        <Script id="optimeleon-consent" strategy="afterInteractive">
          {`window.setOptiCookieConsent("yes");`}
        </Script>

        {/* --- Global styles & Layout --- */}
        <Global styles={globalStyles} />
        <Header />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </GlobalContextProvider>
    </>
  );
}
