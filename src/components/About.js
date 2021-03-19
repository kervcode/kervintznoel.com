import React from 'react';
import profile_picture from '../images/profile_picture.png';
import * as Icons from '@material-ui/icons';
import {FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import './hero.style.css';
import { Link} from 'react-router-dom';

function About() {
    return (
        <div className="hero">
       <div className="image">
       <img src={profile_picture} alt="" className="profile_picture"/>
       </div>
       <div className="info_text">
          <p>Hello there, I'm</p>
          <h1 className="my_name">Kervintz Noel.</h1>
          <h2 className="info_text_heading"> Full Stack Developer.</h2>
          <h3 className="location">Based in Boston, MA.</h3>
          <p className="icons"><FaJs /> <FaReact /><FaNodeJs /></p>
          <p className="pitch">
           Full stack developer seeking a position where I can be productive and efficient while improving my technical skills and build my career as a professional developer.
          </p>
          <Link to="/projects">
            <button className="button">Projects</button>
          </Link>
          <Link to="/contact">
            <button className="button">Contact me</button>
          </Link>
       </div>
  </div>
    )
}

export default About
