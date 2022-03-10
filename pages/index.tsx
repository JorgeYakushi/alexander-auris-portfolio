import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { Hero } from "@/components/Hero";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexander Auris</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
    </div>
  );
};

export default Home;
