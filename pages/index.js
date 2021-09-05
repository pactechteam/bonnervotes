import Candidate from "../components/Candidate";
import Image from 'next/image'
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import gridStyles from "../styles/Grid.module.css";
import { fontSize } from "@material-ui/system";


function Home() {
  return (
    <div
      style={{
        backgroundColor: '#162E74',
      }}
    >
      <Header />
      <div id="main-content" className={styles.main}>
        <div
          className={styles.stripes}>
          <div className={styles.stars}>
             <Image src="/gfx/white-stars.svg" width={125} height={40} />
          </div>

          <h1>Elections</h1>
          <h2>Race</h2>
          <ul className={gridStyles.grid}>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
            }}/>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
              small: 1,
            }}/>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
              small: 1,
            }}/>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
            }}/>
          </ul>

          <div className={styles.year}>
            <span>2020</span>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
