import type { NextPage } from "next";
import react, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import news from "@/mocks/news.mock.json";
import { INews } from "@/interfaces/news.interface";
const Home: NextPage = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const breakpoint = 786;
  const newsArray: INews[] = news.news.slice(0, 3);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexander Auris</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <video
          className={styles.video}
          src="videos/teaser 02.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              layout="fill"
              src={
                width > breakpoint
                  ? "/logos/ALEXANDER-AURIS_LOGO_WHITEe.svg"
                  : "/logos/ALEXANDER-AURIS_LOGO_WHITE_MOBILE.svg"
              }
              alt=""
            />
          </div>
          <div className={styles.menu}>
            <Link href={`/info`} passHref>
              <a>
                <h2>Information</h2>
              </a>
            </Link>
            <Link href={`/projects`} passHref>
              <a>
                <h2>Work</h2>
              </a>
            </Link>
            <Link href={`https://www.instagram.com/world.queer/`} passHref>
              <a target="_blank">
                <h2>Queer world</h2>
              </a>
            </Link>
          </div>
          <div className={styles.news}>
            <p>LATEST NEWS:</p>
            {newsArray.map((news: INews, index: number) => (
              <Link href={news.url} key={index} passHref>
                <a>
                  <p className={styles.news__title}>{news.title}</p>
                  <p className={styles.news__description}>{news.description}</p>
                </a>
              </Link>
            ))}
            <Link href={"/news"}>
              <a>MORE NEWS...</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
