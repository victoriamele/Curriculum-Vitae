// src/pages/Landing.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logoAlpha.png';

function Landing({ onLanguageSelect }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onLanguageSelect(lng);  // Notify App.js that a language has been selected
    navigate('/');  // Redirect to the home page after selecting the language
  };

  return (
    <div className="landing-page page-content myBackground">
      <div className="my-5">
        <div className="p-4 text-center rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
          <div className="navbar-brand landing-logo">
            <img width="auto" height="80" src={logo} alt="Logo" />
          </div>
          <h1 className="col-lg-8 mx-auto fs-5">Select your language / Selecciona tu idioma</h1>
          <div className="d-inline-flex gap-2 mb-5">
            <div className="language-buttons">
              <button 
                className="btn btn-outline-dark btn-lg px-4 rounded-pill" 
                type="button" 
                onClick={() => changeLanguage('en')}
                >
                English
              </button>
              <button 
                className="btn btn-outline-dark btn-lg px-4 rounded-pill" 
                type="button" 
                onClick={() => changeLanguage('es')}
                >Español
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;