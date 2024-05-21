import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background-color: rgba(16, 36, 71, 0.8);
  color: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease;
  transform: translateY(${props => (props.isOpen ? '0' : '-100%')});

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 40px;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 1.2em;

  @media (max-width: 768px) {
    margin-top: 40px;
    font-size: 1em;
  }

  @media (max-width: 576px) {
    margin-top: 40px;
    font-size: 0.9em;
  }
`;

const Button = styled.button`
  font-size: 1.2em;
  position: absolute;
  bottom: 100px;
  right: 120px;
  background-color: #fff;
  color: #102447;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #47bfbf;
    color: #fff;
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 70px;
    margin-left: 165px;
  }

  @media (max-width: 576px) {
    position: static;
    margin-top: 5px;
    margin-left: 165px;
  }
`;

const Drawer = ({ isOpen, onClose, content }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <DrawerContainer isOpen={isOpen} ref={drawerRef}>
      <Content>
        <p>{content}</p>
      </Content>
      <Button onClick={onClose}>Know More</Button>
    </DrawerContainer>
  );
};

export default Drawer;
