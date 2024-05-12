// StyledBanner.js
import styled from 'styled-components';

export const StyledBanner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  h2 {
    color: #000;
    font-size: 90px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1em;

    span {
      color: #83242d;
    }
  }


  @media (max-width: 992px) {
    h2 {
      font-size: 60px;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 30px;
      padding: 0 50px;
    }
  }

`;

export default StyledBanner;
