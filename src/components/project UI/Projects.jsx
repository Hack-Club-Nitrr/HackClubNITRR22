import React from "react";
import styles from "./project.module.css";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      {/* <section>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <h1>Innovators of the new genre</h1>
          </header>
          <figure className={`${styles["featured-image-1"]}`}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/579121/karina-carvalho-87594-sm.jpg"
              alt="Photo by Karina Carvalho on Unsplash"
            />
          </figure>
          <div className={`${styles["number-1"]}`}>1</div>
          <article className={`${styles["article"]}${styles["article-1"]}`}>
            <h2 style={{marginTop:'0px',color:'white'}}>Technical information</h2>
            <p>
              In 1985 Aldus Corporation launched its first desktop publishing
              program Aldus PageMaker for Apple Macintosh computers.
            </p>
          </article>
          <figure className={`${styles["featured-image-2"]}`}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/579121/jc-dela-cuesta-311203-sm.jpg"
              alt="Photo by JC Dela Cuesta on Unsplash"
            />
          </figure>
          <div className={`${styles["number-2"]}`}>2</div>
          <article className={`${styles["article"]}${styles["article-2"]}`}>
            <h2>Variants</h2>
            <p>Released in 1987 for PCs running Windows 1.0.</p>
          </article>
          <figure className={`${styles["featured-image-3"]}`}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/579121/seth-doyle-151915-sm.jpg"
              alt="Photo by Seth Doyle on Unsplash"
            />
          </figure>
          <div className={`${styles["number-3"]}`}>3</div>
          <article className={`${styles["article"]}${styles["article-3"]}`}>
            <h2>When not to use it</h2>
            <p>
              The toppings you may chose for that TV dinner pizza slice when you
              forgot to shop for foods, the paint you may slap on your face to
              impress the new boss is your business. But what about your daily
              bread?
            </p>
          </article>
          <figure className={`${styles["featured-image-4"]}`}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/579121/tim-marshall-189232-sm.jpg"
              alt="Photo by Tim Marshall on Unsplash"
            />
          </figure>
          <div className={`${styles["number-4"]}`}>4</div>
          <article className={`${styles["article"]}${styles["article-4"]}`}>
            <h2>So Lorem Ipsum is bad</h2>
            <p>
              One of the villagers, Kristina Halvorson from Adaptive Path, holds
              steadfastly to the notion that design can’t be tested without real
              content.
            </p>
          </article>
        </div>
      </section> */}
      <div className={styles.ocean}>
        <div className={`${styles["bubble"]}${styles["bubble1"]}`}></div>
        <div className={`${styles["bubble"]}${styles["bubble2"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble3"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble4"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble5"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble6"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble7"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble8"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble9"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble10"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble11"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble12"]}`}></div>
      </div>
    </div>
  );
};
