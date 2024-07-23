import React from "react";
import styles from "./HeaderProcess.module.css";

export const HeaderProcess = ({ title, description, exercise }) => {
  return (
    <div>
      <p className={styles.title}> {title}</p>
      <p className={styles.exercise}>{exercise}</p>
    </div>
  );
};
