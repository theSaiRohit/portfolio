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
      <Script id="optimeleon-overlay" strategy="afterInteractive">
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
