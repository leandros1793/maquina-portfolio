import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imagen1 from '../assets/imagen1.jpeg';
import foto1 from "../assets/foto1.jpeg";
import iconopc from "../assets/iconopc.jpeg";
import mv from "../assets/mv.jpeg";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Slider = styled.div`
  margin-top: 20px;
  max-width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Services = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Service = styled.div`
  text-align: center;
  width: 100%;
  max-width: 250px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 150px;
  height: 220px;
  margin-bottom: 20px;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const CtaButton = styled.a`
  width: auto;
  display: inline-block;
  background-color: #33CD32; /* Fondo verde */
  color: #000000; /* Letras negras */
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-family: 'Digital-7', sans-serif; /* Aplica la fuente Digital-7 */

  &:hover {
    background-color: #32CD32 ; /* Cambio de color al hacer hover */
  }
`;

const Home = () => {
  return (
    <Container>
      <main>
        <Slider>
          <Image src={imagen1} alt="Imagen 1" />
        </Slider>
        <h2>Servicios Destacados</h2>
        <Services>
          <Service>
            <Icon src={foto1} alt="Fotografía" />
            <h3>Fotografía Profesional</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <CtaButton href="/services">Más información</CtaButton>
          </Service>
          <Service>
            <Icon src={iconopc} alt="Producción de Contenido" />
            <h3>Producción de Contenido</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <CtaButton href="/services">Más información</CtaButton>
          </Service>
          <Service>
            <Icon src={mv} alt="Marketing Visual" />
            <h3>Marketing Visual</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <CtaButton href="/services">Más información</CtaButton>
          </Service>
        </Services>
        <CallToAction>
          <CtaButton href="/portfolio">Explora nuestro trabajo</CtaButton>
        </CallToAction>
      </main>
    </Container>
  );
};

export default Home;
