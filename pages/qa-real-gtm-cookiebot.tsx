import Head from "next/head";

// QA fixture (PRD 869ehvdg8) — real vendor CMP + real GTM loader, not simulated shapes.
// Loads the ACTUAL Google Tag Manager script (googletagmanager.com/gtm.js) and the
// ACTUAL Cookiebot SDK (consent.cookiebot.com/uc.js), mirroring the exact fixture shape
// py-intelligence's own keyless test fixture uses (detection/fixtures.py:
// FIXTURE_RENDERED_HTML) — demo GTM id GTM-FIXTURE, demo Cookiebot CBID
// 00000000-0000-0000-0000-000000000000. The Optimeleon snippet is injected via GTM's
// own runtime pattern (dataLayer push + a script GTM would inject as a Custom HTML
// tag) so this exercises the REAL vendor SDKs, not a hand-rolled approximation.
// Token matches the local dev stack's seeded "Default Project".

export default function QaRealGtmCookiebot() {
  return (
    <>
      <Head>
        <title>QA: real GTM + Cookiebot</title>

        {/* Real Cookiebot SDK — the kernel's CMP auto-accept targets window.Cookiebot
            directly (consent_acceptor.py: submitCustomConsent). */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="00000000-0000-0000-0000-000000000000"
          data-blockingmode="auto"
          async
        />

        {/* Real GTM loader — exact snippet Google's own container-install instructions
            give, demo container id (matches py-intelligence's own fixture). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-FIXTURE');",
          }}
        />

        {/* The Optimeleon install, injected the way a GTM Custom HTML tag actually
            fires it at runtime (dataLayer.push + dynamic script creation) — no static
            <script src> for the old anchored-tag match to find, mirroring story 1's
            headline case but through a real GTM container this time. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'optimeleon_custom_html_fired'});(function(d,w){w.__opti_af_v=3;var s=d.createElement('script');s.async=true;s.src='http://localhost:8787/b/'+'5EpvkeCqEPHU'+'.js';d.head.appendChild(s);var c=d.createElement('script');c.async=true;c.src='http://localhost:8787/c/'+'5EpvkeCqEPHU'+'.js';d.head.appendChild(c);})(document,window);",
          }}
        />
      </Head>
      <main style={{ padding: "4rem", fontFamily: "monospace" }}>
        <h1>QA: real GTM + Cookiebot</h1>
        <p>Real googletagmanager.com/gtm.js loader (GTM-FIXTURE) + real consent.cookiebot.com/uc.js SDK (demo CBID). Optimeleon injected GTM-tag-style at runtime. Token: 5EpvkeCqEPHU</p>
        <p>Expected: tokenInScriptBody = true, generationTier = current, CMP auto-accept targets window.Cookiebot.submitCustomConsent, dashboard shows installed (never &quot;not installed&quot;).</p>
      </main>
    </>
  );
}
