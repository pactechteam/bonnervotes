import Image from 'next/image'
import styles from "../styles/Header.module.scss";


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.taglineBox}>
        <h2 className={styles.tagline}>
          The Voting Guide
          <br/>
          <em>for</em> Bonner County
        </h2>
        <nav>
          <a>2021 Elections</a>
          <a>Where To Vote</a>
          <a>Our Values</a>
        </nav>
      </div>
      <div className={styles.logoBox}>
        <Image src="/svg/logo_main.svg" width={400 * 1.2} height={100 * 1.2} />
      </div>
    </header>
  );
}

export default Header;
