import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SideDrawer.module.css";
import DrawerToggleButton from "./DrawerToggleButton";

const SideDrawer = (props) => {
  let drawerClasses = [styles.side_drawer];
  if (props.show) {
    drawerClasses = [styles.side_drawer, styles.open];
  }

  return (
    <div>
      <div className={styles.toolbar__toggle_button}>
        <DrawerToggleButton
          show={props.show}
          click={props.drawerClickHandler}
        />
      </div>
      <nav className={drawerClasses.join(" ")}>
        <ul className={styles.side_drawer_link_list}>
          <li>
            <Link className={styles.side_drawer_links} to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.side_drawer_links} to="/Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.side_drawer_links} to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
