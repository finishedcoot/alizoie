import React from "react";
import styles from "../../styles/DrawerToggleButton.module.css";

const DrawerToggleButton = (props) => {
  let burgerAnimation;

  if (props.show) {
    burgerAnimation = `${styles.open}`;
  } else {
    burgerAnimation = "";
  }

  return (
    <button
      className={`${styles.toggle_button} ${burgerAnimation}`}
      onClick={props.click}
    >
      <div className={styles.toggle_button_line}></div>
    </button>
  );
};

export default DrawerToggleButton;
