import react, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export const Hero: React.FC = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const breakpoint = 786;

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className={styles.hero}>
      <video
        className={styles.video}
        src="videos/teaser 02.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            layout="fill"
            src={
              width > breakpoint
                ? "/logos/ALEXANDER-AURIS_LOGO_WHITEe.svg"
                : "/logos/ALEXANDER-AURIS_LOGO_WHITE_MOBILE.svg"
            }
            alt=""
          />
        </div>
        <div className={styles.menu}>
          <h2>News</h2>
          <h2>Work</h2>
          <h2>Information</h2>
        </div>
        <div className={styles.news}>
          <p>LATEST NEWS:</p>
          <a href="">PHOTO OF THE YEAR 2020</a>
          <a href="">FUTURE ARCHITECTURE PLATFORM</a>
          <a href="">OPENING INSTITUTION BUILDING</a>
          <a href="">MORE NEWS...</a>
        </div>
        <div className={styles.footer}>
          <div className={styles.socials}>
            <a href="">LinkedIn</a>
            <a href="">instagram</a>
          </div>
          <div className={styles.language}>
            <a href="">English</a>
            <a href="">Español</a>
          </div>
        </div>
      </div>
    </div>
  );
};
