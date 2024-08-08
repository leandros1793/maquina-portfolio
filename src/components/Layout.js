import React from 'react';
import styled from 'styled-components';
import SidebarHeader from './SidebarHeader';
import Carousel from './Carousel';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos el 100% de la altura de la ventana */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1; /* Permite que el contenido se expanda para llenar el espacio disponible */
`;

const MainContent = styled.div`
  margin-top: 95px; /* Ajusta este valor según la altura del carrusel */
  flex: 3; /* Permite que el contenido se expanda */
  padding: 20px;
  position: relative;
  margin-left:140px
`;

const FooterWrapper = styled.div`
  margin-top: auto; /* Empuja el footer hacia el fondo del contenedor */
  padding: 20px; /* Asegura que haya suficiente espacio en el footer */
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Carousel />
      <ContentWrapper>
        <SidebarHeader />
        <MainContent>
          {children}
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </MainContent>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
