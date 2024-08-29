import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <h1>{t('contact')}</h1>
      <p>{t('contactIntro')}</p>
      <ul>
        <li>{t('email')}: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
        <li>{t('linkedin')}: <a href="http://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
        <li>{t('github')}: <a href="http://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
      </ul>
    </div>
  );
}

export default Contact;