import React, { useState, useEffect } from 'react';
import Header from './header';
import Banner from './banner';
import Drawer from './drawer'; // Import the Drawer component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility
  const [settings, setSettings] = useState({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 250,
    slidesToShow: window.innerWidth < 400 ? 1 : window.innerWidth < 576 ? 2 : 3,
    slidesToScroll: 1,
    vertical: window.innerWidth < 576, // Set vertical orientation based on screen width less than 576px
    swipe: true,
  });

  useEffect(() => {
    const handleResize = () => {
      // Update settings based on window width
      setSettings(prevSettings => ({
        ...prevSettings,
        vertical: window.innerWidth < 576, // Set vertical orientation based on screen width less than 576px
        slidesToShow: window.innerWidth < 400 ? 1 : window.innerWidth < 576 ? 2 : 3, // Adjust slidesToShow based on screen width
      }));
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, on component mount

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false); // Close the drawer
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
