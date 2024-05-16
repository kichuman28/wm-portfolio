// MyComponent.jsx
import React from 'react';
import Header from './header';
import Banner from './banner'; // Import the Banner component
import 'slick-carousel/slick/slick.css'; // Import React Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import React Slick theme styles

const MyComponent = () => {
  // Define settings for the React Slick slider
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3, // Display three slides at a time
    slidesToScroll: 1,
    // Add more settings as needed
  };

  return (
    <>
      <Header />
      <Banner settings={settings} /> {/* Use the Banner component */}
    </>
  );
};

export default MyComponent;
