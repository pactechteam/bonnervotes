import Candidate from "../components/Candidate";
import Library from "../components/Library";
import Hospital from "../components/Hospital";
import NorthernLights from "../components/NorthernLights";
import Levies from "../components/Levies";
import Link from "next/link";
import Image from 'next/image'
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { fontSize } from "@material-ui/system";


function Home() {
  return (
    <div
      style={{
        backgroundColor: '#162E74',
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
          padding: '10%',
        }}
      >
        <div
          className={styles.stripes}
          style={{
            position: 'relative',
            backgroundColor: 'white',
            margin: '0 auto',
            padding: '60px',
            marginBottom: -350,
            maxWidth: 1080,
            borderRadius: '2px',
          }}
        >
          <div // ------ Stars
            style={{
              position: 'absolute',
              backgroundColor: '#162E74',
              padding: '0 10px 0 10px',
              top: -57,
              left: '50%',
              transform: 'translate(-50%, 0%)',
              textAlign: 'center',
            }}
          >
             <Image src="/gfx/white-stars.svg" width={125} height={40} />
          </div>

          <h1>Elections</h1>
          <h2>Race</h2>
          <ul>
            <Candidate data={{
              imgUrl: 'https://picsum.photos/400/300?grayscale',
              name: 'First Last',
            }}/>
          </ul>

          <div // ------ 2020
            style={{
              position: 'absolute',
              backgroundColor: '#0C1A3D',
              padding: '0 15px 0 15px',
              bottom: -52,
              left: '50%',
              transform: 'translate(-50%, 0%)',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#FFFFFF', fontSize: '18pt' }}>2020</span>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
