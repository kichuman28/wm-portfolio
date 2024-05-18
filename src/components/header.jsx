// Header.jsx
import React, { useRef, useEffect } from 'react';
import StyledHeader from './styles/styled_header';
import { Link } from 'react-router-dom';
import LG from "../assets/logo.png";


const Header = () => {
  const headerRef = useRef(null);

  const toggle = () => {
    const header = headerRef.current;
    if (header) {
      header.classList.toggle('active');
    }
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
    <StyledHeader ref={headerRef}>
      <Link to="/wm-portfolio">
        <img src={LG} alt="logo" />
      </Link>      
      <ul>
        <li><a href="/wm-portfolio" onClick={toggle}>What We Do</a></li>
        <li><a href="#about" onClick={toggle}>Who We Are</a></li>
        <li><a href="#services" onClick={toggle}>Insights</a></li>
        <li><Link to="/career">Careers</Link></li>
      </ul>
      <div className="toggle" onClick={toggle}></div>
    </StyledHeader>
  );
};

export default Header;
