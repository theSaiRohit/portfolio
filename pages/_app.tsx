import GlobalContextProvider from "@/context/global-context/context-provider";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import NavBar from "@/modules/nav-bar";
import { globalStyles } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  useEffect(() => { window.CFQ = window.CFQ || []; window.CFQ.push({ emit: 'pageHydrated' }) }, [])
  return (
    <>
      <GlobalContextProvider>
        <Head>
          <title>Sai Rohit</title>
        </Head>
        {/* Load Optimeleon script dynamically */}
        <Script
          id="optimeleon-loader"
          strategy="afterInteractive"
          src="https://webappdatastaging.blob.core.windows.net/ser-r31sv/sai-r31t5/debug/v1.main.js"
          async
        />
        <Script
          id="optimeleon-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,o,s,a,c){
                e.optimeleon||(s=e.optimeleon=function(){
                  s.callMethod?s.callMethod.apply(s,arguments):s.queue.push(arguments)
                },
                s.push=s,s.queue=[],
                (a=t.createElement(n)).async=!0,
                a.src="https://webappdatastaging.blob.core.windows.net/ser-r31sv/sai-r31t5/debug/v1.main.js",
                (c=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,c))
              }(window,document,"script");
              optimeleon("init",true,true);
            `,
          }}
        />
        <Script
  id="set-opti-cookie-consent"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.setOptiCookieConsent = (consent) => {
        localStorage.setItem("opti_consent", consent);
      };

      // Automatically set a default consent if none exists
      if (!localStorage.getItem("opti_consent")) {
        window.setOptiCookieConsent("true");
      }
    `,
  }}
/>



        <Global styles={globalStyles} />
        <Header />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </GlobalContextProvider>
    </>
  );
}
