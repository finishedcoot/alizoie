import React from "react";

import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeStyle from "../../styles/HomeSlider.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import arrow from "../../static/keyboard_arrow_down_white_24dp.svg";
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
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={`${HomeStyle.home_slides} ${HomeStyle.homepage_carousel}`}>
      <Slider {...settings}>
        <div className={HomeStyle.myslide}>
          <span className={`${HomeStyle.title} ${HomeStyle.above}`}>
            <h1>QI</h1>
          </span>
          <span className={`${HomeStyle.title} ${HomeStyle.below}`}>
            <h1>SHM</h1>
          </span>
          <Link to={"/Projects/QISHM"}>
            <h1 className={HomeStyle.firstTitle}> QISHM</h1>
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
          <span className={`${HomeStyle.title} ${HomeStyle.above}`}>
            <h1>LA</h1>
          </span>
          <span className={`${HomeStyle.title} ${HomeStyle.below}`}>
            <h1>FT</h1>
          </span>

          <Link to={"/Projects/LAFT"}>
            <h1 className={HomeStyle.firstTitle}> LAFT</h1>
          </Link>
          <LazyLoadImage
            className={HomeStyle.landingImage}
            alt={"laft"}
            src={"/img/2.JPG"}
            placeholderSrc={"/img/2p.JPG"}
            effect="blur"
            wrapperClassName={"landingImagePlaceholder"}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className={HomeStyle.myslide}>
          <span className={`${HomeStyle.title} ${HomeStyle.above}`}>
            <h1>KELAR</h1>
          </span>
          <span className={`${HomeStyle.title} ${HomeStyle.below}`}>
            <h1>DASHT</h1>
          </span>

          <Link to={"/Projects/KELARDASHT"}>
            <h1 className={HomeStyle.firstTitle}>KELARDASHT</h1>
          </Link>
          <LazyLoadImage
            className={HomeStyle.landingImage}
            alt={"kelardasht"}
            src={"/img/3.JPG"}
            placeholderSrc={"/img/3p.JPG"}
            effect="blur"
            wrapperClassName={"landingImagePlaceholder"}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className={HomeStyle.myslide}>
          <span className={`${HomeStyle.title} ${HomeStyle.above}`}>
            <h1>SA</h1>
          </span>
          <span className={`${HomeStyle.title} ${HomeStyle.below}`}>
            <h1>RI</h1>
          </span>

          <Link to={"/Projects/SARI"}>
            <h1 className={HomeStyle.firstTitle}>MORE</h1>
          </Link>
          <LazyLoadImage
            className={HomeStyle.landingImage}
            alt={"Sari"}
            src={"/img/4.JPG"}
            placeholderSrc={"/img/4p.JPG"}
            effect="blur"
            wrapperClassName={"landingImagePlaceholder"}
            width={"100%"}
            height={"100%"}
          />
        </div>

        {/* <HomeSlide
          title={"QISHM"}
          imgsrc={"/img/1.jpg"}
          imgAlt={"Fashion Photo From Qishm"}
          link={"/Projects/QISHM"}
        />

        <HomeSlide
          title={"LAFT"}
          imgsrc={"/img/2.jpg"}
          imgAlt={"Industrial Design Photo from Laft"}
          link={"/Projects/LAFT"}
        />

        <HomeSlide
          title={"KELARDASHT"}
          imgsrc={"/img/3.jpg"}
          imgAlt={"memorable photo from Kelardasht"}
          link={"/Projects/KELARDASHT"}
        />

        <HomeSlide
          title={"SARI"}
          imgsrc={"/img/4.jpg"}
          imgAlt={"memorable photo from Sari"}
          link={"/Projects/SARI"}
        /> */}
      </Slider>
    </div>
  );
}
