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
                name: "Alan Galloway",
                position: "WBCSD Zone 1 Trustee",
                website: undefined,
                surveyUrl: undefined,
                slug: "AlanGalloway",
              }}
            />
            <Endorsed
              data={{
                name: "Troy Reinbold",
                position: "WBCSD Zone 5 Trustee",
                website: undefined,
                facebook: undefined,
                surveyUrl: undefined,
                slug: "TroyReinbold",
              }}
            />
            <Endorsed
              data={{
                name: "Kathy Nash",
                position: "WBCSD Zone 3",
                facebook: undefined,
                website: undefined,
                surveyUrl: undefined,
                missingImg: false,
                slug: "KathyNash",
              }}
            />
          </ul>
        </div>
      </section>{" "}
    </article>
  );
}

export default Home;
