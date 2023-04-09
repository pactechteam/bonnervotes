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
      All Candidates
      <section id="all-candidates" className={styles.candidatesSection}>
        <div className="content">
          <div className={styles.titleBox}>
            <h3>All Candidates</h3>
            <p>
              *Recommended <img src="/svg/star-badge.svg" />
            </p>
          </div>
          <ul className={`${styles.endorsedGrid} grid`}>
            {/* Data */}
            <Endorsed
              data={{
                name: "Stacy Rodriguez",
                position: "East Bonner CountyLibrary District Trustee",
                website: undefined,
                surveyUrl: undefined,
                slug: "StacyR",
              }}
            />
            <Endorsed
              data={{
                name: "Cynthia Buse",
                position: "Pend O'Relle Hospital District Trustee",
                website: undefined,
                surveyUrl: undefined,
                slug: "buse",
              }}
            />
            <Endorsed
              data={{
                name: "Vote No",
                position: "West Bonner County School District Levy",
                website: undefined,
                surveyUrl: undefined,
                missingImg: true,
                slug: false,
              }}
            />
          </ul>
          ;
        </div>
      </section>{" "}
    </article>
  );
}

export default Home;
