import { navList } from "@/common-content";
import {
  footerNavCss,
  footerNavLinkCss,
  footerNavTitleCss,
  footerNavTitleWrapperCss,
  gridItemsValCss
} from "@/modules/footer/footer-main/footer-nav/styles";

import Link from "next/link";

export default function FooterNav() {
  const footerNavMapper = (navItem: (typeof navList)[0]) => {
    const { desc, title, grid } = navItem;
    return (
      <Link
        href="/"
        key={`footer-nav-item-${title}`}
        css={[footerNavLinkCss, gridItemsValCss(grid.rowVal, grid.colVal)]}
      >
        <div css={footerNavTitleWrapperCss}>
          <span className="footer-nav-title" data-span={title} css={footerNavTitleCss}>
            {title}
          </span>
        </div>
        <p className="footer-nav-desc">{desc}</p>
      </Link>
    );
  };
  return <nav css={footerNavCss}>{navList.map(footerNavMapper)}</nav>;
}
