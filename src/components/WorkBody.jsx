import React from "react";
import Seperator from "./common/Seperator";
import "./work.css";

const WorkBody = () => {
  return (
    <div className="WorkBody">
      <Seperator />
      <label className="heading">Services</label>
      <div className="bg-img">
        <div className="main">
          <div className="cards">
            <div className="image">
              <img src={require("../img/creative1.jpg").default} alt="" />
            </div>
            <div className="title">
              <h1>Creative design</h1>
            </div>
            <div className="disc">
              <p>
                I create striking visuals that appeal to visitors and make them
                fall in love with your brand. My designs are unique and mobile
                optimised. My design process involves user research followed by
                wire framing and then production of designs.
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="image">
              <img src={require("../img/grow.jpg").default} alt="" />
            </div>
            <div className="title">
              <h1>Bussiness Growth</h1>
            </div>
            <div className="disc">
              <p>
                My mission is to transform our clients’ businesses, allowing
                them to utilise powerful technologies and grow their businesses,
                improve their processes that benefit businesses of all sizes,
                making them more efficient and effective.
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="image">
              <img src={require("../img/respo.jpg").default} alt="" />
            </div>
            <div className="title">
              <h1>Fully Responsive</h1>
            </div>
            <div className="disc">
              <p>
                Flat, Lightweight & Responsive Designs term is related to the
                idea of developing a website design in a way that helps the user
                to open a website on any size of screen the lay out to find
                changed according to the user’s PC screen motion.
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="image">
              <img src={require("../img/respo.jpg").default} alt="" />
            </div>
            <div className="title">
              <h1>E comerace Website</h1>
            </div>
            <div className="disc">
              <p>
                An E-Commerce Website, Developed in reactjs and by using css
                (Responsive websites) and Bootstrap(library). It includes more
                than 17 pages with some modals and both desktop and mobile site
                has different designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBody;
