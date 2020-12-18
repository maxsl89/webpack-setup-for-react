import React from "react";
import logo from "./images/logo.png";
import styles from "./styles/style.module.css";

export const App = () => {
  return (
    <React.Fragment>
      <div className={styles.head}>
        <h1>Заголовок</h1>
      </div>
      <div className={styles.body}>
        <img src={logo} />
      </div>
      <div className={styles.footer}>
        <h2>Футер</h2>
      </div>
    </React.Fragment>
  );
};
