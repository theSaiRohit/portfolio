import { Head, Html, Main, NextScript } from "next/document";

// QA branch (869ehvdg8): the site-wide snippet lives here (not per-page <Head>) so it
// renders as the literal first tag in <head> — the marketer-app's own placement-quality
// check (F22, installation-probe.ts) flags anything after Next's own framework tags as
// "Code loads too late", which is correct, pre-existing behavior unrelated to this PRD.
// Not for merge — see pages/qa-* for the per-page detection-ladder fixtures.

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.optimeleon=window.optimeleon||function(){(optimeleon.q=optimeleon.q||[]).push(arguments);return{ok:true,verb:String(arguments[0]||''),error:'queued'}};window.__opti_bus=\"__opti_capture\";window.__opti_capture=window.__opti_capture||function(){(__opti_capture.q=__opti_capture.q||[]).push(arguments)};(function(d,w){try{if(w.__opti_af_v)return;w.__opti_af_v=3;var f,s=d.createElement('style');s.id='__opti_af';s.textContent='body{opacity:0!important}';d.head.appendChild(s);var r=function(){f=1;var e=d.getElementById('__opti_af');if(e)e.remove()};w.__opti_af_r=r;setTimeout(r,800);var o=new MutationObserver(function(){if(f)r()});o.observe(d.documentElement,{childList:true,subtree:true});setTimeout(function(){o.disconnect()},10000)}catch(e){}})(document,window);",
          }}
        />
        <script async src="http://localhost:8787/b/5EpvkeCqEPHU.js" />
        <script async src="http://localhost:8787/c/5EpvkeCqEPHU.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
