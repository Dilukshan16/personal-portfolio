import React from "react";
import "./Hero.css";
import "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        className="profile"
        src="https://i.postimg.cc/y6DvrT5N/Whats-App-Image-2025-04-04-at-15-55-52-9b71d0b9.jpg"
        alt=""
        style={{
          width: "250px",
          height: "auto",
          borderRadius: "300px",
        }}
      />
      <h1>
        {" "}
        <span>I'm Dilukshan </span>| Undergraduate Software Developer
      </h1>
      <p>
        I’m an undergraduate Software Engineering student with a strong interest
        in full-stack development, mobile apps, and cloud technologies. I have
        hands-on experience with React, Flutter, Firebase, and Java, and I’m
        constantly learning to improve my development skills and build impactful
        digital solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a href="./Resume.pdf" download="Dilukshan_Resume.pdf">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
