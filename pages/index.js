// import { fontSize } from '@material-ui/system';

import Endorsed from "../components/Endorsed";
import Candidate from "../components/Candidate";
import styles from "../styles/pages/Index.module.scss";
import candidateData from "../data/candidate-data.json";

/**
 * Home Page
 */

function Home() {
  return (
    <article className={styles.homePage}>
      {/*  Idaho True Conservatives */}
      <section id="endorsed" className={styles.endorsedSection}>
        <div className="content">
          <div className={styles.endorsedHeading}>
            <h3>
              Idaho True
              <br />
              Conservatives
            </h3>
          </div>

          <ul className={`${styles.endorsedGrid} grid`}>
            {/* Data */}
            <Endorsed
              data={{
                name: "Janice McGeachin",
                position: "Governor",
                website: "https://janiceforidaho.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Idaho-Governor-4.pdf",
                slug: "Janice-mcgeachin",
              }}
            />
            <Endorsed
              data={{
                name: "Priscilla Giddings",
                position: "Lt. Governor",
                website: "https://www.giddingsforidaho.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Idaho-Lieutenant-Governor.pdf",
                slug: "priscilla-giddings",
              }}
            />
            <Endorsed
              data={{
                name: "Dorothy Moon",
                position: "Secretary of State",
                website: "https://dorothymoon.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Idaho-Secretary-of-State-1.pdf",
                slug: "dorothy-moon",
              }}
            />
            <Endorsed
              data={{
                name: "Branden Durst",
                position: "State Superintendent",
                website: "https://www.durstforidaho.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Idaho-Superintendent-of-Public-Instruction-1.pdf",
                slug: "branden-durst",
              }}
            />
            <Endorsed
              data={{
                name: "Asia Williams",
                position: "Bonner County Commissioner Dist. 2",
                website: "https://voteasiawilliams.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Bonner-County-Commissioner-District-2b.pdf",
                slug: "asia-williams",
              }}
            />
            <Endorsed
              data={{
                name: "Grant Dorman",
                position: "Bonner County Assessor",
                website: "https://grantdorman.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Bonner-County-Assessor.pdf",
                slug: "grant-dorman",
              }}
            />
            <Endorsed
              data={{
                name: "Clorrisa Koster",
                position: "Bonner County Treasurer",
                website: "https://www.clorrisakoster.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Bonner-County-Treasurer.pdf",
                slug: "clorrisa-koster",
              }}
            />
            <Endorsed
              data={{
                name: "Scott Herndon",
                position: "State Senator Legislative District 1",
                website: "https://herndonforidaho.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Legislative-District-1-State-Senator.pdf",
                slug: "scott-herndon",
              }}
            />
            <Endorsed
              data={{
                name: "Todd Engel",
                position: "State Representative Legislative District 1B",
                website: "https://engelforidaho.com/",
                surveyUrl:
                  "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2022/04/Watchmen-Voter-Guide-for-Legislative-District-1-State-Representative-Position-B-2.pdf",
                slug: "todd-engel",
              }}
            />
          </ul>
        </div>
      </section>
      {/* 
      {/*  All Candidates
      <section id="all-candidates" className={styles.candidatesSection}>
        <div className="content">
          <div className={styles.titleBox}>
            <h3>All Candidates</h3>
            <p>
              *Recommended <img src="/svg/star-badge.svg" />
            </p>
          </div>
          <ul className={`${styles.candidatesGrid} grid`}>
            {candidateData.map((item, i) => (
              <Candidate key={i} data={item} />
            ))}
          </ul>
        </div>
      </section>{" "}
      */}
    </article>
  );
}

export default Home;
