
import Candidate from "../components/Candidate";
import Image from 'next/image'
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import gridStyles from "../styles/Grid.module.scss";
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
             <Image src="/svg/stars_on-dark.svg" width={125} height={40} />
          </div>

          <h2>Library Board</h2>
          <ul className={gridStyles.grid}>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
            }}>
              <p>
                Kathy Rose Statement: A public use policy defining the EBCL
                entrance requirements, which has been delegated to the Library
                Director, is an abdication of authority. The five member Board
                of Trustees best serves its constituents when there is diversity
                of opinions to decide library issues. Currently, a single person,
                the Library Director, has been given unbridled authority. She is
                allowed to criminally trespass public taxpayers who fund the
                operation of the library, for simply not wearing a face mask.
                Her recently published statements demonstrate her view of the
                collective over individual liberty. This policy is suppression,
                infringement, and discrimination, and it must be terminated.
                The mission of a public library is to provide free and open
                access to a broad range of materials and services to people of
                all ages and backgrounds. During their April board meeting,
                instead of voting to terminate the policy, the trustees admitted
                they were ignorant of the science by deciding they needed more
                information. After more than a year…they need more information?
                There is another challenge on the horizon. Cancel culture is an
                evolving movement to re-define history and who we are. The
                pressure to participate in the modern day book burning is
                evident in this country. I have no doubt it will begin to affect
                our own library and they may capitulate by removing books such
                as the children’s favorite Dr. Seuss books. This type of
                censorship should never be accepted in North Idaho. I offer to
                the EBCL Trustee Board constructive advice and un-repenting
                conservative philosophy that represents, at the very least, a
                majority of liberty and freedom voters of the EBCL District.
                We need to get the rural residents out to vote because we out-
                number the city. Vote May 18th!
              </p>
              <h4>
                Biographical Information:
              </h4>
              <ul>
                <li>
                  Served as Vice President, Bonner County Republican Women,
                  Inc., 2015-2017.
                </li>
                <li>
                  Currently serving as Secretary of the Bonner County
                  Republican Central Committee since 2016.
                </li>
                <li>Past experience as an elected School Board Trustee
                </li>
                <li>
                  2 years as a small business owner • Married, two daughters,
                  Stephanie 30, Jessica 27
                </li>
                <li>
                  Resident of Bonner County for 7 years
                </li>
                <li>
                  Bachelor’s Degree from American International College.
                </li>
              </ul>
            </Candidate>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
            }}/>
          </ul>
          <h2>Hospital Board</h2>
          <ul className={gridStyles.grid}>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
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
