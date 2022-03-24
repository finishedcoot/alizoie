import React, { useState } from "react";
import style from "../../styles/DoubleVideoPlayer.module.css";
import ReactPlayer from "react-player";

const DoubleVideoPlaye = (props) => {
  const [playingVideo1, setPlayingVideo1] = useState(false);
  const [playingVideo2, setPlayingVideo2] = useState(false);

  const positonTheFirstVideo = (e) => {
    setPlayingVideo1((prev) => (prev = true));
  };
  const returnTheFirstVideo = () => {
    setPlayingVideo1((prev) => (prev = false));
  };

  const positonTheSecondVideo = (e) => {
    setPlayingVideo2((prev) => (prev = true));
  };
  const returnTheSecondVideo = () => {
    setPlayingVideo2((prev) => (prev = false));
  };
  const setPlayerNormal = (e) => {
    if (!e.target.classList.contains(style.playingvideo)) {
      setPlayingVideo1((prev) => (prev = false));
      setPlayingVideo2((prev) => (prev = false));
    }
  };

  return (
    <div onClick={setPlayerNormal} className={style.container}>
      <div className={`${style.video_container}  `}>
        <div
          className={`${style.videos1} ${
            playingVideo1 ? style.playingvideo : ""
          }`}
        >
          <ReactPlayer
            controls
            className={style.player}
            width="100%"
            height="100%"
            url={props.video[0]}
            light={props.cover[0]}
            onPlay={positonTheFirstVideo}
            onPause={returnTheFirstVideo}
          />
        </div>

        <div
          className={`${style.videos2} ${
            playingVideo2 ? style.playingvideo : ""
          }`}
        >
          <ReactPlayer
            controls
            className={style.player}
            width="100%"
            height="100%"
            url={props.video[1]}
            light={props.cover[1]}
            onPlay={positonTheSecondVideo}
            onPause={returnTheSecondVideo}
          />
        </div>
      </div>{" "}
      <div className={style.info_container}>
        <p>{props.info1}</p>
        <h1>{props.title}</h1>
        <p>{props.info2}</p>
      </div>
    </div>
  );
};

export default DoubleVideoPlaye;
