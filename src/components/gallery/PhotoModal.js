import React from "react";
import style from "../../styles/PhotoModal.module.css";

const PhotoModal = ({ fullImage, alt }) => {
  return (
    <div className={style.modalcontainer}>
      <div className={style.photoContainer}>
        <img className={style.photo} src={fullImage} alt={alt} />
      </div>
    </div>
  );
};

export default PhotoModal;
