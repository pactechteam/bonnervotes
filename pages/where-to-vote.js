import Image from "next/image";
import Link from "next/link";

import styles from "../styles/pages/Locations.module.scss";

/**
 * Locations Page
 */
function Locations() {
  return (
    <article className={styles.locationsPage}>
      <section className="body-copy">
        <div className="content">
          <h1>Find your polling location. </h1>
          <p>
            You can view your local polling location by
            <Link href="https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingLocation.aspx">
              <a target="_blank"> clicking here.</a>
            </Link>
          </p>
          {/* <figure>
            <Link href="/img/pollinglocations.png">
              <a target="_blank">
                <img src="/img/pollinglocations.png" alt="Polling place addresses" />
              </a>
            </Link>
          </figure> */}
          {/* <div>
            <p>
              <strong><em>Please Note: </em></strong>
              <br/>
              Clark Fork and Lakeview will now be voting at the Clark Fork‐Hope
              Area Senior Center located at 1001 Cedar St., Clark Fork.
              East Priest River and West Priest River will now be co-located at
              the Priest River Event Center located at 5399 US Highway 2 in Priest
              River. Beach will now be co-located with Washington at the First Lutheran
              Church located at 526 Olive Ave in Sandpoint.
            </p>
          </div> */}
          <p>
            <Link href="https://www.bonnercountyid.gov/departments/Elections">
              <a target="blank">Bonner County Elections</a>
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
export default Locations;
