import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "@/styles/News.module.scss";
import news from "@/mocks/news.mock.json";
import { INews } from "@/interfaces/news.interface";
import Link from "next/link";
const News: NextPage = () => {
  const newsArr: INews[] = news.news;

  return (
    <div>
      <Head>
        <title>Alexander Auris | Projects</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="main">
        <div className={styles.news}>
          <h3>NEWS</h3>
          <div className={styles.news__container}>
            {newsArr.map((item: INews, index: number) => (
              <div className={styles.news__item} key={index}>
                <Link href={item.url} passHref>
                  <a target="_blank">
                    <div className={styles.image}>
                      <img
                        src={item.photoUrl ? item.photoUrl : "/"}
                        alt={item.title}
                      />
                    </div>
                    <div className={styles.text}>
                      <p className={styles.title}>{item.title}</p>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default News;
