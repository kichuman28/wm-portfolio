// StyledHeader.js
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
  z-index: 1000;

  &.sticky {
    padding: 5px 100px;
    background: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .logo {
    position: relative;
    font-weight: 700;
    color: #83242d;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;

    &:hover {
      transform: scale(1.2);
    }
  }

  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      position: relative;
      list-style: none;

      a {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        color: #83242d;
        letter-spacing: 2px;
        font-weight: 600;

        &:hover {
          border-bottom: 2px solid #83242d;
          color: #000;
        }
      }
    }
  }


  .toggle {
    display: none;
  }

  
  @media (max-width: 992px) {
    /* Toggle button styles */
    .toggle {
      display: block;
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  
    .toggle::before {
      content: '';
      position: absolute;
      top: 6px;
      width: 100%;
      height: 4px;
      background: #83242d;
      z-index: 1;
      box-shadow: 0 10px 0 #83242d;
      transition: 0.5s;
      border-radius: 2px; /* Add rounded edges */
    }
  
    .toggle::after {
      content: '';
      position: absolute;
      bottom: 1px;
      width: 100%;
      height: 4px;
      background: #83242d;
      z-index: 1;
      transition: 0.5s;
      border-radius: 2px; /* Add rounded edges */
    }
  
    &,
    &.sticky{
      padding: 5px 50px;
      background: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }


  
    ul {
      position: absolute;
      top: 59px;
      left: 0;
      width: 100%;
      text-align: center;
      height: 0;
      overflow: hidden;
      background: #fff;
      visibility: hidden;
      opacity: 0;
      transition: max-height 0.5s ease, visibility 0.5s ease, opacity 0.5s ease;
    }
  
    &.active ul{
      height: auto;
      visibility: visible;
      opacity: 1;
      display: block;
      padding-top: 20px;
      max-height: 500px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
  
    &.active ul li a {
      display: inline-block;
      margin: 10px 0;
      font-size: 20px;
      color: #83242d;
    }
  

    &.active ul li a:hover {
      border-bottom: 2px solid #83242d;
      color: #000;
    }


    .sticky .logo,
    .sticky ul li a {
      color: #83242d;
    }
  }  

  @media (max-width: 576px) {
    & {
      padding: 20px;
    }
  }
`;


export default StyledHeader;
