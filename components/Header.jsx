import {useState} from "react"
import Link from 'next/link';

import styles from '../styles/Header.module.scss';

/**
 * Page Header
 */
function Header() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function closeMenu(e) {
    setIsOpen(false);
    console.log("success");
  }

  const toggleClass = isOpen ? 'open' : '';

  return (
    <header className={styles.header}>

      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <img src="/svg/logo_main.svg" alt="Bonner Votes" />
        </div>
      </div>

      <div className={styles.navControlBg}>&nbsp;</div>

      <div className={`${toggleClass} ${styles.navContainer}`}>
        <h2 className={styles.tagline}>
          The Voting Guide<br />
          <em>for</em> Bonner County
        </h2>
        <nav className={`${styles.headerNav}`}>
          <Link href="/">
            <a onClick={closeMenu}>2021 Elections</a>
          </Link>
          <Link href="/where-to-vote">
            <a onClick={closeMenu}>Where To Vote</a>
          </Link>
          <Link href="/our-values">
            <a onClick={closeMenu}>Our Values</a>
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


