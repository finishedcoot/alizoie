import React from "react";
import styles from "../../styles/ProjectsCard.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProjectsCard = ({ title, imgSrc, description, longtitle, single }) => {
  let cleanTitle = title;
  if (cleanTitle.includes("_")) {
    cleanTitle = cleanTitle.replaceAll("_", " ");
  }

  return (
    <div
      className={
        single ? styles.container && styles.singleContainer : styles.container
      }
    >
      <Link to={`/Projects/${title}`}>
        <div className={styles.modalContainer}>
          <h1
            className={longtitle === "true" ? styles.longtitle : styles.title}
          >
            {cleanTitle}
          </h1>
          {/* <p className={styles.description}>{description} &#x0226B;</p> */}
        </div>
      </Link>
      <LazyLoadImage
        effect="blur"
        alt={`Gallery of ${{ title }}`}
        className={styles.img}
        src={imgSrc}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default ProjectsCard;
