import react from 'react';
import profile_picture from '../images/profile_picture.png';
import {FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import './hero.style.css'

const Hero = () => (
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
           Quick learner, self-motivated full stack developer seeking a position where I can be productive and efficient while improving my technical skills and build my career as a professional developer.
          </p>
         <button className="button">Contact me</button>
       </div>
  </div>
)

export default Hero;