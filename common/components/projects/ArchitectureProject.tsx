import react, { useState, useEffect } from "react";
import styles from "@/styles/Project.module.scss";

import { IProject, ProjectProps } from "@/interfaces/projects.interface";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Mousewheel, Pagination } from "swiper";
interface IModalItem {
  caption: string;
  url: string;
}
export const ArchitectureProject: React.FC<ProjectProps> = ({ project }) => {
  const [modal, showModal] = useState<IModalItem | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

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
        {/* <Slider
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
        </Slider> */}
        <Swiper
          direction={"horizontal"}
          spaceBetween={30}
          slidesPerView={1}
          mousewheel={true}
          modules={[Mousewheel]}
          onSlideChange={(e) => setImageIndex(e.realIndex)}
          loop={true}
          breakpoints={{
            1200: { direction: "vertical" },
          }}
        >
          {project?.projArrayImgUrl?.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img ? img.url : "/"} alt={index.toString()} />
              <div
                className={styles.slide__zoom}
                onClick={() => {
                  showModal({ caption: img.name, url: img.url });
                }}
              >
                <img src="/icons/expand.svg" alt="expand" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
