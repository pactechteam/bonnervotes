import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'next/image'


function Header() {
  return (
    <header
      // style={{
      //   display: "flex",
      //   //alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <div
        style={{
          marginTop: 80,
          textAlign: "center",
        }}
      >
        <Image src="/logo/logo_on-dark.svg" width={480} height={120} />
        <h2 style={{ fontWeight: "lighter", color: "white", mixBlendMode: "soft-light" }}>
          The Voter Guide <em>for</em> Bonner County
        </h2>
      </div>
    </header>
  );
}

export default Header;
