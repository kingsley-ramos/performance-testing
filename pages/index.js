import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from "@nextui-org/react";
import Navigation from "./nav/Navigation";
import BodyCard from "./BodyCard";

export default function Home() {
  const NextButton = () => {
    let array = new Array(200).fill(0);
    const data = array.map((i, key) => <Button href="https://www.codazen.com" key={key}>Default</Button>);
    return data;
  }

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <BodyCard />
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
