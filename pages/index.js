import Library from "../components/Library";
import Hospital from "../components/Hospital";
import NorthernLights from "../components/NorthernLights";
import Levies from "../components/Levies";
import Link from "next/link";

function demoPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../public/american-flag-in-wind.jpg")})`,
        width: "100%",
        height: "100$",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          padding: "10%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            margin: "0",
            padding: "0",
          }}
        >
          <h1>True Conservative Voter Guide</h1>
          <h3>
            Bonner County Election May 18th. Save Bonner County, your vote
            matters!
          </h3>
          <div>
            <h3>Library board, you get to vote for two people</h3>
            <h4>Recommended</h4>
            <Library />
          </div>
          <div>
            <h3>Hospital Board, you get to vote for two people</h3>
            <h4>Recommended</h4>
            <Hospital />
          </div>

          <div>
            <h5>
              Keep your eyes peeled for a separate ballot that may be mailed to
              you for voting on the local power Company (Northern Lights) board
            </h5>
            <h6>Recommended</h6>
            <NorthernLights />
          </div>
          <div>
            <h3>Bonds and Levies</h3>
            <h4>Recommended</h4>
            <Levies />
          </div>
          <div>
            <h3>WHERE TO VOTE INFORMATION</h3>
            <Link href="/locations">
              <a>Click here to get information on where to vote</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default demoPage;
