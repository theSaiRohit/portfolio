import HomePageModule from "@/modules/home";

// QA (PRD 869ehvdg8): the site-wide snippet now lives in _document.tsx (first tag in
// <head>, avoids the F22 placement-quality "loads too late" flag). This page is the
// plain, fully-confirmed gen-3 root that unlocks the Installation wizard's step-4 gate.

export default function Home() {
  return <HomePageModule />;
}
