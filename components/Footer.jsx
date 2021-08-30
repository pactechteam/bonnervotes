import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'next/image'


function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0C1A3D',
        padding: '600px 0 60px 0',
        // display: 'flex',
        // //alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <div
        style={{
          //marginBottom: 60,
          textAlign: 'center',
        }}
      >
        <Image src="/logo/logo_on-dark.svg" width={200} height={50} />
      </div>
    </footer>
  );
}

export default Footer;
