import React from "react";
import style from "../../styles/PhotoHeader.module.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const PhotoHeader = ({ title, info1, info2, image, alt }) => {
  return (
    <div className={style.container}>
      {/* <LazyLoadImage
        effect="blur"
        className={style.photo}
        src={image}
        alt={alt}
      /> */}
      <div className={style.info_container}>
        <p>{info1}</p>
        <h1>{title}</h1>
        <p>{info2}</p>
      </div>
    </div>
  );
};

export default PhotoHeader;
