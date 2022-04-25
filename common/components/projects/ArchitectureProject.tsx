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
  const [imageIndex, setImageIndex] = useState(0);
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
  const onSlideChange = () => {
    console.log(2);
  };
  return (
    <div className={styles["project--architecture"]}>
      <div className={styles.text}>
        <h2>{project?.name}</h2>
        <h4>{project?.subtitle}</h4>
        <h4>{project?.projectTextType}</h4>
        <p>{project?.projectLocation}</p>
        <p>{project?.teamMembers}</p>
        <p>{project?.description}</p>
        <div className={styles.imageText}>
          {project?.projArrayImgUrl
            ? project?.projArrayImgUrl![imageIndex].name
            : ""}
        </div>
      </div>
      <div className={styles.slider}>
        <Slider
          {...settings}
          afterChange={(e) => {
            setImageIndex(e);
          }}
        >
          {project?.projArrayImgUrl?.map((img, index) => (
            <div className={styles.slide} key={index}>
              <img
                className={styles.slide__image}
                src={img ? img.url : "/"}
                alt={index.toString()}
              />
              <div
                className={styles.slide__zoom}
                onClick={() => {
                  showModal({ caption: img.name, url: img.url });
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
            <img src={modal.url ? modal.url : "/"} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
