import Image from 'next/image'
import styles from "../styles/Header.module.scss";
import Link from "next/link";


function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.logoBox}>
        <Image src="/svg/logo_main.svg" width={400 * 1.2} height={100 * 1.2} />
      </div>

      <div className={styles.navContainer}>
        <h2 className={styles.tagline}>
          The Voting Guide
          <br />
          <em>for</em> Bonner County
        </h2>
        <nav className={styles.headerNav}>
          <Link prefetch={true} href="/">
            <a>2021 Elections</a>
          </Link>
          <Link prefetch={true} href="/where-to-vote">
            <a>Where To Vote</a>
          </Link>
          <Link prefetch={true} href="/our-values">
            <a>Our Values</a>
          </Link>
        </nav>
      </div>

    </header>
  );
}

export default Header;
