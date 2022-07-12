import "./carousel.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import React, { useEffect, useState } from "react";

const Carousel = (props) => {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  useEffect(() => {
    let index = 0;
    setInterval(function () {
      if (index++ < length - show) {
        setCurrentIndex((prevState) => prevState + 1);
      } else {
        setCurrentIndex(0);
        index = 0;
      }
    }, 3000);
  }, []);
  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* You can alwas change the content of the button to other things */}
        {/* {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            <AiOutlineLeft />
          </button>
        )} */}
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>

        {/* You can alwas change the content of the button to other things */}
        {/* {currentIndex < length - show && (
          <button onClick={next} className="right-arrow">
            <AiOutlineRight />
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Carousel;
