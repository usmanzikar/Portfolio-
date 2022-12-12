import React from "react";
import "./about.css";
import SocialContacts from "./SocialContacts";
import ImageSlider from "./images-slider/ImageSlider";
import Seperator from './common/Seperator';
const AboutBody = () => {
  return (
    <div className="AboutBody">
      <div className="about-top">
        <div className="about_info">
        <h1> Hey🙋‍♂️, My Name is <span>USMAN ZIKAR</span> front end developer in{" "}
          <span>React js</span></h1>
          <p>
            Are you looking For a Web developer or React developer? I have two
            years of experience and working to make your development faster,
            easier and efficient. Available 24/7! Get in touch to discuss
            details.
          </p>
        </div>
        <div className='about_img'>
            <img src={require('../img/about.jpg').default} alt="pic" className='img'/>
        </div>
      </div>

      <div className="about-bottom">
          <SocialContacts/>
      </div>
      <Seperator/>
      <div>
        <ImageSlider/>
      </div>
    </div>
  );
};

export default AboutBody;
