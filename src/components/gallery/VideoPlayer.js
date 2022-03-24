import React from "react";
import ReactPlayer from "react-player";
import style from "../../styles/VideoPlayer.module.css";

const VideoPlayer = ({ video, cover, title, info1, info2 }) => {
  return (
    <div className={style.container}>
      <div className={style.video_container}>
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url={video}
          light={cover}
        />
      </div>
      <div className={style.info_container}>
        <p>{info1}</p>
        <h1>{title}</h1>
        <p>{info2}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
