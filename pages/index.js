import Library from "../components/Library";
import Hospital from "../components/Hospital";
import NorthernLights from "../components/NorthernLights";
import Levies from "../components/Levies";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { fontSize } from "@material-ui/system";
import SusanBrown from "../components/SusanBrown";
function Home() {
  return (
    <div
      style={{
        backgroundColor: "#162E74",
        //width: "100%",
        //height: "100$",
        //backgroundRepeat: "no-repeat",
        //backgroundSize: "cover",
      }}
    >
      <Header />
      <div
        id="main-content"
        style={{
          padding: "10%",
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            margin: "0 auto",
            padding: "60px",
            marginBottom: -350,
            maxWidth: 1080,
            //borderRadius: '25px',
          }}
        >
          <div // ------ Stars
            style={{
              position: "absolute",
              backgroundColor: "#162E74",
              padding: "0 10px 0 10px",
              top: -57,
              left: "50%",
              transform: "translate(-50%, 0%)",
              textAlign: "center",
            }}
          >
            <Image src="/gfx/white-stars.svg" width={125} height={40} />
          </div>
          <br />
          <SusanBrown />
          <div>
            <br />
            <br />
            <h3 style={{ color: "#F43737" }}>Voting Locations</h3>
            <div style={{ color: "#0C1A3D", textDecoration: "underline" }}>
              <Link href="https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingLocation.aspx">
                <a target="blank">Look up your voting location here</a>
              </Link>
            </div>
            <div
              style={{
                marginTop: "5vh",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              <Link href="/locations" passHref>
                <a>Here is a backup if the above does not work</a>
              </Link>
            </div>
          </div>

          <div // ------ 2020
            style={{
              position: "absolute",
              backgroundColor: "#0C1A3D",
              padding: "0 15px 0 15px",
              bottom: -52,
              left: "50%",
              transform: "translate(-50%, 0%)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#C2C3C4",
                /*color: '#162E74', mixBlendMode: 'screen',*/ fontSize: "18pt",
              }}
            >
              2020
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
