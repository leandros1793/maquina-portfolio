import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    background-color: ${props => props.theme.bodyBackgroundColor || '#ffffff'};
    color: ${props => props.theme.bodyColor || '#000000'};
    margin: 0;
    padding: 0;
  }

  header, footer {
    background-color: ${props => props.theme.headerFooterBackgroundColor || '#222222'};
    color: ${props => props.theme.headerFooterColor || '#ffffff'};
    padding: 20px;
    text-align: center;
  }

  header {
    font-size: 2em;
    font-weight: bold;
    font-family: 'Digital-7'; // Usa Digital-7 en el header
  }

  nav a {
    color: ${props => props.theme.headerFooterColor || '#ffffff'};
    text-decoration: none;
    margin: 0 10px;
    transition: text-decoration-color 0.3s ease;
  }

  nav a:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.headerFooterBackgroundColor || '#00ff00'};
  }

  main {
    padding: 20px;
    max-width: 100%;
  }

  h2, h3 {
    color: ${props => props.theme.bodyColor || '#0f0f0f'};
    border-bottom: 2px solid ${props => props.theme.headerFooterBackgroundColor || '#00ff00'};
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-family: 'Digital-7-Mono'; // Usa Digital-7-Mono en h2 y h3
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
    color: ${props => props.theme.headerFooterBackgroundColor || '#00ff00'};
    font-family: 'Digital-7-Italic'; // Usa Digital-7-Italic en p strong
  }

  @media (max-width: 768px) {
    header {
      font-size: 0.9em;
    }

    nav a {
      margin: 0 5px;
    }

    main {
      padding: 10px;
    }

    h2, h3 {
      font-size: 1.5em;
    }
  }
`;

export default GlobalStyles;
