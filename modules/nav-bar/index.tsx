import { navList } from "@/common-content";
import { navItemCss, navWrapperCss } from "@/modules/nav-bar/styles";
import Link from "next/link";

export default function NavBar() {
  const navListMapper = (navItem: (typeof navList)[0]) => {
    const { title } = navItem;
    return (
      <Link href="/" key={`nav-item-${title}`} css={navItemCss}>
        {title}
      </Link>
    );
  };
  return <nav css={navWrapperCss}>{navList.map(navListMapper)}</nav>;
}
