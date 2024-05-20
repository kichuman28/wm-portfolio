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
    arrows: window.innerWidth >= 576, // Disable arrows for screens smaller than 576px
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: window.innerWidth < 576, // Set vertical orientation based on screen width less than 576px
    swipe: true , // Enable swipe gestures
    swipeToSlide: true, // Enable swipe to slide
  });

  useEffect(() => {
    const handleResize = () => {
      // Update settings based on window width
      setSettings(prevSettings => ({
        ...prevSettings,
        vertical: window.innerWidth < 576, // Set vertical orientation based on screen width less than 576px
        arrows: window.innerWidth >= 576, // Disable arrows for screens smaller than 576px
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
