import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.scss";

/**
 * Page Header
 */
function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function closeMenu(e) {
    setIsOpen(false);
    console.log("success");
  }

  const toggleClass = isOpen ? "open" : "";

  function activeIf(path) {
    return router.pathname === path ? styles.active : "";
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Link href="/">
          <a className={styles.logo}>
            <img src="/svg/logo_main.svg" alt="Bonner Votes" />
          </a>
        </Link>
      </div>

      <div className={styles.navControlBg}>&nbsp;</div>

      <div className={`${toggleClass} ${styles.navContainer}`}>
        <h2 className={styles.tagline}>
          The Voting Guide
          <br />
          <em>for</em> Bonner County
        </h2>
        <nav className={`${styles.headerNav}`}>
          <Link href="/">
            <a className={activeIf("/")} onClick={closeMenu}>
              2022 Elections
            </a>
          </Link>
          <Link href="/where-to-vote">
            <a className={activeIf("/where-to-vote")} onClick={closeMenu}>
              Where To Vote
            </a>
          </Link>
          <Link href="/our-values">
            <a className={activeIf("/our-values")} onClick={closeMenu}>
              Our Values
            </a>
          </Link>
          <Link href="https://pacfilespublic.s3.us-west-2.amazonaws.com/22_pac_slate.pdf">
            <a
              className={activeIf("/22_pac_slate.pdf")}
              onClick={closeMenu}
              target="_blank"
            >
              Printable slate
            </a>
          </Link>
          <Link href="https://bonnergop.org/voter-guide/">
            <a onClick={closeMenu} target="_blank">
              GOP Slate
            </a>
          </Link>
        </nav>
      </div>

      <div className={`${styles.navControl}`}>
        <a href="#" onClick={toggleMenu}>
          {isOpen ? (
            <img src="/svg/close-icon.svg" />
          ) : (
            <img src="/svg/menu-icon.svg" />
          )}
        </a>
      </div>
    </header>
  );
}

export default Header;
