import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "@/styles/Imprint.module.scss";
const Imprint: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alexander Auris | Imprint</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="main">
        <div className={styles.imprint}>
          <h3>IMPRINT</h3>
          <div>
            <p>Angaben gemäss § 5 TMG</p>
            <p>Alexander Auris</p>
            <p>Linienstraße 110</p>
            <p>10115 Berlin, Germany</p>
          </div>
          <div className="">
            <p>Kontakt</p>
            <p>Telefon: xxxxxxxxxx</p>
            <p>E-Mail: xxxxxxxxxxxx</p>
          </div>
          <div className="">
            <p>Umsatzsteuer-ID</p>
            <p>xxxxxxxxxxxxxxxxxx</p>
          </div>
          <div className="">
            <p>Disclaimer</p>
            <p>Liability for the contents:</p>
            <p>
              Although the contents of our website have been prepared with the
              greatest care, we cannot assume any liability for the correctness,
              completeness and topicality of the contents. As a service provider
              we are responsible in accordance with Article 7 par.1 of the
              German Telemedia Act (TMG) for own contents on these pages under
              the general laws. Pursuant to Articles 8 through 10 TMG however we
              are not under obligation as a service provider to monitor
              transmitted or stored third-party information or to search for
              circumstances which may point on illegal activities. Obligations
              to remove or block the use of information according to the general
              laws remain unaffected. Any liability in this respect is, however,
              is only possible from the moment of knowledge ofz a concrete
              infringement of rights. If we become aware of legal violations, we
              shall immediately remove these contents.
            </p>
          </div>
          <div className="">
            <p>Liability concerning links:</p>
            <p>
              Our offer contains links to external web pages of third parties,
              whose contents are not subject to our in uence. Therefore we
              cannot accept any liability for these external contents. The
              respective supplier or operator of the sites is always responsible
              for the contents of the linked websites.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Imprint;
