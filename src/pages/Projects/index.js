import React from "react";
import PersonalSlide from "../../components/projects/PersonalSlide";
import ProjectsSlider from "../../components/projects/ProjectsSlider";
import Style from "../../styles/Projects.module.css";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={Style.container}>
        <PersonalSlide />
        <ProjectsSlider />
      </div>
    </motion.div>
  );
};

export default Projects;
