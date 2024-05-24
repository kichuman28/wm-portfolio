import React, { useState, useEffect } from 'react';
import Header from './header';
import Banner from './banner';
import Drawer from './drawer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [settings, setSettings] = useState({
    dots: true,
    arrows: window.innerWidth >= 576,
    infinite: true,
    speed: 250,
    slidesToShow: window.innerWidth >= 576 ? 3 : 4, // Initially show 3 slides, but 4 when screen width is 576px or larger
    slidesToScroll: 1,
    vertical: window.innerWidth < 576,
    swipe: true,
    swipeToSlide: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 576;
      setSettings(prevSettings => ({
        ...prevSettings,
        vertical: isSmallScreen,
        arrows: !isSmallScreen,
        slidesToShow: isSmallScreen ? 4 : 3, // Show 4 slides when screen width is 576px or larger
      }));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Header />
      <Banner settings={settings} />
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default MyComponent;
