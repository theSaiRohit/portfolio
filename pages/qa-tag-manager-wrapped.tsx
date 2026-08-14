import Head from "next/head";

// QA fixture (PRD 869ehvdg8, story 1 — the headline case): the current gen-3 paste
// injected via a single inline script body shaped like a tag-manager Custom-HTML
// container, exactly like snippet-tag-analysis.test.ts's "detects the token inside a
// tag-manager-wrapped CURRENT paste" fixture. No static <script src> for the old
// anchored-tag match to find — only tokenInScriptBody can see this install.
// Token matches the local dev stack's seeded "Default Project".

export default function QaTagManagerWrapped() {
  return (
    <>
      <Head>
        <title>QA: tag-manager-wrapped install</title>
        <script
          id="gtm-custom-html-1"
          dangerouslySetInnerHTML={{
            __html:
              "(function(d,w){w.__opti_af_v=3;var s=d.createElement('script');s.async=true;s.src='http://localhost:8787/b/'+'5EpvkeCqEPHU'+'.js';d.head.appendChild(s);var c=d.createElement('script');c.async=true;c.src='http://localhost:8787/c/'+'5EpvkeCqEPHU'+'.js';d.head.appendChild(c);})(document,window);",
          }}
        />
      </Head>
      <main style={{ padding: "4rem", fontFamily: "monospace" }}>
        <h1>QA: tag-manager-wrapped install</h1>
        <p>Token assembled at runtime inside one inline script body, no static src tag. Token: 5EpvkeCqEPHU</p>
        <p>Expected: tokenInScriptBody = true, generationTier = current, shown as INSTALLED (never &quot;not installed&quot;).</p>
      </main>
    </>
  );
}
