import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Landing({ onLanguageSelect }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onLanguageSelect(lng);  // Notify App.js that a language has been selected
    navigate('/');  // Redirect to the home page after selecting the language
  };

  return (
    <div className="landing-page page-content">
      <h1>Select your language / Selecciona tu idioma</h1>
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>
    </div>
  );
}

export default Landing;