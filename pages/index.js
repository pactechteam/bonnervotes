
import Candidate from "../components/Candidate";
import Image from 'next/image'
import Link from "next/link";
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
              <img src="/img/blank-img.png" alt="No photo" />
              <h4>Robert Rutan</h4>
              <span>Kootenai City Council</span>
              <br/>
              <Link href="https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-City-of-Kootenai-Seat-1.pdf">
                <a target="_blank">My Values</a>
              </Link>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col2)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="/img/blank-img.png" alt="No photo" />
              <h4>Merlin Glass</h4>
              <span>Dover City Council</span>
              <br />
              <Link href="https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-City-of-Dover-Council-Member.pdf">
                <a target="_blank">My Values</a>
              </Link>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col3)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="/img/blank-img.png" alt="No photo" />
              <h4>Jalon Peters</h4>
              <span>Lake Pend Orielle School Board</span>
              <br />
              <Link href="https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-Lake-Pend-Oreille-School-District-Zone-2.pdf">
                <a target="_blank">My Values</a>
              </Link>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col4)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="/img/blank-img.png" alt="No photo" />
              <h4>Susan Brown</h4>
              <span>West Bonner County School Board</span>
              <br />
              <Link href="https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-West-Bonner-County-School-District-Zone-2.pdf">
                <a target="_blank">My Values</a>
              </Link>
            </div>
            <div className={classNames(styles.trueConserv, styles.col, styles.col5)}>
              <img className={styles.star} src="/svg/star-badge.svg" />
              <img src="/img/blank-img.png" alt="No photo" />
              <h4>Keith Rutledge</h4>
              <span>West Bonner County School Board</span>
              <br />
              <Link href="https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-West-Bonner-County-School-District-Zone-4.pdf">
                <a target="_blank">My Values</a>
              </Link>
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
