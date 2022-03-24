import { Link } from "react-router-dom";
import styles from "../../../styles/ProjectPage.module.css";
import React from "react";
import data from "../../../data/contents.json";
import { useParams } from "react-router";
import VideoPlayer from "../../../components/gallery/VideoPlayer";
import PhotoContainer from "../../../components/gallery/PhotoContainer";
import PhotoHeader from "../../../components/gallery/PhotoHeader";
import DoubleVideoPlayer from "../../../components/gallery/DoubleVideoPlayer";
import Multivideo from "../../../components/gallery/Multivideo";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { projTitle } = useParams();

  const proj = data.find((proj) => {
    return projTitle === `${proj.title}`;
  });
  if (!proj) {
    return;
  }
  let cleanTitle = proj.title;
  if (cleanTitle.includes("_")) {
    cleanTitle = cleanTitle.replaceAll("_", " ");
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <Link to="/Projects">
          <a className={styles.back}>&#8249; Back To Projects</a>
        </Link>
        {proj.video ? (
          proj.video.length < 2 ? (
            <VideoPlayer
              video={proj.video[0]}
              cover={proj.videocover[0]}
              title={cleanTitle}
              info1={proj.desc[0]}
              info2={proj.desc[1]}
            />
          ) : proj.video.length === 2 ? (
            <DoubleVideoPlayer
              video={proj.video}
              cover={proj.videocover}
              title={cleanTitle}
              info1={proj.desc[0]}
              info2={proj.desc[1]}
            />
          ) : (
            <Multivideo
              title={cleanTitle}
              info1={proj.desc[0]}
              info2={proj.desc[1]}
              video={proj.video}
              cover={proj.videocover}
              vidtitle={proj.vidstitle}
            />
          )
        ) : (
          <PhotoHeader
            image={proj.img[0]}
            title={cleanTitle}
            info1={proj.desc[0]}
            info2={proj.desc[1]}
            alt={proj.title}
          />
        )}
        <PhotoContainer id={proj.id} images={proj.img} alt={proj.title} />
      </div>
    </motion.div>
  );
};

export default ProjectPage;
