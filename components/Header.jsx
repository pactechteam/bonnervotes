import Link from 'next/link';

import styles from '../styles/Header.module.scss';

/**
 * Page Header
 */
function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <img src="/svg/logo_main.svg" alt="Bonner Votes" />
        </div>
      </div>

      <div className={styles.navControlBg}>&nbsp;</div>

      <div className={styles.navContainer}>
        <h2 className={styles.tagline}>
          The Voting Guide<br />
          <em>for</em> Bonner County
        </h2>
        <nav className={styles.headerNav}>
          <Link href="/">
            <a>2021 Elections</a>
          </Link>
          <Link href="/where-to-vote">
            <a>Where To Vote</a>
          </Link>
          <Link href="/our-values">
            <a>Our Values</a>
          </Link>
        </nav>
      </div>

      <div className={styles.navControl}>
        <a href="#">X</a>
      </div>

    </header>
  );
}

export default Header;
