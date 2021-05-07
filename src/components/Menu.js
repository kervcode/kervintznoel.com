import { useState } from 'react';
import './menu.styles.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Menu = () => {
  
  const [open, setOpen] = useState("close");
  const [ visible, setVisible] = useState("open");
  

  return (
    <div className='menu'> 
      <div className="logo"> 
        &#60;
          <span className="logo__name">Kervintz Noel</span>
        /&#62;
      </div>
      
      
      <div className={"list " + open}>
        <Link to="/" onClick= { () => setOpen("close")}>Home</Link>
        <Link to="/projects" onClick= { () => setOpen("close")}>Projects</Link>
        <Link to="/about" onClick= { () => setOpen("close")}>About me</Link>
        {/* <Link to="/blog" onClick= { () => setOpen("close")}>Blog</Link> */}
        {/* <Link to="/Contact" onClick= { () => setOpen("close")}>Contact</Link> */}
      </div>
      
      <div className="burger" onClick={() => setOpen(open === "close" ? "open" : "close")}>
        <div className="slides"></div>
        <div className="slides"></div>
        <div className="slides"></div>
      </div>
      
    </div>
  )
}

export default Menu;