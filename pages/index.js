
import Candidate from "../components/Candidate";
import Image from 'next/image'
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import classNames from 'classnames';
import { fontSize } from "@material-ui/system";
import candidateData from "../data/candidate-data.json"


function Home() {
  return (
    <div>
      <Header />
      <div id="main-content" className={styles.main}>

        {/*  True Conservatives */}
        <section id="verified-conservatives" className={styles.verified}>

          <div className={styles.verifiedGrid}>
            <div className={styles.vertLine}></div>
            <div className={styles.gridTitleRow}><h3>True Conservatives</h3></div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col1)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="https://unsplash.it/799/804" />
              <h4>Robert Rutan</h4>
              <span>Kootenai City Council</span>
              <br/>
              <a>My Views</a>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col2)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="https://unsplash.it/799/804" />
              <h4>Merlin Glass</h4>
              <span>Dover City Council</span>
              <br />
              <a>My Views</a>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col3)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="https://unsplash.it/799/804" />
              <h4>Jalon Peters</h4>
              <span>Lake Pend Orielle School Board</span>
              <br />
              <a>My Views</a>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col4)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="https://unsplash.it/799/804" />
              <h4>Susan Brown</h4>
              <span>West Bonner County School Board</span>
              <br />
              <a>My Views</a>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col5)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="https://unsplash.it/799/804" />
              <h4>Keith Rutledge</h4>
              <span>West Bonner County School Board</span>
              <br />
              <a>My Views</a>
            </div>
          </div>
        </section>

        {/*  All Candidates */}
        <section id="all-candidates" className={styles.candidates}>
          <h3>All Candidates</h3>
          <ul className={styles.candidatesGrid}>
            {candidateData.map((item, i) => (
              <Candidate key={i} data={item} />
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
