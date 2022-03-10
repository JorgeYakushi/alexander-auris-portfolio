import react, { useState, useEffect } from "react";
import styles from "@/styles/Layout.module.scss";
import Image from "next/image";
import Link from "next/link";

type INavProps = {
  showNav: boolean;
  setShowNav: (values: any) => void;
};
export const Nav: React.FC<INavProps> = ({ showNav, setShowNav }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.exit}>
        <button
          className="btn-empty"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <Image src={"/icons/exit.svg"} alt="exit" height={50} width={50} />
        </button>
      </div>
      <ul className={styles.list}>
        <li>
          <Link href={`/news`} passHref>
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link href={`/projects`} passHref>
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href={`/info`} passHref>
            <a>Info</a>
          </Link>
        </li>
        <li>
          <Link href={`/imprint`} passHref>
            <a>Imprint</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
