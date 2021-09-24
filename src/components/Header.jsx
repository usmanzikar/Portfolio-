import React, { useState } from "react";
import "./Header.css";
import WebHeader from "./WebHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  /* state Hooks Use*/
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Header">
      <div className="brandname">
        <h2>USMAN ZIKAR</h2>
        <div className="underbrand">
          <span className="experty">Front-end-Developer</span>
        </div>
      </div>
      <div className="menu">
        <div className="web-menu">
          <WebHeader />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu_icon"></i>
          </div>
          {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
