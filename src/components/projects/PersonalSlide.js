import React from "react";
import styles from "../../styles/PersonalSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import PersonalCards from "./PersonalCards";
import data from "../../data/contents.json";

const PersonalSlide = () => {
  const settings2 = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    className: "personal_slider",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(data[4].coverPostion);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>PERSONAL</h2>
      <Slider {...settings2}>
        {data.map((project, i) => {
          return (
            project.type === "personal" && (
              <PersonalCards
                key={i}
                imgSrc={project.img[0]}
                title={project.title}
                description={project.desc[0]}
                position={project.coverPostion ? project.coverPostion : null}
              />
            )
          );
        })}
      </Slider>
    </div>
  );
};

export default PersonalSlide;
