// StyledContact.js
import styled from 'styled-components';

export const StyledContactSection = styled.section`
  background: transparent;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  .content {
    position: relative;
    text-align: center;
    width: 100%;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 50px;
    background-color: #ccc;
    padding: 20px;
  }

  .h3_contact {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #83242d;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .contact-box {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h4 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #83242d;
    }

    p {
      font-size: 18px;
      line-height: 1.6;
      color: #444;
    }

    &:hover {
      transform: translateY(-5px);
      transition: transform 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 992px) {
    .content .mxw800p {
      border-radius: 20px; 
      padding: 20px; 
    }

    .h3_contact {
      font-size: 30px;
    }

    .contact-box{
      margin-bottom: 20px;
      padding: 20px; 
    }
  }

  @media (max-width: 576px) {
    .content .mxw800p {
      border-radius: 10px; 
      padding: 15px; 
    }

    .h3_contact {
      font-size: 24px;
    }

    .contact-box {
      padding: 15px;
    }
  }


`;

export default StyledContactSection;
