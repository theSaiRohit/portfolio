import Head from "next/head";
import HomePageModule from "@/modules/home";

// QA (PRD 869ehvdg8): the domain root carries the tag-manager-wrapped install shape
// (the PRD's headline case) so the marketer-app's OWN "Verify installation" probe —
// which reads the declared domain's root page with ?opti_verify=true appended, per
// verify-test-url.ts — can exercise the real end-to-end detection path, not just the
// isolated /qa-* fixture pages. Token matches the local dev stack's seeded project.

export default function Home() {
  return (
    <>
      <Head>
        <script
          id="gtm-custom-html-1"
          dangerouslySetInnerHTML={{
            __html:
              "(function(d,w){w.__opti_af_v=3;var s=d.createElement('script');s.async=true;s.src='http://localhost:8787/b/'+'5EpvkeCqEPHU'+'.js';d.head.appendChild(s);var c=d.createElement('script');c.async=true;c.src='http://localhost:8787/c/'+'5EpvkeCqEPHU'+'.js';d.head.appendChild(c);})(document,window);",
          }}
        />
      </Head>
      <HomePageModule />
    </>
  );
}
