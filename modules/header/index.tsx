import { navList } from "@/common-content";
import ImageWrapper from "@/components/image-wrapper";
import Logo from "@/components/logo";
import { city, locationLink, workText } from "@/modules/header/content";
import {
  greenBallCss,
  hamburgerCss,
  headerBavItemCss,
  headerNavCss,
  headerTextWrapperCss,
  homeHeaderWrapperCss,
  indiaFlagCss,
  locationWrapperCss,
  logoStyleCss,
  workPositionWrapperCss
} from "@/modules/header/styles";
import Link from "next/link";
import { useRef } from "react";

export default function Header() {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const clickHandler = () => {
    const hamburger = hamburgerRef.current;
    const nav = navRef.current;
    if (nav && hamburger) {
      nav.classList.toggle("nav-active");
      hamburger.classList.toggle("hamburger-active");
    }
  };

  const navListMapper = (navItem: (typeof navList)[0]) => {
    const { title } = navItem;
    return (
      <Link href="/" key={`nav-item-${title}`} css={headerBavItemCss}>
        <span>{title}</span>
      </Link>
    );
  };

  return (
    <header css={homeHeaderWrapperCss}>
      <Logo extraStyles={logoStyleCss} />
      <div css={headerTextWrapperCss}>
        <Link href={locationLink} css={locationWrapperCss} rel="noopener noreferrer" target="_blank">
          <span>{city}</span>
          <ImageWrapper src="/images/india-flag-icon.png" alt="India Flag" extraStyles={indiaFlagCss} />
        </Link>
        <div css={workPositionWrapperCss}>
          <span css={greenBallCss}></span>
          <span>{workText}</span>
        </div>
      </div>
      <div css={hamburgerCss} onClick={clickHandler} ref={hamburgerRef}>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      <nav ref={navRef} css={headerNavCss}>
        {navList.map(navListMapper)}
      </nav>
    </header>
  );
}
