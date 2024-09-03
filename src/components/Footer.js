import React from 'react';
import { useTranslation } from 'react-i18next';
import logo2 from '../img/logoAlphaSimple.png';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img width="60" height="auto" src={logo2} alt="Logo" />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 {t('allRightsReserved')}</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://wa.me/+5491135605376" className="text-body-secondary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="mailto:ma.victoria.mele@gmail.com" className="text-body-secondary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-envelope"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://github.com/victoriamele" className="text-body-secondary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;