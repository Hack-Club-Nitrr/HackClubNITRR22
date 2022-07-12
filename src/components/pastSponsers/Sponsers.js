import Carousel from "./Carousel";
import "./sponsers.css";
import React from "react";
import hackImage from "./hackImage.png";

const Sponsers = () => {
  let width = window.innerWidth;

  return (
    <div className="Sponser" id="Sponser">
      <h1 className="banner">Past Sponsers</h1>{" "}
      <Carousel show={width < 700 ? 1 : 5}>
        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>

        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>

        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>
        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>
        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>
        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>
        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>
        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>
        <div>
          <div className="sponser-padding">
            <img
              src={hackImage}
              alt="placeholder"
              style={{ width: "100%", transform: "scale(0.8)" }}
            />
          </div>
          <div className="centered">
            <strong>
              <p>Hack Club</p>{" "}
            </strong>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Sponsers;
