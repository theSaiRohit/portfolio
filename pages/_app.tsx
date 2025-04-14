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
      {/* Inline script to set consent in localStorage */}
      <Script id="opti-consent" strategy="afterInteractive">
        {`
          window.setOptiCookieConsent = (consent) => {
            localStorage.setItem("opti_consent", consent);
          };
        `}
      </Script>

      {/* External async script */}
      <Script
        strategy="afterInteractive"
        async
        src="https://cdn-stag.optimeleon.com/mer-gryuk/sai-gryup/main.js"
      />
      <GlobalContextProvider>
        <Head>
          <title>Sai Rohit</title>
        </Head>
        <Global styles={globalStyles} />
        <Header />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </GlobalContextProvider>
    </>
  );
}
