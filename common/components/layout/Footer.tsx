import react, { useState, useEffect } from "react";
import styles from "@/styles/Layout.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <Link href={`https://www.instagram.com/alexauris/`} passHref>
          <a href="">
            <Image
              src={"/icons/INSTAGRAM.svg"}
              alt="instagram"
              height={22}
              width={22}
            />
          </a>
        </Link>
        <Link
          href={`https://www.linkedin.com/in/alexander-auris-914a4a134/`}
          passHref
        >
          <a href="">
            <Image
              src={"/icons/LINKEDIN.svg"}
              alt="linkedin"
              height={22}
              width={22}
            />
          </a>
        </Link>
      </div>
      {/* <div className={styles.language}>
        <p>English</p>
        <p>Español</p>
      </div> */}
    </footer>
  );
};
