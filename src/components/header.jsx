// Header.jsx
import React, { useRef, useState, useEffect } from 'react';
import StyledHeader from './styles/styled_header';
import { Link } from 'react-router-dom';
import LG from "../assets/logo.png";
import Drawer from './drawer'; // Import the Drawer component

const Header = () => {
  const headerRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility

  const toggle = () => {
    const header = headerRef.current;
    if (header) {
      header.classList.toggle('active');
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <StyledHeader ref={headerRef}>
        <Link to="/wm-portfolio">
          <img src={LG} alt="logo" />
        </Link>      
        <ul>
          <li><a onClick={toggleDrawer}>What We Do</a></li> {/* Change onClick handler */}
          <li><a href="#about" onClick={toggle}>Who We Are</a></li>
          <li><a href="#services" onClick={toggle}>Insights</a></li>
          <li><Link to="/career">Careers</Link></li>
        </ul>
        <div className="toggle" onClick={toggle}></div>
      </StyledHeader>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} /> {/* Render the Drawer component */}
    </>
  );
};

export default Header;
