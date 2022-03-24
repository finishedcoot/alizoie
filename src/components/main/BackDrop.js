import React from "react";
import style from "../../styles/BackDrop.module.css";

function BackDrop(props) {
  return <div className={style.backdrop} onClick={props.click}></div>;
}

export default BackDrop;
