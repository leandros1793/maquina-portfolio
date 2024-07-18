import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-top: 40px;
`;

const Title = styled.h2`
  color: #0f0f0f;
  border-bottom: 2px solid #00ff00;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h4`
  color: #333;
  margin-bottom: 10px;
`;

const StrongText = styled.h4`
  font-weight: bold;
  margin-top: 10px;
  color: #00ff00; /* Color verde */
`;

const About = () => {
  return (
    <Container>
      <Section>
        <Title>Nosotros</Title>
        <Subtitle>Somos un estudio de fotografía, video y marketing basado en Córdoba, Argentina. Máquina es una plataforma de soluciones de comunicación visual, con base fotográfica profesional, fuertemente vinculada con el Arte y su valor como recurso aplicado.</Subtitle>
        <Subtitle>Máquina también trabaja generando vínculos a través de una red de contactos y proveedores, generando oportunidades para el emprendedor y ayudando al crecimiento e inserción de la pequeña y mediana empresa a un mercado dinámico, moderno, y globalizado.</Subtitle>
        <StrongText>Asesoramos, producimos, planificamos, gestionamos, asistimos.</StrongText>
      </Section>
    </Container>
  );
};

export default About;
