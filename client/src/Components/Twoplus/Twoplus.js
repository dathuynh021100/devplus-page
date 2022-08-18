import React from "react";
import Tilt from "react-parallax-tilt";
import "./Twoplus.css";
const TwoPlus = () => {
  return (
    <div className="container-page">
      <Tilt className="parallax-effect" perspective={1000} scale={1.05}>
        <img
          className="img-page"
          src={require("../../Assets/Imgs/roadmapdev2-min.png")}
          alt=""
        />
      </Tilt>
    </div>
  );
};

export default TwoPlus;
