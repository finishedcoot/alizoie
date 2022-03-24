import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../../styles/Toolbar.module.css";
const Toolbar = ({ welcome }) => {
  const [navBack, setNavBack] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavBack((prev) => (prev = `${styles.homenav}`));
    } else {
      setNavBack((prev) => (prev = ""));
    }
  }, [location]);

  return (
    <header className={`${styles.toolbar} ${navBack}`}>
      <nav className={styles.toolbar__navigation}>
        <div className={styles.toolbar__logo}>
          <Link
            className={`${welcome ? styles.firstTime : styles.home_link}`}
            to="/"
          >
            <img
              className={styles.homeLogo}
              src="/logo-white.svg"
              alt="zoie-logo"
            />
          </Link>
        </div>
        <div className={styles.spacer}> </div>
        <div className={styles.toolbar_navigation_items}>
          <ul className={`${welcome ? styles.firstTime : ""}`}>
            <li>
              <Link
                className={`${styles.nav} ${
                  location.pathname === "/Projects" ? styles.active : ""
                }`}
                to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.nav} ${
                  location.pathname === "/Contact" ? styles.active : ""
                }`}
                to="/Contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.nav} ${
                  location.pathname === "/About" ? styles.active : ""
                }`}
                to="/About"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
