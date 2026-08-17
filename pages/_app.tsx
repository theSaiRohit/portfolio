import ConsentModal from "@/components/consent-modal";
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
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.optimeleon=window.optimeleon||function(){(optimeleon.q=optimeleon.q||[]).push(arguments);return{ok:true,verb:String(arguments[0]||''),error:'queued'}};window.__opti_bus=\"__opti_capture\";window.__opti_capture=window.__opti_capture||function(){(__opti_capture.q=__opti_capture.q||[]).push(arguments)};(function(d,w){try{if(w.__opti_af_v)return;w.__opti_af_v=3;var f,s=d.createElement('style');s.id='__opti_af';s.textContent='body{opacity:0!important}';d.head.appendChild(s);var r=function(){f=1;var e=d.getElementById('__opti_af');if(e)e.remove()};w.__opti_af_r=r;setTimeout(r,800);var o=new MutationObserver(function(){if(f)r()});o.observe(d.documentElement,{childList:true,subtree:true});setTimeout(function(){o.disconnect()},10000)}catch(e){}})(document,window);",
            }}
          />
          <script async src="http://localhost:8787/b/5EpvkeCqEPHU.js" />
          <script async src="http://localhost:8787/c/5EpvkeCqEPHU.js" />
          <title>Sai Rohit</title>
        </Head>
        <Global styles={globalStyles} />
        <Header />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <ConsentModal />
      </GlobalContextProvider>
  );
}
