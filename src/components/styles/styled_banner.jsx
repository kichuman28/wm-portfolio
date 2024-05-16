import styled from 'styled-components';

export const StyledBanner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .slick-slider {
    width: 80%;
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

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px; /* Add rounded corners */
  }

  .slick-slide:hover .image-overlay {
    opacity: 1;
  }

  .image-overlay-text {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }

  .slick-prev,
  .slick-next {
    top: 50%; /* Position arrows vertically centered */
    transform: translateY(-50%);
    z-index: 1;
  }

  .slick-prev {
    left: -30px; /* Adjust position of previous arrow */
  }

  .slick-next {
    right: -30px; /* Adjust position of next arrow */
  }

  @media (max-width: 768px) {
    .slick-slider {
      width: 90%;
    }

    .image-overlay-text {
      font-size: 20px; /* Adjust the font size for smaller screens */
    }
  }

  @media (max-width: 576px) {
    .slick-slider {
      width: 90%;
      /* Change the slider to vertical */
      flex-direction: column; /* Change flex direction to column */
    }

    .slick-prev,
    .slick-next {
      padding: 10px 5px; /* Adjust padding for smaller screens */
      /* Adjust position of arrows for vertical slider */
      top: initial;
      bottom: 0;
      transform: translateY(0);
    }
  }
`;

export default StyledBanner;
