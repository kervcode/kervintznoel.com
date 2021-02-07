import react from 'react';
import profile_picture from '../images/profile_picture.png';
import './hero.style.css'

const Hero = () => (
  <div className="hero">
     <p>Hello there, I'm</p>
     <h1>Kervintz Noel</h1>
     <p>Full Stack Developer</p>
     
     <div className="info">
       <img src={profile_picture} alt="" className="profile_picture"/>
       <div className="info_text">
         <h1>Full Stack Developer. Based in Boston, MA.</h1>
         <p>
           Quick learner, Self-motivated full stack developer seeking a position where I can be productive and efficient while improving my technical skills and build my career as a professional developer.
         </p>
       </div>
       
     </div>
  </div>
)

export default Hero;