import react, { useState, useEffect } from "react";
import styles from "../styles/Layout.module.scss";
import Image from "next/image";
import { Nav } from "./Nav";
import Link from "next/link";

export const Header: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className={styles.header}>
      {showNav ? <Nav setShowNav={setShowNav} showNav={showNav}></Nav> : null}

      <div className={styles.logo}>
        <Link href={`/`} passHref>
          <a>
            <Image
              src={"/logos/ALEXANDER-AURIS_LOGO.svg"}
              alt="logo"
              height={50}
              width={500}
            />
          </a>
        </Link>
      </div>

      <div className={styles.menu}>
        <button
          className="btn-empty"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <Image src={"/icons/menu.svg"} alt="menu" height={17} width={46} />
        </button>
      </div>
    </header>
  );
};
