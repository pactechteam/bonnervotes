// import { fontSize } from '@material-ui/system';

import Endorsed from '../components/Endorsed';
import Candidate from '../components/Candidate';
import styles from '../styles/pages/Index.module.scss';
import candidateData from '../data/candidate-data.json';

/**
 * Home Page
 */
function Home() {

  return (
    <article className={styles.homePage}>

      {/*  Idaho True Conservatives */}
      <section id="endorsed" className={styles.endorsedSection}>
        <div className ="content">

          <div className={styles.endorsedHeading}>
            <h3>Idaho True<br />Conservatives</h3>
          </div>

          <ul className={`${styles.endorsedGrid} grid`}>

            {/* Data */}
            <Endorsed data={{
              name: "Robert Rutan",
              position: "Kootenai City Council",
              surveyUrl: "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-City-of-Kootenai-Seat-1.pdf"
              }}/>
            <Endorsed data={{
              name: "Merlin Glass",
              position: "Dover City Council",
              surveyUrl: "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-City-of-Dover-Council-Member.pdf",
            }}/>
            <Endorsed data={{
              name: "Keith Rutledge",
              position: "West Bonner County School Board",
              surveyUrl: "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-West-Bonner-County-School-District-Zone-4.pdf",
              }}/>
            <Endorsed data={{
              name: "Susan Brown",
              position: "West Bonner County School Board",
              surveyUrl: "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-West-Bonner-County-School-District-Zone-2.pdf",
              }}/>
            <Endorsed data={{
              name: "Jalon Peters",
              position: "Lake Pend Orielle School Board",
              surveyUrl: "https://secureservercdn.net/198.71.233.39/amv.995.myftpupload.com/wp-content/uploads/2021/10/Watchmen-Voter-Guide-for-Lake-Pend-Oreille-School-District-Zone-2.pdf",
              }}/>
          </ul>

        </div>
      </section>

      {/*  All Candidates */}
      <section id="all-candidates" className={styles.candidatesSection}>
        <div className="content">

          <h3>All Candidates</h3>
          <ul className={`${styles.candidatesGrid} grid`}>
            {candidateData.map((item, i) => (
              <Candidate key={i} data={item} />
            ))}
          </ul>

        </div>
      </section>
    </article>
  );
}

export default Home;
