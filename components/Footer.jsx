import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'next/image'


function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0C1A3D',
        padding: '600px 125px 35px 125px',
        // display: 'flex',
        // //alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Image src="/logo/logo_on-dark.svg" width={200} height={50} />
      </div>
    </footer>
  );
}

export default Footer;
