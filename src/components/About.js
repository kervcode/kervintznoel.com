import React from 'react';
import './about.style.css'
import profile_picture from '../images/profile_picture.png';
import * as Icons from '@material-ui/icons';
import {FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import './hero.style.css';
import { Link} from 'react-router-dom';

function About() {
    return (
      <div className="container">
        <h1>A few words about me</h1>
        <div className="container_detail">
          <div className="container_image">
            <img src={process.env.PUBLIC_URL + "image/aboutme.jpg"} alt="t" className="aboutme-picture" />
          </div>
          <div className="container_text">
              <p>
               My name is Kervintz Noel and I currently work as a User Support Specialist by day and as a Full Stack JavaScript Developer by night, and every spare moment in between. The latter is my absolute passion.
              </p>
              <p>
                I am seeking a developer position where I can grow in experience and efficiency, improving my technical skills and becoming a valued member of a professional developer team.
              </p>
              <p>
                In 2010, while in my last year of University in Haiti where I studied Computer Science, I had the opportunity to move to the United States and continued in the computer field.  Here, I realized my passion for development and have been working to that end these last five years.  I earned a Full Stack JavaScript Developer Certificate from Treehouse by night.
                </p>
              <p>
                I am a loving husband and a new father of a precious 4-month old baby boy. When I am not coding to further improve my skills and learn the newest tech, I am for sure having fun with my son, wife or trying a YouTube recipe for my family on a Sunday.      
              </p>
          </div>
        </div>
      </div>
    )
}

export default About
