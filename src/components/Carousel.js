import React from 'react';
import styled from 'styled-components';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import logo from '../assets/logo.png';  // Importa el logo

const CarouselContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px; /* Ajusta según sea necesario */
  z-index: 1000;
  overflow: hidden;
  margin: 0; /* Asegúrate de que no haya márgenes */
  padding: 0; /* Asegúrate de que no haya rellenos */
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 67%;
`;

const CarouselImage = styled.img`
  width: calc(100% / 3); /* Divide el ancho en tres partes iguales */
  height: 100%;
  object-fit: cover; /* Asegura que la imagen cubra toda la altura del contenedor */
`;

const Logo = styled.img`
  position: absolute;
  top: 50%; /* Centra verticalmente */
  left: 10%; /* Ajusta horizontalmente si es necesario */
  transform: translate(-50%, -50%); /* Ajusta la posición del centro */
  height: 100px; /* Ajusta el tamaño del logo según sea necesario */
  z-index: 1001; /* Asegura que el logo esté sobre las imágenes */
`;

const Carousel = () => {
  return (
    <CarouselContainer>
      <SlideContainer>
        <CarouselImage src={carousel1} alt="Slide 1" />
        <CarouselImage src={carousel2} alt="Slide 2" />
        <CarouselImage src={carousel3} alt="Slide 3" />
  
      </SlideContainer>
    </CarouselContainer>
  );
};

export default Carousel;
