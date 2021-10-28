import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/pages/Locations.module.scss';

/**
 * Locations Page
 */
function Locations() {
  return (
    <article className={styles.locationsPage}>
      <section>
        <div className="content">

          <h1>Voter location information</h1>
          <div>
            <Link href="https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingLocation.aspx">
              <a target="blank">Look up your voting location here</a>
            </Link>
          </div>
          <p>Please see the below list of Bonner County polling locations.</p>
          <figure>
            <img src="/img/pollinglocations.png" alt="Polling place addresses" />
          </figure>
          <div>
            <ul>
              <li>
                Clark Fork and Lakeview will now be voting at the Clark Fork‐Hope
                Area Senior Center located at 1001 Cedar St., Clark Fork.
              </li>{" "}
              <li>
                East Priest River and West Priest River will now be co-located at
                the Priest River Event Center located at 5399 US Highway 2 in Priest
                River.
              </li>{" "}
              <li>
                Beach will now be co-located with Washington at the First Lutheran
                Church located at 526 Olive Ave in Sandpoint.
              </li>{" "}
            </ul>
          </div>
          <Link href="https://www.bonnercountyid.gov/departments/Elections">
            <a target="blank">County webpage source link</a>
          </Link>

        </div>
      </section>
    </article>
  );
}
export default Locations;
