import Head from "next/head";

// QA fixture (PRD 869ehvdg8, story 3): a real gen-2 install shape — the anti-flicker
// style is script-created (not static), stamped __opti_af_v=2, dead-man at 300ms
// (pre-D181's 800ms), NO D180 preconnect tag. Reproduced from the generation
// commentary in packages/snippets/src/install/install-template.ts ("GENERATION 2").

export default function QaGen2Stale() {
  return (
    <>
      <Head>
        <title>QA: gen-2 stale install</title>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.optimeleon=window.optimeleon||function(){(optimeleon.q=optimeleon.q||[]).push(arguments);return{ok:true,verb:String(arguments[0]||''),error:'queued'}};window.__opti_bus=\"__opti_capture\";window.__opti_capture=window.__opti_capture||function(){(__opti_capture.q=__opti_capture.q||[]).push(arguments)};(function(d,w){try{if(w.__opti_af_v)return;w.__opti_af_v=2;var f,s=d.createElement('style');s.id='__opti_af';s.textContent='body{opacity:0!important}';d.head.appendChild(s);var r=function(){f=1;var e=d.getElementById('__opti_af');if(e)e.remove()};w.__opti_af_r=r;setTimeout(r,300);var o=new MutationObserver(function(){if(f)r()});o.observe(d.documentElement,{childList:true,subtree:true});setTimeout(function(){o.disconnect()},10000)}catch(e){}})(document,window);",
          }}
        />
        <script async src="https://edge.optimeleon.com/b/qaCppr8869eh.js" />
        <script async src="https://edge.optimeleon.com/c/qaCppr8869eh.js" />
      </Head>
      <main style={{ padding: "4rem", fontFamily: "monospace" }}>
        <h1>QA: gen-2 (stale) install</h1>
        <p>Script-created style, __opti_af_v=2, no D180 preconnect. Token: qaCppr8869eh</p>
        <p>Expected: presence confirmed, generationTier = below-current, amber warning.</p>
      </main>
    </>
  );
}
