import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Digital-7';
    src: url('/Fonts/digital-7.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Digital-7-Italic';
    src: url('/Fonts/digital-7 (italic).ttf') format('truetype');
    font-style: italic;
  }

  @font-face {
    font-family: 'Digital-7-Mono';
    src: url('/Fonts/digital-7 (mono).ttf') format('truetype');
  }

  @font-face {
    font-family: 'Digital-7-Mono-Italic';
    src: url('/Fonts/digital-7 (mono italic).ttf') format('truetype');
    font-style: italic;
  }

  body {
    font-family: 'Helvetica', sans-serif;
    background-color: #ffffff;
    color: #000000;
    margin: 0;
    padding: 0;
  }

  header, footer {
    background-color: #222222;
    color: #ffffff;
    padding: 20px;
    text-align: center;
  }

  header {
    font-size: 2em;
    font-weight: bold;
  }

  nav a {
    color: #ffffff; /* Color blanco para el texto */
    text-decoration: none; /* Quita el subrayado por defecto */
    margin: 0 10px; /* Márgenes izquierdo y derecho de 10px */
    transition: text-decoration-color 0.3s ease; /* Transición suave para el cambio de color del subrayado */
  }

  nav a:hover {
    text-decoration: underline; /* Subrayado al hacer hover */
    text-decoration-color: #00ff00; /* Color verde para el subrayado */
  }

  main {
    padding: 20px;
    max-width: 100%;
  }

  h2, h3 {
    color: #0f0f0f;
    border-bottom: 2px solid #00ff00;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin: 5px 0;
    padding: 5px 0;
  }

  p strong {
    display: block;
    margin-top: 10px;
    color: #00ff00;
  }

  /* Media Query para dispositivos móviles */
  @media (max-width: 768px) {
    header {
      font-size: 0.9em;
    }

    nav a {
      margin: 0 5px; /* Reducir el espacio entre enlaces */
    }

    main {
      padding: 10px;
    }

    h2, h3 {
      font-size: 1.5em; /* Reducir el tamaño de los títulos */
    }
  }
`;

export default GlobalStyles;
