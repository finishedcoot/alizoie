import React from "react";
import HomeStyle from "../../styles/HomeSlider.module.css";
import "../../styles/globals.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const HomeSlide = ({ title, imgsrc, imgAlt, placeholder, link }) => {
  return (
    <div className={HomeStyle.myslide}>
      <Link to={link}>
        <h1 className={HomeStyle.firstTitle}> {title}</h1>
      </Link>
      <LazyLoadImage
        className={HomeStyle.landingImage}
        alt={imgAlt}
        src={imgsrc}
        placeholderSrc={placeholder}
        effect="blur"
        wrapperClassName={"landingImagePlaceholder"}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default HomeSlide;
