import react, { useState, useEffect } from "react";
import styles from "@/styles/Layout.module.scss";
import Image from "next/image";
import { Nav } from "./Nav";
import Link from "next/link";

export const Header: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className={styles.header} style={{ zIndex: showNav ? 5 : 3 }}>
      {showNav ? <Nav setShowNav={setShowNav} showNav={showNav}></Nav> : null}
      <div>
        <Link href={`/`} passHref>
          <a>
            <img
              className={styles.logo}
              src="/logos/ALEXANDER-AURIS_LOGO.svg"
              alt=""
            />
          </a>
        </Link>
      </div>

      <div className={styles.menu}>
        <div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className={[styles.burger, showNav ? styles.open : null].join(" ")}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};
