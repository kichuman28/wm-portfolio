// StyledAbout.js
import styled from 'styled-components';

export const StyledAboutSection = styled.section`
  background: transparent;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 80px 0;
  align-items: center;
  position: relative;
  z-index: 2;

  .content {
    text-align: center;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
  }

  .h3_about {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #83242d;
  }

  .about-box {
    background-color: #ccc; 
    padding: 30px; 
    border-radius: 50px; 

  .about_para {
    font-size: 18px;
    line-height: 1.6;
    color: #444;
    padding-bottom: 25px;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background: #83242d;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6d1d26;
    }
  }


  @media (max-width: 992px) {
    .about-box{
      border-radius: 20px; /* Adjust border radius */
      padding: 20px; /* Adjust padding */
    }

    .h3_about {
      font-size: 30px;
    }
  }

  @media (max-width: 576px) {
    .h3_about {
      font-size: 24px;
    }
  }
`;

export default StyledAboutSection;
