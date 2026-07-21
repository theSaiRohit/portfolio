import { Head, Html, Main, NextScript } from "next/document";

// Optimeleon anti-flicker + stub. Consent is sent from the ConsentModal
// (components/consent-modal) via optimeleon("consent", { analytics }).
const OPTIMELEON_STUB = `window.optimeleon=window.optimeleon||function(){(optimeleon.q=optimeleon.q||[]).push(arguments);return{ok:true,verb:String(arguments[0]||''),error:'queued'}};window.__opti_bus="__opti_capture";window.__opti_capture=window.__opti_capture||function(){(__opti_capture.q=__opti_capture.q||[]).push(arguments)};setTimeout(function(){var s=document.getElementById('__opti_af');if(s)s.remove()},300);`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="__opti_af"
          dangerouslySetInnerHTML={{ __html: `body{opacity:0!important}` }}
        />
        <script dangerouslySetInnerHTML={{ __html: OPTIMELEON_STUB }} />
        <script async src="https://edge-staging.optimeleon.com/b/h7iUBYnof2l2.js" />
        <script
          async
          src="https://edge-staging.optimeleon.com/c/h7iUBYnof2l2.js"
          data-consent-default="opt-in"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
