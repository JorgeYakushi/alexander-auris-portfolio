import react, { useState, useEffect } from "react";
import styles from "@/styles/Project.module.scss";
import Image from "next/image";
import { ProjectProps } from "@/interfaces/projects.interface";

export const ResearchProject: React.FC<ProjectProps> = ({ project }) => {
  console.log("research");

  return (
    <div className={styles["project--research"]}>
      <h2 className={styles.title}>{project?.name}</h2>
      <p className={styles.description}>{project?.description}</p>
    </div>
  );
};
