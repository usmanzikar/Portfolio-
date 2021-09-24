import React from "react";
import "./imageslider.css";

const ImageSlider = () => {
  return (
    <div className="skill-container">
    <div className='wrapper'>
      <div className="slider">
        <div className="slide">
          <img src={require("../../img/html.png").default} alt="" />
          <img src={require("../../img/css.png").default} alt="" />
          <img src={require("../../img/js.png").default} alt="" />
          <img src={require("../../img/bootstrap.png").default} alt="" />
          <img src={require("../../img/react.png").default} alt="" />
        </div>
        <div className="slide">
          <img src={require("../../img/html.png").default} alt="" />
          <img src={require("../../img/css.png").default} alt="" />
          <img src={require("../../img/js.png").default} alt="" />
          <img src={require("../../img/bootstrap.png").default} alt="" />
          <img src={require("../../img/react.png").default} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
