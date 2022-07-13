import Carousel from "./Carousel";
import "./sponsers.css";
import React, { useEffect, useState } from "react";
import hackImage from "./hackImage.png";
import axios from "axios";

const Sponsers = () => {
  let width = window.innerWidth;
  const [sponsers, setSponsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://trekthehill.herokuapp.com/api/sponser/")
      .then((response) => {
        setSponsers(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="Sponser" id="Sponser">
      <h1 className="banner">Past Sponsers</h1>{" "}
      <Carousel show={width < 700 ? 1 : 5}>
     
          {sponsers.map((sponser) => {
            return (
              <div>
                <div className="sponser-padding">
                  <img
                    src={sponser.image}
                    alt={sponser.name}
                    style={{ width: "100%", transform: "scale(0.8)" }}
                  />
                </div>
                <div className="centered">
                  <strong>
                      <p>{sponser.name}</p>{" "}
                  </strong>
                </div>
              </div>
            );
          })}
    
      </Carousel>
    </div>
  );
};

export default Sponsers;
