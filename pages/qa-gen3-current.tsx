import Head from "next/head";

// QA fixture (PRD 869ehvdg8, story 6): the real, current-generation install snippet,
// generated verbatim via buildInstallSnippet({ edgeToken: 'qaCppr8869eh' }) from
// packages/snippets/src/install/install-snippet.ts on ralph/869ehvdg8. Static
// <script src> tag — this is the baseline "already correctly detected" case S1's
// acceptance criteria calls out as a regression guard.

export default function QaGen3Current() {
  return (
    <>
      <Head>
        <title>QA: gen-3 current install</title>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.optimeleon=window.optimeleon||function(){(optimeleon.q=optimeleon.q||[]).push(arguments);return{ok:true,verb:String(arguments[0]||''),error:'queued'}};window.__opti_bus=\"__opti_capture\";window.__opti_capture=window.__opti_capture||function(){(__opti_capture.q=__opti_capture.q||[]).push(arguments)};(function(d,w){try{if(w.__opti_af_v)return;w.__opti_af_v=3;var f,s=d.createElement('style');s.id='__opti_af';s.textContent='body{opacity:0!important}';d.head.appendChild(s);var r=function(){f=1;var e=d.getElementById('__opti_af');if(e)e.remove()};w.__opti_af_r=r;setTimeout(r,800);var o=new MutationObserver(function(){if(f)r()});o.observe(d.documentElement,{childList:true,subtree:true});setTimeout(function(){o.disconnect()},10000)}catch(e){}})(document,window);",
          }}
        />
        <script
          async
          src="https://edge.optimeleon.com/b/qaCppr8869eh.js"
          onError={undefined}
        />
        <script async src="https://edge.optimeleon.com/c/qaCppr8869eh.js" />
      </Head>
      <main style={{ padding: "4rem", fontFamily: "monospace" }}>
        <h1>QA: gen-3 (current) install</h1>
        <p>Static &lt;script src&gt; tag, real buildInstallSnippet() output. Token: qaCppr8869eh</p>
        <p>Expected: presence confirmed, generationTier = current, no warning.</p>
      </main>
    </>
  );
}
