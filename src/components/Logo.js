// Logo.js
import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png"; // Ajusta la ruta según la estructura de tu proyecto

const StyledLogo = styled.img`
  max-width: 100%; /* Ajusta el logo al ancho del contenedor */
  height: auto; /* Mantiene la proporción del logo */
  display: block; /* Asegura que el logo se comporte como un bloque */
`;

const Logo = () => {
  return (
    <StyledLogo src={logo} alt="Logo" />
  );
};

export default Logo;
