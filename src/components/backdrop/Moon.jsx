import React from "react";
import styles from "./backdrop.module.css";
import moon from "../../img/moon.png";
// import aurora from "../../img/aurora.png";
// import rocket from "../../img/rocket.png";

export const Moon = () => {
  return (
    <div>
      <img className={styles.moon} img src={moon} alt="moon" />
      {/* <img className={styles.aurora} img src={aurora} alt="aurora" /> */}
      {/* <img className={styles.rocket} img src={rocket} alt="rocket" /> */}
    </div>
  );
};
