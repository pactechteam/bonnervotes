import Link from 'next/link';

import styles from '../styles/Footer.module.scss';

/**
 * Page Footer
 */
function Footer() {
  return (
    <footer className={styles.footer}>
    <div className="content grid">

      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <img src="/svg/logo_footer.svg" alt="Bonner Votes" />
        </div>
      </div>

      <nav className={styles.footerNav}>
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
    </footer>
  );
}

export default Footer;
