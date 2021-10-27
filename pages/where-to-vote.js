import img from "../public/pollinglocations.png";
import Link from "next/link";

function Locations() {
  return (
    <div>
      <h1>Voter location information</h1>
      <div>
        <Link href="https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingLocation.aspx">
          <a target="blank">Look up your voting location here</a>
        </Link>
      </div>
      <p>Please see the below list of Bonner County polling locations.</p>
      <img src={img} />
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
      <Link
        href="https://www.bonnercountyid.gov/departments/Elections"
        target="blank"
      >
        <a>county webpage source link</a>
      </Link>
    </div>
  );
}
export default Locations;
