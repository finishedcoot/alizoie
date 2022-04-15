import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/PersonalSlider.module.css";
import { useSwipeable } from "react-swipeable";
import "slick-carousel/slick/slick-theme.css";
import PersonalCards from "./PersonalCards";

import data from "../../data/contents.json";

const PersonalSlide = () => {
  const [current, setCurrent] = useState(0);
  const slide = useRef(null);

  const goNext = () => {
    if (current >= 8) return;
    setCurrent(current + 1);
  };
  const goPrev = () => {
    if (current <= 0) return;
    setCurrent(current - 1);
  };

  const toSlide = (e) => {
    setCurrent(e.target.getAttribute("data-slide-num") - 1);
  };
  useEffect(() => {
    const slide = document.querySelector("#personalSlide");
    const innerSlider = document.getElementById("innerSlider");

    const size = slide.clientWidth;

    innerSlider.style.transform = `translateX(${-(size + 35) * current}px)`;

    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot) => {
      if (current === dot.getAttribute("data-slide-num") - 1) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }, [current]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goNext(),
    onSwipedRight: () => goPrev(),
  });
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <button
          onClick={goPrev}
          className={`${styles.personalSliderLeftArrow} ${
            current === 0 ? styles.notActive : ""
          }`}
        ></button>
        <div id="innerSlider" {...handlers} className={styles.innerSlider}>
          {data.map((project, i) => {
            return (
              project.type === "personal" && (
                <PersonalCards
                  ref={slide}
                  key={i}
                  i={i}
                  imgSrc={project.img[0]}
                  title={project.title}
                  description={project.desc[0]}
                  position={project.coverPostion ? project.coverPostion : null}
                />
              )
            );
          })}
        </div>

        <button
          onClick={goNext}
          className={`${styles.personalSliderRightArrow} ${
            current === 8 ? styles.notActive : ""
          }`}
        ></button>
      </div>
    </div>
  );
};

export default PersonalSlide;
