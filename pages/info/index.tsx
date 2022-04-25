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
              <p className={styles.info__subtitle}>EDUCATION</p>
              <p className={styles.info__subtitle}>-</p>
              <p
                className={styles.info__subbody}
                style={{ fontWeight: "bold" }}
              >
                Master of Architecture, KU Leuven 2018-2020.
              </p>
              <p className={styles.info__subbody}>Graduated Magna Cum Laude</p>
              <br />
              <p className={styles.info__subbody}>
                Erasmus exchange at Aarhus School of Architecture Fall Semester
                2019
              </p>
              <br />
              <p className={styles.info__subbody}>
                Bachelor’s Degree in Architecture, Pontificia Universidad
                Católica del Perú, 2015
              </p>
            </div>
            <div>
              <p className={styles.info__subtitle}>WORK EXPERIENCE</p>
              <p className={styles.info__subtitle}>-</p>
              <p className={styles.info__subbody}>
                <b>FILTER CAFE FILTRE ORG - </b>
                <i>https://www.filter-cafe.org/</i>
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                October 2020 - Present
              </p>
              <br />
              <p className={styles.info__subbody}>
                <b>ARCHITECTUUR PLATFORM - </b>
                <i>https://www.architectuurplatform.com/</i>
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                October 2020 - Present
              </p>
              <br />
              <p className={styles.info__subbody}>
                <b>EMILIMA S.A - </b>
                <i>http://emilima.com.pe/</i>
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                July 2017 - July 2018
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                Design and development of museographic and restorarion projects
                in the Historic Center of Lima.
              </p>
              <br />
              <p className={styles.info__subbody}>
                <b>DESSIN TECHNISCH - </b>
                <i>https://www.dessin-technisch.com/</i>
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                May 2016 - Jun 2017
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                Architectural and urban design for residencial and cultural
                projects.
              </p>
              <br />
              <p className={styles.info__subbody}>
                <b>FIGARI ARQUITECTOS - </b>
                <i>http://www.figari.com/</i>
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                May2015 - Feb2016
              </p>
              <p className={styles.info__subbody} style={{ fontSize: "18px" }}>
                Architectural design and project documentation.
              </p>
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
