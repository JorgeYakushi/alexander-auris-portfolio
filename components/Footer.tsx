import react, { useState, useEffect } from "react";
import styles from "../styles/Layout.module.scss";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <Image
          src={"/icons/INSTAGRAM.svg"}
          alt="instagram"
          height={22}
          width={22}
        />
        <Image
          src={"/icons/LINKEDIN.svg"}
          alt="linkedin"
          height={22}
          width={22}
        />
      </div>
      <div className={styles.language}>
        <p>English</p>
        <p>Español</p>
      </div>
    </footer>
  );
};
