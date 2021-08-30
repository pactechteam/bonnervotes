import Library from "../components/Library";
import Hospital from "../components/Hospital";
import NorthernLights from "../components/NorthernLights";
import Levies from "../components/Levies";
import Link from "next/link";

function Home() {
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
            padding: "25px",
            borderRadius: "25px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            Idaho True Conservatives Voter Guide
          </h1>
          <h2 style={{ textAlign: "center" }}>
            The Voting Guide for Bonner County
          </h2>
          <br />
          <br />
          <div>
            <h3>Library Board; you get to vote for two people</h3>
            <h4>Recommended</h4>
            <Library />
          </div>
          <div>
            <h3>Hospital Board; you get to vote for two people</h3>
            <h4>Recommended</h4>
            <Hospital />
          </div>

          <div>
            <h5>
              Don't forget to mail in your ballots for NLI District 4, which is
              Sagle/Careywood area. These ballots need to be received by May
              10th via mail, or drop them off at NLI in Sagle.
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
            <div style={{ color: "blue", textDecoration: "underline" }}>
              <Link href="https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingLocation.aspx">
                <a target="blank">Look up your voting location here</a>
              </Link>
            </div>
            <div
              style={{
                marginTop: "10vh",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              <Link href="/locations" passHref>
                <a>Here is a backup if the above does not work</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
