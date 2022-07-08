import React, { useEffect } from "react";
import { Stars } from "./Stars";
import styles from "./backdrop.module.css";
import { Moon } from "./Moon";

export const Backdrop = () => {
  let stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push(<Stars key={i} />);
  }

  useEffect(() => {
    var intersectionOptions = {
      root: null, // use the viewport
      rootMargin: "0px",
      threshold: 1.0,
    };
    function intersectionCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
          console.log("Fully visible!");
        } else {
          console.log("Not fully visible!");
        }
      });
    }
    var observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    var target = document.querySelector("#box");
    observer.observe(target);
  }, []);

  return (
    <div className={styles.backdrop}>
      {stars}

      <div className="container">
        <div className={styles.heading1}>
          <div className="glitch" data-text="HACK CLUB">
            HACK CLUB
          </div>
        </div>
        <div className={styles.heading1}>
          <div className="glow">HACK CLUB</div>
        </div>
      </div>
      <div className="scanlines"></div>

      <div style={{ marginTop: "40vh" }} className={styles.heading1}>
        <div className="minorGlitch">NITRR</div>
      </div>

      <Moon />
      <div id="box"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="1440"
        height="560"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
        className={styles.clouds}
      >
        <g mask='url("#SvgjsMask1015")' fill="none">
          {/* <path
            d="M1512 560L0 560 L0 364.8Q16.85 309.65, 72 326.51Q144.46 278.97, 192 351.42Q226.13 265.55, 312 299.67Q391.51 259.19, 432 338.7Q455.2 289.9, 504 313.1Q552.37 241.47, 624 289.84Q687.36 281.19, 696 344.55Q744.78 273.33, 816 322.11Q903.52 289.63, 936 377.16Q986.91 308.08, 1056 358.99Q1078.14 309.13, 1128 331.28Q1165.25 248.53, 1248 285.78Q1297.83 263.61, 1320 313.44Q1387.67 261.11, 1440 328.78Q1491.78 308.55, 1512 360.33z"
            fill="rgba(250, 250, 250, 0)"
          ></path> */}

          <path
            className={styles.cloud1}
            d="M1488 560L0 560 L0 409.3Q60.12 349.42, 120 409.54Q169.03 338.57, 240 387.6Q292.2 319.8, 360 372Q419.59 359.59, 432 419.17Q474.44 389.62, 504 432.06Q524.86 332.91, 624 353.77Q694.76 304.53, 744 375.3Q790 349.3, 816 395.3Q859.31 366.61, 888 409.92Q925.73 327.65, 1008 365.38Q1055.24 340.63, 1080 387.87Q1128.48 364.36, 1152 412.84Q1160.25 349.08, 1224 357.33Q1266.85 328.18, 1296 371.03Q1344.3 347.33, 1368 395.63Q1450.74 358.38, 1488 441.12z"
            fill="#000b3d"
          ></path>

          <path
            d="M1464 560L0 560 L0 446.9Q66.31 393.21, 120 459.52Q161.28 428.8, 192 470.09Q231.79 389.88, 312 429.66Q357.33 403, 384 448.33Q444.06 436.39, 456 496.45Q482 450.44, 528 476.44Q570.96 399.4, 648 442.36Q720.01 394.37, 768 466.38Q822.34 400.72, 888 455.06Q932.18 379.24, 1008 423.42Q1066.54 409.96, 1080 468.5Q1101.6 418.1, 1152 439.69Q1204.08 371.76, 1272 423.84Q1327.23 407.07, 1344 462.3Q1413.79 412.09, 1464 481.87z"
            fill="#010033"
          ></path>
          <path
            className={styles.cloud2}
            d="M1488 560L0 560 L0 571.77Q19.96 519.73, 72 539.69Q91.88 487.57, 144 507.45Q228 471.45, 264 555.45Q305.24 476.69, 384 517.93Q425.99 487.92, 456 529.91Q476.96 478.87, 528 499.83Q569.84 469.67, 600 511.51Q671.25 510.75, 672 582Q696.25 534.25, 744 558.51Q755.27 497.78, 816 509.05Q887.57 460.62, 936 532.18Q1002.69 478.87, 1056 545.56Q1121.45 491.01, 1176 556.47Q1216.65 477.12, 1296 517.77Q1345.68 495.45, 1368 545.13Q1447.99 505.13, 1488 585.12z"
            fill="rgba(250, 250, 250, 1)"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1015">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
    </div>
  );
};
