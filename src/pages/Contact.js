import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactForm = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 24px;
  margin-right: 15px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contacto</h2>
      <p>Contáctanos para más información y cotizaciones.</p>

      <ContactForm>
        <FormGroup>
          <Label htmlFor="name">Nombre</Label>
          <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensaje</Label>
          <TextArea id="message" name="message" rows="4"></TextArea>
        </FormGroup>
        <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
      </ContactForm>

      <SocialLinks>
        <SocialIcon href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
        <SocialIcon href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialIcon>
      </SocialLinks>
    </ContactContainer>
  );
}

export default Contact;
