import React from "react";
import styles from "./Button.module.css";
const Button = ({ onClick, type, children }) => {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </div>
  );
};

export default Button;
