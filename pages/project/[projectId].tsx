import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "@/styles/Project.module.scss";
import { useState } from "react";
import projects from "@/mocks/projects.mock.json";
import { IProject } from "@/interfaces/projects.interface";
import { useRouter } from "next/router";
import Link from "next/link";
const Projects: NextPage = () => {
  const router = useRouter();
  const projectId = parseInt(router.query.projectId as string, 10);
  const projArray: IProject[] = projects.projects;
  const project = projArray.find((item) => item.id === projectId);

  return (
    <div>
      <Head>
        <title>Alexander Auris | {project?.name}</title>
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
        <div className={styles.project}>
          <div className={styles.navigation}>
            <Link href={`/projects`} passHref>
              <a>
                <p>Back to project overview</p>
              </a>
            </Link>
            {projectId !== projArray.length ? (
              <Link href={`/project/${projectId + 1}`} passHref>
                <a>
                  <p>Next project →</p>
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
