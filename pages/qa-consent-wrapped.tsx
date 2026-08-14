import Head from "next/head";
import ConsentModal from "@/components/consent-modal";

// QA fixture (PRD 869ehvdg8, stories 2, 7 — S2's CMP auto-accept): the current gen-3
// snippet behind this site's REAL custom consent modal (components/consent-modal),
// not a recognized CMP vendor (Usercentrics/Cookiebot/OneTrust). The stub + queue is
// always present (suppress-only per D-notes in install-snippet.ts), but capture stays
// suppressed until sendConsent(true) fires from a real Accept click.
//
// This is a DELIBERATELY negative case for S2's CMP auto-accept: an unrecognized
// custom consent UI should soft-degrade (no crash, fields null) rather than false-
// triggering on a vendor it doesn't know how to click through.
// Token matches the local dev stack's seeded "Default Project".

export default function QaConsentWrapped() {
  return (
    <>
      <Head>
        <title>QA: consent-wrapped install</title>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.optimeleon=window.optimeleon||function(){(optimeleon.q=optimeleon.q||[]).push(arguments);return{ok:true,verb:String(arguments[0]||''),error:'queued'}};window.__opti_bus=\"__opti_capture\";window.__opti_capture=window.__opti_capture||function(){(__opti_capture.q=__opti_capture.q||[]).push(arguments)};(function(d,w){try{if(w.__opti_af_v)return;w.__opti_af_v=3;var f,s=d.createElement('style');s.id='__opti_af';s.textContent='body{opacity:0!important}';d.head.appendChild(s);var r=function(){f=1;var e=d.getElementById('__opti_af');if(e)e.remove()};w.__opti_af_r=r;setTimeout(r,800);var o=new MutationObserver(function(){if(f)r()});o.observe(d.documentElement,{childList:true,subtree:true});setTimeout(function(){o.disconnect()},10000)}catch(e){}})(document,window);",
          }}
        />
        <script async src="http://localhost:8787/b/5EpvkeCqEPHU.js" />
        <script
          async
          src="http://localhost:8787/c/5EpvkeCqEPHU.js"
          data-consent-default="opt-in"
        />
      </Head>
      <main style={{ padding: "4rem", fontFamily: "monospace" }}>
        <h1>QA: consent-wrapped install</h1>
        <p>
          Current gen-3 snippet, real custom consent modal (not a recognized CMP vendor). Token:
          5EpvkeCqEPHU
        </p>
        <p>
          Expected: static + kernel presence checks both confirm current-gen install regardless of
          consent state (suppress-only capture). Kernel&apos;s CMP auto-accept does NOT recognize this
          custom modal &mdash; should soft-degrade (no crash, null CMP fields), not false-click it.
        </p>
      </main>
      <ConsentModal />
    </>
  );
}
