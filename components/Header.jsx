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
          margin: 65,
          //marginTop: 80,
          //marginBottom: 80,
          textAlign: "center",
        }}
      >
        <Image src="/svg/logo_on-dark.svg" width={400} height={100} />
        <h1 style={{ fontSize: "20pt", fontWeight: "lighter", color: "white", mixBlendMode: "soft-light" }}>
          The Voter Guide <em>for</em> Bonner County
        </h1>
      </div>
    </header>
  );
}

export default Header;
