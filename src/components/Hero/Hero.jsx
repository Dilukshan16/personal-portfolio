import React from "react";
import "./Hero.css";
import "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="https://i.postimg.cc/y6DvrT5N/Whats-App-Image-2025-04-04-at-15-55-52-9b71d0b9.jpg"
        alt=""
      />
      <h1>I'm Pushparajah Dilukshan</h1>
      <h2>Undergraduate Software Developer</h2>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
