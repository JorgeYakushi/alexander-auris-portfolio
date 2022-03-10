import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "@/styles/Info.module.scss";
import Image from "next/image";
const Info: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alexander Auris | Imprint</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="main">
        <div className={styles.info}>
          <div className={styles.info__text}>
            <div>
              <p className={styles.info__subtitle}>INFORMATION</p>
              <p className={styles.info__body}>
                Alex Auris (he/him) is a Peruvian architect and researcher based
                in Brussels since 2018. In 2015 he received his bachelor’s
                degree at Catholic University of Peru (PUCP), and he completed
                his master’s degree in architecture at KU Leuven, Belgium in
                2020.His academic background is complemented by practical
                experiences in Denmark, Japan, and Cambodia. His research
                objectives have an intersectional approach, while his interests
                are the relations between social movements, performance, and
                space. He has developed restoration and museography projects in
                Lima and he currently works as an
              </p>
            </div>
            <div>
              <p className={styles.info__subtitle}>CONTACT</p>
              <p className={styles.info__body}>A.AURIS@GMAIL.COM</p>
            </div>
            <div>
              <p className={styles.info__subtitle}>PUBLICATIONS</p>
              <p className={styles.info__body}>asasasasasfddfhdfvdscn</p>
            </div>
          </div>
          <div className={styles.info__image}>
            <Image
              src={"/images/Alex-Auris.png"}
              alt="Alex"
              height={515}
              width={386}
              layout={"responsive"}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Info;
