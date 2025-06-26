import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img3 from "../../assets/profile_img3.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img3}
            alt=""
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "200px",
            }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Pushparajah Dilukshan, an enthusiastic and dedicated
              undergraduate software developer with a strong passion for
              building innovative and user-friendly digital solutions. Currently
              pursuing my degree in Software Engineering,I specialize in
              full-stack development, database management, and cloud
              technologies, with proficiency in Java, Python, JavaScript, C#,
              and PHP and I have hands-on experience with modern web and mobile
              technologies including React, Flutter, Firebase, and Node.js. I
              enjoy solving real-world problems through code and continuously
              seek opportunities to learn and grow in the tech industry. My goal
              is to contribute to impactful projects and become a well-rounded
              full-stack developer.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "25%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-education">
        <div className="about-edu">
          <h1>BSc (Hons) in Computing (Undergraduate)</h1>
          <p>NIBM</p>
        </div>
        <hr />
        <div className="about-edu">
          <h1>GCE O/L</h1>
          <br />
          <p>St.John.Boscos College - Hatton</p>
        </div>
        <hr />
        <div className="about-edu">
          <h1>GCE A/L</h1>
          <br />
          <p>St.John.Boscos College - Hatton</p>
        </div>
      </div>
    </div>
  );
};

export default About;
