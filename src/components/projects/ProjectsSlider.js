import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/ProjectsSlider.module.css";
import ProjectsCard from "./ProjectsCard";

import data from "../../data/contents.json";

const ProjectsSlider = () => {
  const settings3 = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5.2,
    slidesToScroll: 1,
    className: "workslider",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WORKS</h1>
      {/* FASHION */}
      <h2 className={styles.topic}>FASHION</h2>
      <Slider {...settings3}>
        {data.map((project, i) => {
          return (
            project.subject === "fashion" && (
              <ProjectsCard
                key={i}
                imgSrc={project.img[0]}
                title={project.title}
                description={project.desc[0]}
                longtitle={project.longTitle}
              />
            )
          );
        })}
      </Slider>
      {/* COMMERCIAL */}
      <div className={styles.container}>
        <h2 className={styles.topic}>COMMERCIAL</h2>
        <Slider {...settings3}>
          {data.map((project, i) => {
            return (
              project.subject === "commercial" && (
                <ProjectsCard
                  key={i}
                  imgSrc={project.videocover[0]}
                  title={project.title}
                  description={project.desc[0]}
                  longtitle={project.longTitle}
                />
              )
            );
          })}
        </Slider>
      </div>
      {/* ADVERTISING */}
      <div className={styles.container}>
        <h2 className={styles.topic}>ADVERTISING</h2>
        <Slider {...settings3}>
          {data.map((project, i) => {
            return (
              project.subject === "advertisment" && (
                <ProjectsCard
                  key={i}
                  imgSrc={project.img[0]}
                  title={project.title}
                  description={project.desc[0]}
                  longtitle={project.longTitle}
                />
              )
            );
          })}
        </Slider>
      </div>
      {/* INTERIOR */}
      <div className={styles.container}>
        <h2 className={styles.topic}>INTERIOR & EXTERIOR</h2>
        <Slider {...settings3}>
          {data.map((project, i) => {
            return (
              project.subject === "interior_and_buildings" && (
                <ProjectsCard
                  key={i}
                  imgSrc={project.img[0]}
                  title={project.title}
                  description={project.desc[0]}
                  longtitle={project.longTitle}
                />
              )
            );
          })}
        </Slider>
      </div>
      {/* REAL ESTATE */}
      <div className={styles.container}>
        <h2 className={styles.topic}>REAL ESTATE</h2>
        <Slider {...settings3}>
          {data.map((project, i) => {
            return (
              project.subject === "real_estate" && (
                <ProjectsCard
                  key={i}
                  imgSrc={project.videocover[0]}
                  title={project.title}
                  description={project.desc[0]}
                  longtitle={project.longTitle}
                />
              )
            );
          })}
        </Slider>
      </div>
      {/* WEDDING*/}

      <div className={styles.container}>
        <h2 className={styles.single_topic}>WEDDING</h2>
        <Slider {...settings3}>
          {data.map((project, i) => {
            return (
              project.subject === "WEDDING" && (
                <ProjectsCard
                  key={i}
                  imgSrc={project.videocover[0]}
                  title={project.title}
                  description={project.desc[0]}
                  longtitle={project.longTitle}
                />
              )
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsSlider;
