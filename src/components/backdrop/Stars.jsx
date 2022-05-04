import React, { useRef, useEffect } from "react";
import styles from "./backdrop.module.css";
export const Stars = () => {
  const star = useRef(null);

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createStar() {
    const size = random(1, 1) + "px";
    star.current.style.width = size;
    star.current.style.height = size;

    star.current.style.top = random(2, 98) + "%";
    star.current.style.left = random(2, 98) + "%";

    const glow = random(1, 4);
    star.current.style.boxShadow =
      "0px 0px " + glow + "px " + glow / 1.6 + "px   rgba(255, 255, 255, 0.3)";

    star.current.style.animationDuration = random(2000, 5000) + "ms";
  }

  useEffect(() => {
    createStar();
  }, []);
  return <div ref={star} className={styles.star}></div>;
};
