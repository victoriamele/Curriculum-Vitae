import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/Landing.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [languageSelected, setLanguageSelected] = useState(false);
  
  // Use process.env.PUBLIC_URL to set the base path dynamically
  const basePath = process.env.PUBLIC_URL || '';

  useEffect(() => {
    const selected = localStorage.getItem('languageSelected');
    if (selected) {
      setLanguageSelected(true);
    }
  }, []);

  const handleLanguageSelection = () => {
    localStorage.setItem('languageSelected', true);
    setLanguageSelected(true);
  };

  return (
    <Router basename={basePath}>
      <div className="app-container">
        <Routes>
          {!languageSelected && (
            <Route path="/" element={<Landing onLanguageSelect={handleLanguageSelection} />} />
          )}
          <Route path="/landing" element={<Landing onLanguageSelect={handleLanguageSelection} />} /> {/* Temporary route */}
          {languageSelected && (
            <>
              <Route path="/" element={<><Header /><main><Home /></main></>} />
              <Route path="/about" element={<><Header /><main><About /></main></>} />
              <Route path="/projects" element={<><Header /><main><Projects /></main></>} />
              <Route path="/resume" element={<><Header /><main><Resume /></main></>} />
              <Route path="/contact" element={<><Header /><main><Contact /></main></>} />
            </>
          )}
        </Routes>
        {languageSelected && <Footer />}
      </div>
    </Router>
  );
}

export default App;

