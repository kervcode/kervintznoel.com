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
        <div>
          <div className="about_images">
          
          </div>
          <div className="about_text">
              <p>
                My name is Kervintz Noel. I am a User Support Specialist and a Full Stack JavaScript Developer for the remainder of the day and by heart.
              </p>
              <p>
                I am seeking a developer position where I can be productive and efficient while improving my technical skills and build my career as a professional developer.
              </p>
              <p>
                I have been doing IT support since 2010. I was my last year of a computer science degree in Haiti at the time. I continued with the same field when I moved the US.
                </p>
              <p>
                During my years in computer science and IT support, I became interested with many subjects in IT. Among the interesting topics I was studying, I realized that programming was my true passion. For this reason, I decided to focus on what I wanted to do the most and become a Full Stack JavaScript developer. I did that by studying with Teamtreehouse and completed 10 projects on my own.
                </p>
              <p>
                Besides my professional life, I am a family oriented guy, a husband, and a dad to a 2 months old boy. When I am not working or coding on my computer, I am for sure having fun with my son, wife or trying a YouTube recipe for the family on a Sunday.          
              </p>
          </div>
        </div>
      </div>
    )
}

export default About
