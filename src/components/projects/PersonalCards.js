import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../../styles/PersonalCard.module.css";
import { Link } from "react-router-dom";

const PersonalCards = ({ imgSrc, title, description, position }) => {
  console.log(position);
  return (
    <div className={styles.container}>
      <Link to={`/Projects/${title}`}>
        <a className={styles.modalContainer}>
          <h1 className={styles.title}>{title}</h1>
          {/* <p className={styles.description}>{description} &#x0226B;</p> */}
        </a>
      </Link>
      <LazyLoadImage
        effect="blur"
        alt={title}
        width={"100%"}
        height={"100%"}
        className={styles.img}
        style={position ? { objectPosition: `50% ${position}` } : null}
        src={imgSrc}
      />
    </div>
  );
};

export default PersonalCards;
