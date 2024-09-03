import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="page-content">
        <div className="container py-4">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="fw-light">{t('aboutMe')}</h1>
          <p className="col-md-8 fs-4 lead text-body-secondary">
          {t('aboutDescription')}
          </p>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3 fw-light">
            <h2>Change the background</h2>
            <p className="lead">
              Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2 className="fw-light">{t('contact')}</h2>
          <p className="col-md-8 fs-4 lead text-body-secondary">
          {t('contactIntro')}
          </p>
          <ul>
        <li>{t('email')}: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
        <li>{t('linkedin')}: <a href="http://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
        <li>{t('github')}: <a href="http://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
      </ul>
          </div>
        </div>
      </div>
      </div>






      </div>
    </main>
    
  );
}

export default About;
