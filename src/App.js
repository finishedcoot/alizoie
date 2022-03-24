import React, { useEffect, useState } from "react";

import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Layout from "./components/main/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Projects/Gallery";
import { AnimatePresence } from "framer-motion";
import Contact from "./pages/Contact/Contact";

function App() {
  const [welcome, setWelcome] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const userFirstVisit = sessionStorage.getItem("Has_visited");
    if (userFirstVisit !== "True") {
      setNav(true);
      setWelcome(true);
      sessionStorage.setItem("Has_visited", "True");
    }
    setTimeout(() => {
      setWelcome(false);
    }, 7000);
    setTimeout(() => {
      setNav(false);
    }, 8000);
  }, []);
  const loacation = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={loacation} key={loacation.pathname}>
        <Route path="/" element={<Home welcome={welcome} />} />
        <Route path="/" element={<Layout welcome={nav} />}>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects/:projTitle" element={<Gallery />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
