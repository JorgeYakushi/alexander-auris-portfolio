import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "@/styles/Projects.module.scss";
import { useState } from "react";
import projects from "@/mocks/projects.mock.json";
import { IProject } from "@/interfaces/projects.interface";
import Link from "next/link";
const Projects: NextPage = () => {
  const [filter, setFilter] = useState(0);
  const handleFilter = (e: any) => {
    setFilter(parseInt(e.target.value));
  };
  const projArray: IProject[] = projects.projects.sort((a, b) =>
    a.order > b.order ? 1 : -1
  );
  return (
    <div>
      <Head>
        <title>Alexander Auris | Architect</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="main">
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
            {projArray.map((item, index) =>
              !item.hidden ? (
                <div
                  className={styles.projects__item}
                  key={index}
                  style={{
                    margin: item.margin,
                  }}
                >
                  <div
                    className={styles.image}
                    style={{
                      width: item.widthPercentage + "vw",
                      aspectRatio:
                        item.width.toString() + "/" + item.height.toString(),
                    }}
                  >
                    <Link href={`/project/${item.id}`} passHref>
                      <div
                        className={styles.image__container}
                        style={{
                          width: item.widthPercentage + "vw",
                          aspectRatio:
                            item.width.toString() +
                            "/" +
                            item.height.toString(),
                          filter:
                            filter !== 0 && filter !== item.type
                              ? "grayscale(100%)"
                              : "initial",
                          color: "coral",
                          fontSize: "max(1.25vw, 24px)",
                          backgroundColor: "#eee",
                        }}
                      >
                        {item.type === 1 || item.type === 2 ? (
                          <div
                            className={styles["image--mask"]}
                            style={{ backgroundColor: item.color }}
                          ></div>
                        ) : null}
                        {item.previewImageUrl ? (
                          <img
                            src={
                              item.previewImageUrl ? item.previewImageUrl : "/"
                            }
                            alt={item.name}
                          />
                        ) : (
                          <p>{item.name}</p>
                        )}
                      </div>
                    </Link>
                  </div>
                  {item.type === 1 || item.type === 2 ? (
                    <div className={styles.name}>
                      <p>{item.name}</p>
                    </div>
                  ) : null}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
