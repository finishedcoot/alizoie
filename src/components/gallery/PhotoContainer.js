import React from "react";
import { useState } from "react";
import style from "../../styles/PhotoContainer.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PhotoModal from "./PhotoModal";
import { v4 as uuidv4 } from "uuid";
const PhotoContainer = ({ images, alt, id }) => {
  const [currentImage, setCurrentImage] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  const showFullimage = (e) => {
    setDisplayModal((prev) => (prev = true));
    setCurrentImage((prev) => (prev = e.target.src));
  };
  const removeModal = (e) => {
    if (e.target.classList.contains(style.modalcontainer)) {
      setDisplayModal((prev) => (prev = false));
      setCurrentImage((prev) => prev === "");
    }
  };
  return (
    <div className={style.container}>
      {images.map((img) => {
        return (
          <LazyLoadImage
            effect="blur"
            key={uuidv4()}
            className={style.photo}
            src={img}
            alt={alt}
            onClick={showFullimage}
          />
        );
      })}
      {displayModal && (
        <div onClick={removeModal} className={style.modalcontainer}>
          <div className={style.photoContainer}>
            <LazyLoadImage
              effect="blur"
              className={style.fullphoto}
              src={currentImage}
              alt={"Full Image"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoContainer;
