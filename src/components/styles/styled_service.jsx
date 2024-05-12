// StyledService.js
import styled from 'styled-components';

export const StyledServiceSection = styled.section`
  background: transparent;
  min-height: 100vh;
  padding: 180px 0;

  .content {
    text-align: center;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
  }

  .h3_services {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 40px;
    color: #83242d;
  }

  .service-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .service-box {
    background-color: #ccc; 
    padding: 30px; 
    border-radius: 50px; 
  }

  .service-card {
    flex: 0 0 calc(50% - 20px);
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 30px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h4 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #83242d;
    }

    p {
      font-size: 18px;
      color: #444;
    }
  }


  @media (max-width: 992px) {
    .service-box{
      border-radius: 20px; /* Adjust border radius */
      padding: 20px; /* Adjust padding */
    }

    .h3_services {
      font-size: 30px;
    }

    .service-card{
      padding: 20px; 
    }
  }


  @media (max-width: 576px) {
    .service-box,
    .contact .mxw800p {
      border-radius: 10px; /* Adjust border radius */
      padding: 15px; /* Adjust padding */
    }

    .h3_services {
      font-size: 24px;
    }

    .service-card{
      padding: 15px; 
    }
  }


`;

export default StyledServiceSection;
