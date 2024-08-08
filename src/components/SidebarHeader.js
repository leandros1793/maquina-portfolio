import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo'; // Ajusta la ruta si es necesario
import sidebarImage from '../assets/sidebar.jpeg'; // Ajusta la ruta si es necesario
import Nav from './Nav'; // Importa el componente Nav

const SidebarHeaderContainer = styled.div`
  width: 150px; /* Ajusta este valor al ancho que desees para el sidebar */
  height: 100vh;
  background-color: #222;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; /* Asegura que la imagen no se desborde */
  padding-top: 20px; /* Espacio superior para el logo */
`;

const LogoContainer = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center; /* Centra el logo horizontalmente */
  margin-bottom: 20px; /* Espacio debajo del logo para separar de la navegación */
`;

const NavContainer = styled.div`
  flex: 1; /* Esto hace que el contenedor del Nav ocupe el espacio restante */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra el Nav verticalmente */
`;

const SidebarImage = styled.img`
  width: 100%;
  height: 100%; /* Ajusta la imagen para que cubra toda la altura del sidebar */
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover; /* Asegura que la imagen cubra el área sin distorsionarse */
  z-index: -1; /* Envía la imagen al fondo */
`;

const SidebarHeader = () => (
  <SidebarHeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <NavContainer>
      <Nav />
    </NavContainer>
    <SidebarImage src={sidebarImage} alt="Sidebar Background" />
  </SidebarHeaderContainer>
);

export default SidebarHeader;
