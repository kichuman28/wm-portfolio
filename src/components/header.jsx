// Header.jsx
import React, { useRef, useEffect } from 'react';
import StyledHeader from './styles/styled_header';

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
      <img src="/assets/logo.png" alt="logo" />
      <ul>
        <li><a href="#home" onClick={toggle}>What We Do</a></li>
        <li><a href="#about" onClick={toggle}>Who We Are</a></li>
        <li><a href="#services" onClick={toggle}>Insights</a></li>
        <li><a href="#contact" onClick={toggle}>Careers</a></li>
      </ul>
      <div className="toggle" onClick={toggle}></div>
    </StyledHeader>
  );
};

export default Header;
