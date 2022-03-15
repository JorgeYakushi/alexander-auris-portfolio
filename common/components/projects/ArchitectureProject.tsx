import react, { useState, useEffect } from "react";
import styles from "@/styles/Project.module.scss";
import Image from "next/image";
import { IProject, ProjectProps } from "@/interfaces/projects.interface";
import Slider from "react-slick";

interface IModalItem {
  caption: string;
  url: string;
}
export const ArchitectureProject: React.FC<ProjectProps> = ({ project }) => {
  const [modal, showModal] = useState<IModalItem | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  return (
    <div className={styles["project--architecture"]}>
      <div className={styles.text}>
        <h2>{project?.name}</h2>
        <h3>{project?.subtitle}</h3>
        <p>{project?.description}</p>
      </div>
      <div className={styles.slider}>
        <Slider {...settings}>
          {project?.projArrayImgUrl?.map((img, index) => (
            <div className={styles.slide} key={index}>
              {/* <Image
                src={img ? img : "/"}
                alt={index.toString()}
                width={300}
                height={300}
                layout={"responsive"}
                onClick={() => {
                  showModal({ caption: index.toString(), url: img });
                }}
              /> */}
              <img
                className={styles.slide__image}
                src={img ? img : "/"}
                alt={index.toString()}
              />
              <div
                className={styles.slide__zoom}
                onClick={() => {
                  showModal({ caption: index.toString(), url: img });
                }}
              >
                <img src="/icons/expand.svg" alt="expand" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {modal ? (
        <div
          className="modal"
          onClick={() => {
            showModal(null);
          }}
        >
          <div className="modal__header">
            <div className="modal__icon-menu"></div>
            <div className="modal__caption">{modal?.caption}</div>
          </div>
          <div className="modal__image">
            {/* <Image
              src={modal.url ? modal.url : "/"}
              alt={modal?.caption}
              width={500}
              height={300}
              layout={"responsive"}
            /> */}
            <img src={modal.url ? modal.url : "/"} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
