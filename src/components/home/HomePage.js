import React from "react";

import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeStyle from "../../styles/HomeSlider.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function HomePage() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 6000,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: `home_slides`,
    responsive: [
      {
        breakpoint: 936,
        settings: {
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={`${HomeStyle.home_slides} ${HomeStyle.homepage_carousel}`}>
      <Slider {...settings}>
        <div className={HomeStyle.myslide}>
          <h1 className={`${HomeStyle.title}`}>
            <Link to={"/Projects/QISHM"}>
              <span>QISHM</span>
            </Link>
          </h1>

          <Link to={"/Projects/QISHM"}>
            <h1 className={HomeStyle.firstTitle}>
              <span>QISHM</span>
            </h1>
          </Link>
          <LazyLoadImage
            className={HomeStyle.landingImage}
            alt={"QISHM"}
            src={"/img/1.jpg"}
            placeholderSrc={"/img/1p.jpg"}
            effect="blur"
            wrapperClassName={"landingImagePlaceholder"}
            width={"100%"}
            height={"100%"}
          />
        </div>

        <div className={HomeStyle.myslide}>
          <h1 className={`${HomeStyle.title}`}>
            <Link to={"/Projects/BELLE_DE_JOUR"}>
              <span>BELLE DE JOUR</span>
            </Link>
          </h1>

          <Link to={"/Projects/BELLE_DE_JOUR"}>
            <h1 className={HomeStyle.firstTitle}>
              <span>BELLE DE JOUR</span>{" "}
            </h1>
          </Link>
          <LazyLoadImage
            className={HomeStyle.landingImage}
            alt={"laft"}
            src={"/img/2.jpg"}
            placeholderSrc={"/img/2p.jpg"}
            effect="blur"
            wrapperClassName={"landingImagePlaceholder"}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className={HomeStyle.myslide}>
          <h1 className={`${HomeStyle.title}`}>
            <Link to={"/Projects/KAN"}>
              <span>KAN</span>
            </Link>
          </h1>

          <Link to={"/Projects/KAN"}>
            <h1 className={HomeStyle.firstTitle}>
              <span>KAN</span>
            </h1>
          </Link>
          <LazyLoadImage
            className={HomeStyle.landingImage}
            alt={"Sari"}
            src={"/img/4.jpg"}
            placeholderSrc={"/img/4p.jpg"}
            effect="blur"
            wrapperClassName={"landingImagePlaceholder"}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className={HomeStyle.myslide}>
          <h1 className={`${HomeStyle.title}`}>
            <Link to={"/Projects/AVINA"}>
              <span>AVINA</span>
            </Link>
          </h1>

          <Link to={"/Projects/AVINA"}>
            <h1 className={HomeStyle.firstTitle}>
              <span>AVINA</span>
            </h1>
          </Link>
          <LazyLoadImage
            className={HomeStyle.landingImage}
            alt={"kelardasht"}
            src={"/img/3.jpg"}
            placeholderSrc={"/img/3p.jpg"}
            effect="blur"
            wrapperClassName={"landingImagePlaceholder"}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </Slider>
    </div>
  );
}
