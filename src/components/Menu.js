import react from 'react';
import './menu.styles.css';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className='menu'> 
    <span className="logo">Kervintz Noel </span>
    
    <div className="list">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/Contact">Contact</Link>
    </div>
    
    <div className="burger">
      <div className="slides"></div>
      <div className="slides"></div>
      <div className="slides"></div>
    </div>
    
  </div>
)

export default Menu;