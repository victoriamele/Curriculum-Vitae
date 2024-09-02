import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../img/logoAlpha.png';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img width="auto" height="60" src={logo} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">{t('home')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">{t('aboutMe')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">{t('projects')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume">{t('resume')}</Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-secondary me-2" type="button" onClick={() => changeLanguage('en')}>EN</button>
              <button className="btn btn-outline-secondary" type="button" onClick={() => changeLanguage('es')}>ES</button>
            </div>
          </div> 
        </div>     
      </nav>
    </header>
  );
}

export default Header;
