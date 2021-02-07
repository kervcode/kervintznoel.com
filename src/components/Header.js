import react from 'react';
import Menu from './Menu';
import Hero from './Hero';
import './header.style.css'


const Header = () => (
  <div className='header'> 
    <Menu />
    <Hero />
  </div>
)

export default Header;