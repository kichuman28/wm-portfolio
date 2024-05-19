import styled from 'styled-components';

export const StyledBanner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column; /* Stacks heading and slider vertically */
  justify-content: center;
  align-items: center;
  z-index: 1;

  .banner-heading {
    padding-left: 250px;
    margin-bottom: 20px; /* Space between the heading and the slider */
    text-align: left; /* Align text to the left */
    width: 100%; /* Ensure it takes up the full width */
  
    h2 {
      font-size: 2rem; /* Adjust the size as needed */
      color: #FFFFFF; /* Adjust the color if necessary */
    }
  }

  .slick-slider {
    width: 70%;
    margin: 0 auto;
  }

  .slick-slide {
    padding: 0 20px;
    position: relative;
  }

  .slick-slide img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    border-radius: 20px; /* Add rounded corners */
  }

  .slick-slide:hover img {
    transform: scale(1.1);
  }

  .image-overlay-button {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
    transition: background-color 0.3s, color 0.3s;
    opacity: 0; /* Initially hide the button */
    visibility: hidden; /* Ensure it's not focusable when hidden */
  }

  .slick-slide:hover .image-overlay-button {
    opacity: 1; /* Show button on hover */
    visibility: visible; /* Make it focusable on hover */
  }

  .image-overlay-button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
  }

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    top: 50%; /* Position arrows vertically centered */
    transform: translateY(-50%);
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 50px; /* Adjust the size of the arrow icon */
    color: #fff; /* Change arrow color */
  }



  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: #000; /* Change arrow color on hover */
  }

  .slick-prev {
    left: -60px; /* Adjust as needed */
  }
  
  .slick-next {
    right: -60px; /* Adjust as needed */
  }

  @media (max-width: 768px) {
    .slick-slider {
      width: 90%;
    }
  }

  @media (max-width: 576px) {
    .banner-heading {
      h2 {
        font-size: 1rem; /* Adjust the size as needed */
      }
    }

    .image-overlay-button {
      font-size: 15px;
    }

    .slick-slider {
      width: 90%;
    }

    .slick-prev,
    .slick-next {
      padding: 10px 5px; /* Adjust padding for smaller screens */
    }
  }
`;

export default StyledBanner;
