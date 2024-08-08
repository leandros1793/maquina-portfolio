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

const Subtitle = styled.p`
  color: #333;
  margin-bottom: 10px;
  line-height: 1.6; /* Mejora la legibilidad del texto */
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
        <Subtitle>
          En Máquina, somos más que un estudio de fotografía, video y marketing; somos tu aliado estratégico en la creación y gestión de tu imagen visual. Ubicados en Córdoba, Argentina, somos un equipo apasionado por la comunicación visual y el arte, que se especializa en ofrecer soluciones integrales adaptadas a las necesidades específicas de cada cliente.
        </Subtitle>
        <Subtitle>
          <strong>Nuestra Misión:</strong> En Máquina, nuestra misión es proporcionar una plataforma de comunicación visual que trascienda las expectativas. Nuestro enfoque está basado en una combinación de experiencia profesional y creatividad innovadora. Creemos en el poder del arte como recurso aplicado, y trabajamos incansablemente para convertir esa creencia en resultados tangibles para tu negocio.
        </Subtitle>
        <Subtitle>
          <strong>Servicios:</strong> Asesoramiento Personalizado: Entendemos que cada proyecto es único. Por eso, ofrecemos un asesoramiento personalizado para ayudarte a definir y alcanzar tus objetivos de comunicación visual de manera efectiva.
        </Subtitle>
        <Subtitle>
          Producción de Contenidos: Desde fotografía de alta calidad hasta videos impactantes, nuestro equipo se encarga de toda la producción de contenido visual para garantizar que tu mensaje sea claro y atractivo.
        </Subtitle>
        <Subtitle>
          Planificación Estratégica: Desarrollamos estrategias de comunicación visual que se alinean con los objetivos de tu negocio. Planificamos cada detalle para maximizar el impacto y la efectividad de tus campañas.
        </Subtitle>
        <Subtitle>
          Gestión de Proyectos: Nos encargamos de la gestión completa de tus proyectos de comunicación visual, asegurando que cada etapa se ejecute de manera eficiente y profesional.
        </Subtitle>
        <Subtitle>
          Asistencia Continua: Ofrecemos soporte continuo para ayudarte a adaptarte a las cambiantes demandas del mercado y asegurarnos de que tu estrategia de comunicación visual siempre esté a la vanguardia.
        </Subtitle>
        <Subtitle>
          <strong>Nuestra Red de Contactos:</strong> En Máquina, también valoramos la importancia de las conexiones. Trabajamos en estrecha colaboración con una amplia red de contactos y proveedores para generar oportunidades que impulsen el crecimiento y la inserción de pequeñas y medianas empresas en un mercado dinámico, moderno y globalizado. Creemos que las alianzas estratégicas son clave para el éxito y nos dedicamos a construir relaciones que beneficien a nuestros clientes y fortalezcan su presencia en el mercado.
        </Subtitle>
        <Subtitle>
          <strong>Nuestro Compromiso:</strong> Nos comprometemos a ofrecer soluciones de comunicación visual que no solo cumplan, sino que superen tus expectativas. En Máquina, cada proyecto es una oportunidad para demostrar nuestra pasión por el arte y la excelencia en la ejecución. Estamos aquí para asesorar, producir, planificar, gestionar y asistir en cada paso del camino, asegurándonos de que tu mensaje llegue con la claridad y el impacto que merece.
        </Subtitle>
        <Subtitle>
          <strong>Únete a Nosotros:</strong> Invitamos a emprendedores y pequeñas y medianas empresas a formar parte de nuestra red. Descubre cómo Máquina puede ser el socio perfecto para llevar tu comunicación visual al siguiente nivel y abrir nuevas oportunidades en un mercado en constante evolución.
        </Subtitle>
        <StrongText>Asesoramos, producimos, planificamos, gestionamos, asistimos.</StrongText>
      </Section>
    </Container>
  );
};

export default About;
