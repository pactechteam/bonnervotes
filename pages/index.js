import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/4D525F8A-9952-4854-8906-1A9BD2E41BDE.jpg"
        alt="voter guide"
        width={500}
        height={500}
      />
    </div>
  );
}
