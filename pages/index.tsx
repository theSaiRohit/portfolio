import Head from "next/head";
import HomePageModule from "@/modules/home";

// QA (PRD 869ehvdg8): the domain root carries the plain, fully-confirmed gen-3
// snippet (static <script src>) so the marketer-app's own Installation wizard
// (D94, install-flow-model.ts) advances past its hard script-detection gate and
// unlocks Verify installation (step 4) for a real UI walk. The tag-manager-wrapped
// case (the PRD's headline story) is proven separately via /qa-tag-manager-wrapped
// and its own "Tracking code found, version unconfirmed" screenshot — this swap
// doesn't retract that evidence, it only frees the root page to test step 4+.
// Token matches the local dev stack's seeded project.

export default function Home() {
  return (
    <>
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
      <HomePageModule />
    </>
  );
}
