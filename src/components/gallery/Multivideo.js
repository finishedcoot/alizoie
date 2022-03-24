import React from "react";
import style from "../../styles/MultiVideo.module.css";
import ReactPlayer from "react-player";

const Multivideo = (props) => {
  return (
    <div className={style.container}>
      <div className={style.first_container}>
        <div className={style.video_container}>
          <img
            className={style.header}
            src={props.cover[0]}
            alt={props.title}
          />
        </div>
        <div className={style.info_container}>
          <p>{props.info1}</p>
          <h1>{props.title}</h1>
          <p>{props.info2}</p>
        </div>
      </div>
      {props.video.map((vid, id) => {
        return (
          <div
            className={id % 2 == 0 ? style.even_container : style.odd_container}
          >
            <div className={style.videos}>
              <ReactPlayer
                controls
                className={style.player}
                width="100%"
                height="100%"
                url={vid}
                light={props.cover[id]}
              />
            </div>
            <h1 className={style.titels}>{props.vidtitle[id]}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Multivideo;
