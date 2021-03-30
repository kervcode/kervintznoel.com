import react from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import profile_picture from '../images/profile_picture.png';
import * as Icons from '@material-ui/icons';
import {FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import './hero.style.css'

const Hero = () => (
  <div className="hero">
    <div className="image">
      <img src={profile_picture} alt="" className="profile_picture"/>
      <div className="tags"> 
        <p>#Husband #Father #NewDad #softwareDevelopment
        </p>
      </div>
    </div>
    
    <div className="info_text">
      <p>Hello there, I'm</p>
      <h1 className="my_name">Kervintz Noel.</h1>
      <h2 className="info_text_heading"> Full Stack Developer,</h2>
      <h3 className="location">Based in Boston, MA.</h3>
      {/* <p className="icons"><FaJs /> <FaReact /><FaNodeJs /></p> */}
      <p className="pitch">
        I am seeking a developer position where I can expand my skills and improve my efficiency. Dedicated and hard working, I aspire to excellence in all that I do.  Skilled in solving problems with HTML, CSS, Javascript, Node, Express, React and SQL. My main desire is to continue to improve my technical skills and build my career as a professional developer.
      </p>
      <div className="btn">
        <Link to="/projects">
        <button className="button">Projects</button>
      </Link>
      <Link to="/contact">
        <button className="button">Contact me</button>
      </Link>
      </div>
    </div>
  </div>
)

export default Hero;