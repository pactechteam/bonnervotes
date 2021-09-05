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
        <Image src="/logo/logo_on-dark.svg" width={480} height={120} />
        <h1 style={{ fontSize: "22pt", fontWeight: "lighter", color: "white", mixBlendMode: "soft-light" }}>
          The Voter Guide <em>for</em> Bonner County
        </h1>
      </div>
    </header>
  );
}

export default Header;
