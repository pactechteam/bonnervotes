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
                surveyUrl: "",
                slug: "Janice-mcgeachin",
              }}
            />
            <Endorsed
              data={{
                name: "Priscilla Giddings",
                position: "Lt. Governor",
                website: "https://www.giddingsforidaho.com/",
                surveyUrl: "",
                slug: "priscilla-giddings",
              }}
            />
            <Endorsed
              data={{
                name: "Dorothy Moon",
                position: "Secretary of State",
                website: "https://dorothymoon.com/",
                surveyUrl: "",
                slug: "dorothy-moon",
              }}
            />
            <Endorsed
              data={{
                name: "Branden Durst",
                position: "Secretary of State",
                website: "https://www.durstforidaho.com/",
                surveyUrl: "",
                slug: "branden-durst",
              }}
            />
            <Endorsed
              data={{
                name: "Asia Williams",
                position: "Bonner County Commissioner Dist. 2",
                website: "https://voteasiawilliams.com/",
                surveyUrl: "",
                slug: "asia-williams",
              }}
            />
            <Endorsed
              data={{
                name: "Grant Dorman",
                position: "Bonner County Assessor",
                website: "https://grantdorman.com/",
                surveyUrl: "",
                slug: "grant-dorman",
              }}
            />
            <Endorsed
              data={{
                name: "Clorrisa Koster",
                position: "Bonner County Assessor",
                website: "https://www.clorrisakoster.com/",
                surveyUrl: "",
                slug: "clorrisa-koster",
              }}
            />
            <Endorsed
              data={{
                name: "Scott Herndon",
                position: "State Senator Legislative District 1",
                website: "https://herndonforidaho.com/",
                surveyUrl: "",
                slug: "scott-herndon",
              }}
            />
            <Endorsed
              data={{
                name: "Todd Engel",
                position: "State Representative Legislative District 1B",
                website: "https://engelforidaho.com/",
                surveyUrl: "",
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
