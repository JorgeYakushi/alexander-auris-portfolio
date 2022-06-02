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
import { ArtProject } from "@/components/projects/ArtProject";
import { ArchitectureProject } from "@/components/projects/ArchitectureProject";
import { ResearchProject } from "@/components/projects/ResearchProject";
import Link from "next/link";
const Projects: NextPage = () => {
  const router = useRouter();
  const projectId = parseInt(router.query.projectId as string, 10);
  const projArray: IProject[] = projects.projects;
  const project: IProject | undefined = projArray.find(
    (item) => item.id === projectId
  );
  const ProjectComp = () => {
    switch (project?.type) {
      case 1:
        return <ArchitectureProject project={project}></ArchitectureProject>;
      case 2:
        return <ArchitectureProject project={project}></ArchitectureProject>;
      case 3:
        return <ResearchProject project={project}></ResearchProject>;

      default:
        return null;
    }
  };
  return (
    <div>
      <Head>
        <title>Alexander Auris | {project?.name}</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="main">
        <div className={styles.project}>
          <div className={styles.navigation}>
            <Link href={`/projects`} passHref>
              <a>
                <p>← Overview</p>
              </a>
            </Link>
            {projectId !== projArray.length ? (
              <Link href={`/project/${projectId + 1}`} passHref>
                <a>
                  <p>Next →</p>
                </a>
              </Link>
            ) : null}
          </div>
          <div>{ProjectComp()}</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
