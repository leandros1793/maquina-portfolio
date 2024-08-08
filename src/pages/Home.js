import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const darkenColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16);
  const r = Math.max((num >> 16) - percent, 0);
  const g = Math.max(((num >> 8) & 0x00FF) - percent, 0);
  const b = Math.max((num & 0x0000FF) - percent, 0);
  
  return `#${(0x1000000 + (r * 0x10000) + (g * 0x100) + b).toString(16).slice(1)}`;
};

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  height: 100vh;
  padding: 20px;
  position: relative;
`;

const Box = styled(Link)`
  background-color: ${props => props.bgColor || 'white'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${props => darkenColor(props.bgColor || '#FFFFFF', 20)};
  }
`;

const CenterCircle = styled('div')`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  z-index: 0;
  background: radial-gradient(circle at center, 
    ${props => props.bgColor1 || '#A7E3A3'} 50%, 
    ${props => props.bgColor2 || '#FFFFFF'} 50%);
`;

const Home = () => (
  <GridContainer>
    <Box to="/about" bgColor="#12ff00">Proyectos</Box>
    <Box to="/portfolio" bgColor="#FFFFFF">Portfolio</Box>
    <Box to="/services" bgColor="#FFFFFF">LAB</Box>
    <Box to="/contact" bgColor="#12ff00">Contacto</Box>
    <CenterCircle bgColor1="#12ff00" bgColor2="#FFFFFF" />
  </GridContainer>
);

export default Home;
