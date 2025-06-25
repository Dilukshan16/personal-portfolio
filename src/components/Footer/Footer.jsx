import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Dilukshan</h2>
          <br />
          {/* <img src={theme_pattern} alt="" /> */}

          <p>
            Thank you for visiting my portfolio. I'm always open to exciting
            projects, collaborations, or just a friendly tech chat — let’s build
            something amazing together!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Pushparajah Dilukshan. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
