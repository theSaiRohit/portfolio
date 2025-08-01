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
        {/* Load Optimeleon script dynamically */}
        <Script
          id="optimeleon-loader"
          strategy="afterInteractive"
          src="https://cdn-stag.optimeleon.com/ser-r31sv/sai-r31t5/v1.main.js"
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
                a.src="https://cdn-stag.optimeleon.com/ser-r31sv/sai-r31t5/v1.main.js",
                (c=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,c))
              }(window,document,"script");
              optimeleon("init",true,true);
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
