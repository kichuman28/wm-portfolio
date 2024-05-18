// Banner.jsx
import React from 'react';
import StyledBanner from './styles/styled_banner';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import React Slick library
import 'slick-carousel/slick/slick.css'; // Import React Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import React Slick theme styles

const Banner = ({ settings }) => {
  const navigate = useNavigate();

  return (
    <StyledBanner id='home'>
      <div className="banner-heading">
        <h2>Transforming Businesses</h2>
      </div>
      <Slider {...settings}>
        <div>
          <img src="/assets/AIM.png" alt="AI Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to AI" onClick={() => navigate("/ai")}>Learn More</button>
        </div>
        <div>
          <img src="/assets/voip1.jpg" alt="VOIP Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to VOIP" onClick={() => navigate("/voip")}>Learn More</button>
        </div>
        <div>
          <img src="/assets/app2.jpg" alt="Mobile App Development Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to Mobile App Development" onClick={() => navigate("/mobile")}>Learn More</button>
        </div>
        <div>
          <img src="/assets/software1.jpg" alt="Software Development Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to Software Development" onClick={() => navigate("/software")}>Learn More</button>
        </div>
      </Slider>
    </StyledBanner>
  );
};

export default Banner;
