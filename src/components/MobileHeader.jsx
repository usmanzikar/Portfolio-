import React from "react";
import "./Mobile.css";

const MobileHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div className="MobileHeader">
      <div className="close_icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="material-icons ">cancel</i>
      </div>
      <div className="mobile_options">
      <div className="mobile_option">
        <a href="#project"> <i class="material-icons">work</i>Projects</a>
      </div>
      <div className="mobile_option">
        <a href="#skill"> <i class="material-icons">laptop</i>Skills</a>
      </div>
      <div className="mobile_option">
        <a href="work"> <i class="material-icons">work</i>Works</a>
      </div>
      <div className="mobile_option">
        <a href="#contact"> <i class="material-icons">person</i>Contact</a>
      </div>
    </div>
    </div>
  );
};

export default MobileHeader;
