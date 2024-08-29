import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/about">{t('aboutMe')}</Link></li>
          <li><Link to="/projects">{t('projects')}</Link></li>
          <li><Link to="/resume">{t('resume')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
        </ul>
        <div>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('es')}>ES</button>
        </div> 
      </nav>
    </header>
  );
}

export default Header;
