// MyComponent.jsx
import React, { useState } from 'react';
import Header from './header';
import Banner from './banner';
import Drawer from './drawer'; // Import the Drawer component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false); // Close the drawer
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <Banner settings={settings} />
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} /> {/* Render the Drawer component */}
    </>
  );
};

export default MyComponent;
