// import { fontSize } from '@material-ui/system';

import Endorsed from "../components/Endorsed";
import Candidate from "../components/Candidate";
import styles from "../styles/pages/Index.module.scss";
import candidateData from "../data/candidate-data.json";
import Image from "next/image";

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
      Due to recent concerns, we wanted to list all of the candidates we have
      ever endorsed and publicly supported.
      <section id="all-candidates" className={styles.candidatesSection}>
        <div className="content">
          <div>
            <div>
              May 2021
              <img src="/flyers/21_may_412x639.jpg" height={700} />
              November 2021
              <img src="/flyers/21_nov_7200x9576.png" height={700} />
              May 2022
              <img src="/flyers/22_may_707x1078.PNG" height={700} />
              May 2023
              <img src="/flyers/23_may_709x1063.PNG" height={700} />
              And yes, we are AGAINST the August 2023 recall in West Bonner
              County. Please see our much prettier sister site,{" "}
              <a href="https://www.westbonnervotes.org">westbonnervotes.org</a>,
              for more information.
            </div>
          </div>
        </div>
      </section>{" "}
    </article>
  );
}

export default Home;
