import Head from "next/head";

// QA fixture (PRD 869ehvdg8, stories 2, 3): a real gen-1 install shape — static
// <style id="__opti_af"> element, NO __opti_af_v stamp of any kind (stamping was
// introduced in gen-2, D176). Mirrors GEN1_ONLY_HTML in
// apps/marketer-api/services/analytics/snippet-tag-analysis.test.ts exactly.

export default function QaGen1Stale() {
  return (
    <>
      <Head>
        <title>QA: gen-1 stale install</title>
        <style id="__opti_af">{`body{opacity:0!important}`}</style>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.optimeleon=window.optimeleon||function(){};window.__opti_bus=\"__opti_capture\";setTimeout(function(){var s=document.getElementById('__opti_af');if(s)s.remove()},300);",
          }}
        />
        <script async src="https://edge.optimeleon.com/b/qaCppr8869eh.js" />
      </Head>
      <main style={{ padding: "4rem", fontFamily: "monospace" }}>
        <h1>QA: gen-1 (stale) install</h1>
        <p>Static style element, no generation stamp at all. Token: qaCppr8869eh</p>
        <p>Expected: presence confirmed, generationTier = below-current, amber warning.</p>
      </main>
    </>
  );
}
