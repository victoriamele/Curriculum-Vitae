import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('aboutMe')}</h1>
            <p className="lead text-body-secondary">{t('aboutDescription')}</p>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary rounded-3">
              <h2 className="fw-light border-bottom">{t('interests')}</h2>
              <p className="lead">{t('interestsDescription')}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary rounded-3">
              <h2 className="fw-light border-bottom">{t('contact')}</h2>
              <p className="lead">
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
  );
}

export default About;
