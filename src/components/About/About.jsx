import React from "react";
import { FaGamepad } from "react-icons/fa";
import { TbTrekking } from "react-icons/tb";
import { FaBitcoin } from "react-icons/fa";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
      Hello! I'm Uditya Kumar, a passionate and motivated fresher with a strong foundation in both front-end and back-end technologies. I recently completed my Master's degree in Computer Application from Graphic Era Hill University, where I gained hands-on experience in creating immersive digital experiences.

On the front end, I'm skilled in HTML, CSS, JavaScript, and React, allowing me to design dynamic and responsive user interfaces. My backend expertise includes working with Node.js, Express.js, and MongoDB, enabling me to develop robust and scalable server-side applications.
</p>
<p>
I'm eager to contribute my skills and grow as a developer, bringing fresh ideas and enthusiasm to the team.
      </p>
      <h3 className="personal-info">PERSONAL INFORMATION</h3>
      <div className="personal-details">
        <div className="blocks">
          <span>
            <p>First Name:</p>
            <p>Uditya</p>
          </span>
          <span>
            <p>Last Name:</p>
            <p>Kumar</p>
          </span>
          <span>
            <p>Address:</p>
            <p>Dehradun,Uttrakhand</p>
          </span>
        </div>
        <div className="blocks">
          <span>
            <p>Highest Degree:</p>
            <p>Master of Computer Application</p>
          </span>
          <span>
            <p>E-Mail:</p>
            <p>Udityakumar2000@gmail.com</p>
          </span>
          <span>
            <p>Phone:</p>
            <p>+918477812100</p>
          </span>
        </div>
      </div>
      <h3 className="personal-info">PROGRAMMING</h3>
      <div className="programming-details">
        <span>
          <p>ReactJS</p>
        </span>
        <span>
          <p>NodeJS</p>
        </span>
        <span>
          <p>ExpressJS</p>
        </span>
        <span>
          <p>MongoDB</p>
        </span>
      </div>
      <div className="eduexp">
        <div className="edu">
          <h3 className="personal-info">EDUCATIONS</h3>
          <div className="single-edu">
            <p className="year">2022-2024</p>
            <h3>Graphic Era Hill University</h3>
            <p>Master of Computer Application</p>
          </div>
          <div className="single-edu">
            <p className="year">2018-2021</p>
            <h3>Shri Guru Ram Rai PG College</h3>
            <p>Bachelor of Science</p>
          </div>
        </div>
        <div className="exp">
          <h3 className="personal-info">EXPERIENCES</h3>
          <div className="single-edu">
            <span>Internship</span>
            <p className="year">Sep 2023 - Dec 2023</p>
            <h3>NextWebGuru Techno Services</h3>
            <p>FrontEnd Developer</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="personal-info">INTERESTS</h3>
        <div className="interest">
          <div className="in-div">
            <div className="span">
            <FaGamepad className="icon" size={40} />
            </div>
            <p>Gaming</p>
          </div>

          <div className="in-div">
            <div className="span">
            <TbTrekking className="icon" size={40} />
            </div>
            <p>Trekking</p>
          </div >
          <div className="in-div">
            <div className="span">
              <FaBitcoin className="icon" size={40} />
            </div>
            <p>Crypto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
