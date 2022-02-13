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
      </div>
    </div>
  );
};
