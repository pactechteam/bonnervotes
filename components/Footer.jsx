import Image from 'next/image'
import styles from "../styles/Footer.module.scss"


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image src="/svg/logo_footer.svg" width={240 * 0.9} height={75 * 0.9} />
      </div>
    </footer>
  );
}

export default Footer;
