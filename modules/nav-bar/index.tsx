import { navList } from "@/common-content";
import useMousePos from "@/hooks/use-mouse-pos";
import { navItemCss, navItemWrapperCss, navWrapperCss } from "@/modules/nav-bar/styles";
import { useCallback, useEffect, useRef } from "react";

export default function NavBar() {
  const containerRef = useMousePos();
  const sectionTopVals = useRef<number[]>([]);

  useEffect(() => {
    if (innerHeight < 758) return;
    const scrollSections = Array.from(document.querySelectorAll(".scroll-section"));
    const topCalcTimeout = setTimeout(() => {
      for (const scrollSection of scrollSections) {
        sectionTopVals.current.push(scrollSection.getBoundingClientRect().top);
      }
    }, 100);
    topCalcTimeout;
    return () => clearTimeout(topCalcTimeout);
  });

  const onClickHandler = useCallback((index: number) => {
    return () => {
      window.scrollTo({
        behavior: "smooth",
        top: sectionTopVals.current[index]
      });
    };
  }, []);
  const navListMapper = (navItem: (typeof navList)[0], index: number) => {
    const { title } = navItem;
    return (
      <div key={`nav-item-${title}`} css={navItemWrapperCss(title.length)} onClick={onClickHandler(index)}>
        <div className="link-wrapper" css={navItemCss}>
          <span>{title}</span>
        </div>
      </div>
    );
  };
  return (
    <nav css={navWrapperCss} ref={containerRef}>
      {navList.map(navListMapper)}
    </nav>
  );
}
