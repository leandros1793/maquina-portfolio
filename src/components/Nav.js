import { useState } from 'react';
import { BiHomeAlt, BiUser, BiBook, BiMessageDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'; // Importa Link y useLocation desde react-router-dom

const NavLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  margin: 15px 20px; /* Ajusta los márgenes para un mejor espaciado */
  transition: color 0.3s;

  &:hover,
  &.active {
    color: #ffd700;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* Centrar los íconos horizontalmente */
  align-items: center;
  padding: 10px 20px; /* Reducir el padding para una barra más delgada */
  background-color: rgba(34, 34, 34, 0.8); /* Fondo transparente oscuro */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px); /* Añadir un efecto de desenfoque para un efecto moderno */
`;

const Nav = () => {
  const location = useLocation(); // Obtener la ubicación actual

  return (
    <NavContainer>
      <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
        <BiHomeAlt />
      </NavLink>
      <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        <BiUser />
      </NavLink>
     
      <NavLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>
        <RiServiceLine />
      </NavLink>
      <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
        <BiMessageDetail />
      </NavLink>
    </NavContainer>
  );
};

export default Nav;
