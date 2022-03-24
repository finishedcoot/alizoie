import React from "react";
import { useLocation } from "react-router-dom";
import style from "../../styles/Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  return (
    <div
      className={style.footer_container}
      style={
        location.pathname === "/"
          ? { position: "fixed", backgroundColor: "transparent" }
          : { position: "relative" }
      }
    >
      <div className={style.copy_right}>
        <span>
          Copyright 2021 Ali Zoie | All Rights Reserved |
          <Link className={style.footer_links} to={"/"}>
            Terms of Use
          </Link>
          <Link className={style.footer_links} to={"/"}>
            Privacy Policy
          </Link>
        </span>
      </div>
      <div className={style.spacer}></div>
      <div className={style.social_media}>
        <Link className={style.footer_links} to={"/"}>
          <img
            src={"/socialIcons/twitter.svg"}
            alt="Twitter"
            className={style.social_icons}
          />
        </Link>
        <Link className={style.footer_links} to={"/"}>
          <img
            src={"/socialIcons/instagram.svg"}
            alt="Instagram"
            className={style.social_icons}
          />
        </Link>
        <Link className={style.footer_links} to={"/"}>
          <img
            src={"/socialIcons/youtube.svg"}
            className={style.social_icons}
            alt="YouTube"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
