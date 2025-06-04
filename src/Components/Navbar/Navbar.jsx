import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../Assets/menuicon.png'; 
import { Link, Element } from 'react-scroll';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const [mobilemenu,setmobilemenu]=useState(false);
const togglemenu=()=>{
mobilemenu ? setmobilemenu(false) : setmobilemenu(true);
}

  return (
    <nav className={`navbar ${scrolled ? "scrolled-navbar" : "transparent-navbar"}`}>
      <div className="navbar-brand">
        Edusity
        </div>
      <ul className={mobilemenu?'navbar-menu':'mobile-menu'}>
        <li className="navbar-item"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className="navbar-item"><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li className="navbar-item"><Link to='about-us' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li className="navbar-item"><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li className="navbar-item"><Link to='testimonials' smooth={true} offset={-160} duration={500}>Testimonials</Link></li>
        <li className="navbar-item"><Link to='contact-us' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>
      <img src={logo} className="menu-icon" onClick={togglemenu} alt="" />
    </nav>
  );
};

export default Navbar;
