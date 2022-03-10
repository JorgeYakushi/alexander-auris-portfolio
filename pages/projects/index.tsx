import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../../styles/Projects.module.scss";
import { useState } from "react";
import projects from "../../mocks/projects.mock.json";
import { IProject } from "../../interfaces/projects.interface";
const Projects: NextPage = () => {
  const [filter, setFilter] = useState(0);
  const handleFilter = (e: any) => {
    setFilter(parseInt(e.target.value));
  };
  const projArray: IProject[] = projects.projects;
  return (
    <div>
      <Head>
        <title>Alexander Auris | Projects</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div
        className="main"
        // style={{
        //   marginTop: 0,
        // }}
      >
        <div className={styles.projects}>
          <ul className={styles.filters}>
            <li>
              <input
                type="radio"
                name="All"
                id="radio-all"
                value="0"
                checked={filter === 0}
                onChange={handleFilter}
              />
              <label htmlFor="radio-all">All</label>
            </li>
            <li>
              <input
                type="radio"
                name="Architecture"
                id="radio-architecture"
                value="1"
                checked={filter === 1}
                onChange={handleFilter}
              />
              <label htmlFor="radio-architecture">Architecture</label>
            </li>
            <li>
              <input
                type="radio"
                name="Art"
                id="radio-art"
                value="2"
                checked={filter === 2}
                onChange={handleFilter}
              />
              <label htmlFor="radio-art">Art</label>
            </li>
            <li>
              <input
                type="radio"
                name="Research"
                id="radio-research"
                value="3"
                checked={filter === 3}
                onChange={handleFilter}
              />
              <label htmlFor="radio-research">Research</label>
            </li>
          </ul>
          <div className={styles.projects__container}>
            {projArray
              .filter((proj) => filter === 0 || proj.type === filter)
              .map((item, index) => (
                <div
                  className={[
                    styles.projects__item,
                    styles[`${item.size}-container`],
                  ].join(" ")}
                  key={index}
                >
                  <div className={[styles.image, styles[item.size]].join(" ")}>
                    <div
                      className={styles["image--mask"]}
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <Image
                      src={item.previewImageUrl ? item.previewImageUrl : "/"}
                      alt={item.name}
                      layout={"fill"}
                    />
                  </div>
                  <div className={styles.name}>
                    <p>Project Title {item.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
