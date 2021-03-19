import { useState } from 'react';
import './menu.styles.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Menu = () => {
  
  const [open, setOpen] = useState("close");
  const [ visible, setVisible] = useState("open");
  

  return (
    <div className='menu'> 
      <span className="logo">KN </span>
      
      <motion.div className={"list " + open}
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{delay: 1.5}}
      >
        <Link to="/" onClick= { () => setOpen("close")}>Home</Link>
        <Link to="/projects" onClick= { () => setOpen("close")}>Projects</Link>
        {/* <Link to="/blog" onClick= { () => setOpen("close")}>Blog</Link> */}
        {/* <Link to="/Contact" onClick= { () => setOpen("close")}>Contact</Link> */}
      </motion.div>
      
      <div className="burger" onClick={() => setOpen(open === "close" ? "open" : "close")}>
        <div className="slides"></div>
        <div className="slides"></div>
        <div className="slides"></div>
      </div>
      
    </div>
  )
}

export default Menu;