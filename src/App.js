import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Globalstyles';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const lightTheme = {
  bodyBackgroundColor: '#f0f0f0',
  bodyColor: '#333',
  headerFooterBackgroundColor: '#222',
  headerFooterColor: '#fff',
};

const darkTheme = {
  bodyBackgroundColor: '#333',
  bodyColor: '#f0f0f0',
  headerFooterBackgroundColor: '#000',
  headerFooterColor: '#f0f0f0',
};

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <button onClick={toggleTheme} style={{ position: 'fixed', top: '10px', right: '10px' }}>
            Toggle Theme
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
