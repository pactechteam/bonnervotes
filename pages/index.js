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
        </div>
      </section>
      Candidates And Propositions
      <section id="all-candidates" className={styles.candidatesSection}>
        <div className="content">
          <div className={styles.titleBox}>
            <h3>Candidates</h3>
            <span className={"checkmark"}>
              *Recommended
              <span>&nbsp;</span>
            </span>
          </div>
          <ul className={`${styles.endorsedGrid} grid`}>
            {/* Data */}
            <Endorsed
              data={{
                name: "Keith Rutledge",
                position: "WBCSD Zone 4 Trustee",
                website: undefined,
                surveyUrl: undefined,
                slug: "keithRutledge",
              }}
            />
            <Endorsed
              data={{
                name: "Susan Brown",
                position: "WBCSD Zone 2 Trustee",
                website: undefined,
                facebook: undefined,
                surveyUrl: undefined,
                slug: undefined,
              }}
            />
            {/* <Endorsed
              data={{
                name: "Vote No",
                position: "West Bonner County School District Levy",
                facebook:
                  "https://www.facebook.com/profile.php?id=100092253524705&mibextid=ZbWKwL",
                website: undefined,
                surveyUrl: undefined,
                missingImg: false,
                slug: "voteNo",
                moreInformation: "/levy",
                isPng: true,
              }}
            /> */}
          </ul>
        </div>
      </section>{" "}
    </article>
  );
}

export default Home;
