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

  const onSlideChange = () => {};
  return (
    <div className={styles["project--architecture"]}>
      <div className={styles.text}>
        <h2>{project?.name}</h2>
        <h4>{project?.subtitle}</h4>
        <h4>{project?.projectTextType}</h4>
        <h4>{project?.projectLocation}</h4>
        <h4>{project?.teamMembers}</h4>
        <p>{project?.description}</p>
        {/* <div className={styles.imageText}>
          {project?.projArrayImgUrl
            ? project?.projArrayImgUrl![imageIndex].name
            : ""}
        </div> */}
      </div>
      <div className={styles.slider}>
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
              {!img.isVideo ? (
                <div>
                  <img src={img.url ?? "/"} alt={index.toString()} />
                </div>
              ) : (
                <div>
                  <video
                    className={styles.video}
                    src={img.url}
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {project?.projArrayImgUrl && project?.projArrayImgUrl.length > 0 ? (
          <div style={{ display: "flex" }}>
            <div
              className={styles.slide__zoom}
              onClick={() => {
                showModal({
                  caption: project?.projArrayImgUrl![0].name!,
                  url: project?.projArrayImgUrl![0].url!,
                });
              }}
            >
              <img src="/icons/expand.svg" alt="expand" />
            </div>
            <p className={styles.slide__title}>
              {project?.projArrayImgUrl![imageIndex].name}
            </p>
          </div>
        ) : null}
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
