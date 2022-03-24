import React, { useEffect, useState } from "react";
import style from "../../styles/WelcomeModal.module.css";

const WelcomeModal = (props) => {
  const [welcomeClass, setWelcomeClass] = useState("");

  useEffect(() => {
    const welcomingClass = setTimeout(() => {
      setWelcomeClass(`${style.welcome}`);
    }, 3500);
    return () => clearTimeout(welcomingClass);
  }, [setWelcomeClass]);

  return (
    <div>
      <div className={`${style.bg_image} ${welcomeClass}`}></div>
      <div className={`${style.bg_text} ${welcomeClass}`}>
        <img src="/logo-white.svg" alt="zoie" />
      </div>
    </div>
  );
};

export default WelcomeModal;
