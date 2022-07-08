import React, { forwardRef } from "react";
import styles from "./team.module.css"

const Section = forwardRef(({ text, img }, ref) => {
  return (
    <div className={styles.section} ref={ref}>
      <img src={img} alt="" />
      <h2>{text}</h2>
    </div>
  );
});

export default Section;
