import React from "react";
import "./Web.css";

const WebHeader = () => {
  return (
    <div className="Web">
      <div className="web_options">
        <a href="#project"> <i class="material-icons">work</i>Projects</a>
      </div>
      <div className="web_options">
        <a href="#skill"> <i class="material-icons">laptop</i>Skills</a>
      </div>
      <div className="web_options">
        <a href="#work"> <i class="material-icons">work</i>Works</a>
      </div>
      <div className="web_options">
        <a href="#contact"> <i class="material-icons">person</i>Contact</a>
      </div>
    </div>
  );
};

export default WebHeader;
