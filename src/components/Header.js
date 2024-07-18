import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Logo.jpeg'; // Asegúrate de que esta ruta sea correcta

const HeaderContainer = styled.header`
  background-color: #ffffff;
  color: #333;
  padding: 20px;
  text-align: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Añade espaciado entre los elementos si es necesario */
`;

const LogoImage = styled.img`
  width: 100%; // Ajusta el tamaño del logo al contenedor
`;

const Nav = styled.nav`
  margin-top: 10px;
  display: flex;
  justify-content: center; /* Centra los elementos */
  width: 100%; /* Ocupa todo el ancho disponible */
`;

const NavLink = styled(Link)`
  font-family: 'Digital-7', sans-serif;
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  transition: text-decoration-color 0.3s ease;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #00ff00;
  }
`;

const StyledCaption = styled.p`
  font-family: 'Digital-7', sans-serif; /* Aplica la fuente Digital-7 */
  color: #00ff00; /* Color del texto */
  background-color: #ffffff; /* Color de fondo */
  padding: 10px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImage src={logo} alt="Logo Máquina Studio" />
      </HeaderContent>
      <StyledCaption>Capturando el futuro visual</StyledCaption>
      <Nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/services">Servicios</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
