import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alexander Auris | Projects</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <Footer></Footer>
    </div>
  );
};

export default Projects;
