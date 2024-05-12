// MyComponent.jsx
import React, { useEffect, useRef } from 'react';
import StyledHeader from './styles/styled_header';
import StyledBanner from './styles/styled_banner';
import StyledAboutSection from './styles/styled_about';
import StyledServiceSection from './styles/styled_service';
import StyledContactSection from './styles/styled_contact';

const MyComponent = () => {
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
    <>
      <StyledHeader ref={headerRef}>
        <a href="#" className="logo">WHITE MATRIX</a>
        <ul>
          <li><a href="#home" onClick={toggle}>HOME</a></li>
          <li><a href="#about" onClick={toggle}>ABOUT</a></li>
          <li><a href="#services" onClick={toggle}>SERVICES</a></li>
          <li><a href="#contact" onClick={toggle}>CONTACT</a></li>
        </ul>
        <div className="toggle" onClick={toggle}></div>
      </StyledHeader>

      <StyledBanner id='home'>
        <h2><span> Lorem</span> Ipsum<span> Lorem</span> Ipsum.</h2>
      </StyledBanner>

      <StyledAboutSection id='about'>
        <div className="content">
          <div className="mxw800p about-box">
            <h3 className="h3_about">Who We Are</h3>
            <p className="about_para">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <a href="#" className="btn">Get Started</a>
          </div>
        </div>
      </StyledAboutSection>

      <StyledServiceSection id='services' className='services'>
        <div className="content">
          <div className="mxw800p">
            <div className="service-box">
              <h3 className="h3_services">What We Do</h3>
              <div className="service-container">
                <div className="service-card">
                  <h4>Service Title 1</h4>
                  <p>Description of the service goes here. You can provide details about what the service offers and its benefits.</p>
                </div>
                <div className="service-card">
                  <h4>Service Title 2</h4>
                  <p>Description of the service goes here. You can provide details about what the service offers and its benefits.</p>
                </div>
                {/* Add more service cards as needed */}
              </div>
            </div>
          </div>
        </div>
      </StyledServiceSection>

      <StyledContactSection id='contact' className='contact'>
        <div className="content">
          <div className="mxw800p">
            <h3 className="h3_contact">Contact Us</h3>
            <div className="contact-grid">
              <div className="contact-box">
                <h4>Address</h4>
                <p>123 Main Street<br />City, Country<br />Postal Code</p>
              </div>
              <div className="contact-box">
                <h4>Contact Details</h4>
                <p>Phone: +123456789<br />Fax: +987654321</p>
              </div>
              <div className="contact-box">
                <h4>Email Us</h4>
                <p>info@example.com<br />support@example.com</p>
              </div>
              <div className="contact-box">
                <h4>Open Hours</h4>
                <p>Monday-Friday: 9am-5pm<br />Saturday: 10am-3pm<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </StyledContactSection>
    </>
  );
};

export default MyComponent;
