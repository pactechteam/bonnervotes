import Head from "next/head";
import Image from "next/image";

export default function Flyer() {
  return (
    <div>
      <Image src="/flyer.jpg" alt="voter guide" width={500} height={500} />
    </div>
  );
}
