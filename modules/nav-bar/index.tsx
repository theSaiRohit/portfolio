import { navList } from "@/common-content";
import useMousePos from "@/hooks/use-mouse-pos";
import { navItemCss, navItemWrapperCss, navWrapperCss } from "@/modules/nav-bar/styles";
import Link from "next/link";

export default function NavBar() {
  const containerRef = useMousePos();
  const navListMapper = (navItem: (typeof navList)[0]) => {
    const { title } = navItem;
    return (
      <Link href="/" key={`nav-item-${title}`} css={navItemWrapperCss(title.length)}>
        <div className="link-wrapper" css={navItemCss}>
          <span>{title}</span>
        </div>
      </Link>
    );
  };
  return (
    <nav css={navWrapperCss} ref={containerRef}>
      {navList.map(navListMapper)}
    </nav>
  );
}
