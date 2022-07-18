import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "@/styles/Info.module.scss";
import Image from "next/image";
import info from "@/mocks/info.json";
import { IInfo } from "@/interfaces/info.interface";
import Link from "next/link";
const Info: NextPage = () => {
  const infoData: IInfo = info;
  return (
    <div>
      <Head>
        <title>Alexander Auris | Architect</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="main">
        <div className={styles.info}>
          <div className={styles.info__text}>
            <div>
              <p className={styles.info__subtitle}>INFORMATION</p>
              <p className={styles.info__body}>
                Alexander Auris (he/him) is a Peruvian architect and researcher
                based in Brussels since 2018. In 2015 he received his bachelor’s
                degree at Pontificia Universidadl Catolica del Peru (PUCP), and
                he completed his master’s degree in architecture at KU Leuven,
                Belgium in 2020. His academic background is complemented by
                practical experiences in Denmark, Japan, and Cambodia. His
                research objectives have an intersectional approach, while his
                interests are the relations between social movements,
                performance, and space. He has developed restoration and
                museography projects in Lima and he currently works as an
                independent architect in Brussels.
                <br />
                <br />
                His work deals with the preexistence and heritage, such as his
                ongoing research on archeological sites in Peru and its
                relationship with the contemporary city, the museography for the
                Pinacoteca Municipal Ignacio Merino in Lima, and Symbiosis
                coworking space.
                <br />
                <br />
                Recently he has contributed in the exhibition Institution
                Building at CIVA Brussels, and Oslo Architecture Triennale. His
                work unfolds from an intimate exploration of his
                intersectionality in relation to space and it is presented in
                different types of media such as video, writing, performance,
                and spatial design.
                <br />
                <br />
                Alexander is always eager to connect with people so do not
                hesitate to contact him!
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className={styles.info__subtitle}>CONTACT</p>
              <a className={styles.info__item} href="mailto:hola@alexauris.com">
                hola@alexauris.com
              </a>
              <a className={styles.info__item} href="tel:+320471521267">
                +32 (0) 471 52 12 67
              </a>

              <p className={styles.info__item}>Brussels, Belgium</p>
            </div>
            <div>
              <p className={styles.info__subtitle}>EDUCATION</p>
              {infoData.education.map((item, index) => (
                <div className={styles.info__separated} key={index}>
                  <p>{item.year}</p>
                  <p className={styles.info__item}>
                    {item.text}
                    <br />
                    {item.extra ?? ""}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.info__subtitle}>EXPERIENCE</p>
              {infoData.experience.map((item, index) => (
                <div className={styles.info__separated} key={index}>
                  <p>{item.year}</p>
                  <Link href={item.url} passHref>
                    <a target="_blank">
                      <p className={styles.info__item}>{item.text}</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.info__subtitle}>ACADEMIC</p>
              {infoData.academic.map((item, index) => (
                <div className={styles.info__separated} key={index}>
                  <p>{item.year}</p>
                  <p className={styles.info__item}>{item.text}</p>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.info__subtitle}>LECTURES</p>
              {infoData.lectures.map((item, index) => (
                <div className={styles.info__separated} key={index}>
                  <p>{item.year}</p>
                  <p className={styles.info__item}>{item.text}</p>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.info__subtitle}>EXHIBITIONS</p>
              {infoData.exhibitions.map((item, index) => (
                <div className={styles.info__separated} key={index}>
                  <p>{item.year}</p>
                  <p className={styles.info__item}>{item.text}</p>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.info__subtitle}>PUBLICATIONS</p>
              {infoData.publications.map((item, index) => (
                <div className={styles.info__separated} key={index}>
                  <p>{item.year}</p>
                  <p className={styles.info__item}>
                    {item.italics ? (
                      <i>{item.title} </i>
                    ) : (
                      <span>{item.title} </span>
                    )}

                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.info__subtitle}>RECOGNITIONS</p>
              {infoData.recognitions.map((item, index) => (
                <div className={styles.info__separated} key={index}>
                  <p>{item.year}</p>
                  <p className={styles.info__item}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.info__image}>
            <Image
              src={"/images/Alex-Auris-2.jpg"}
              alt="Alex"
              height={528}
              width={352}
              layout={"responsive"}
            />
            <p style={{ textAlign: "right", fontSize: "0.8em" }}>
              Photo by Veerle Vercauteren
            </p>
          </div>
        </div>
        <div className={styles.credits}>
          <p>
            This website and its content is copyright of Alexander Auris. All
            rights reserved.
          </p>
          <p>
            Web design by&nbsp;
            <Link href={`https://www.studioeinsberlin.de`} passHref>
              <a target="_blank">STUDIO EINS BERLIN</a>
            </Link>
          </p>
          <p>Web development by Jorge Yakushi</p>
          <p>© 2022 Alexander Auris</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Info;
