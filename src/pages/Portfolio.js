import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectImage1 from '../assets/project1.jpeg';
import ProjectImage2 from '../assets/project2.jpeg';
import ProjectImage3 from '../assets/project3.jpeg';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-top: 40px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #666;
`;

const ProjectImage = styled.img`
  width: 100%;

  object-fit: cover;
  margin-bottom: 10px;
`;

const Portfolio = () => {
  return (
    <Container>
      
      <main>
        <Section>
          <h2>Nuestro Portfolio</h2>
          <p>Descubre nuestros últimos proyectos y trabajos.</p>
          <ProjectList>
            <ProjectItem>
              <ProjectImage src={ProjectImage1} alt="Proyecto 1" />
              <ProjectTitle>Proyecto 1</ProjectTitle>
              <ProjectDescription>
                Descripción breve del proyecto 1.
              </ProjectDescription>
            </ProjectItem>
            <ProjectItem>
              <ProjectImage src={ProjectImage2} alt="Proyecto 2" />
              <ProjectTitle>Proyecto 2</ProjectTitle>
              <ProjectDescription>
                Descripción breve del proyecto 2.
              </ProjectDescription>
            </ProjectItem>
            <ProjectItem>
              <ProjectImage src={ProjectImage3} alt="Proyecto 3" />
              <ProjectTitle>Proyecto 3</ProjectTitle>
              <ProjectDescription>
                Descripción breve del proyecto 3.
              </ProjectDescription>
            </ProjectItem>
            {/* Agrega más proyectos según sea necesario */}
          </ProjectList>
        </Section>
      </main>
      
    </Container>
  );
};

export default Portfolio;
