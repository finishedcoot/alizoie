import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import HomePage from "../components/home/HomePage";
import WelcomeModal from "../components/main/WelcomModal";
import Navbar from "../components/main/Toolbar";
import Footer from "../components/main/Footer";
import SideDrawer from "../components/main/SideDrawer";
import BackDrop from "../components/main/BackDrop";

import { motion } from "framer-motion";
export default function Home({ welcome }) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backDrop;

  if (sideDrawerOpen) {
    backDrop = <BackDrop click={backDropClickHandler} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar welcome={welcome} />
      <SideDrawer
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <div className={styles.container}>
        {welcome && <WelcomeModal />}
        <HomePage />
      </div>
      <Footer />
    </motion.div>
  );
}
