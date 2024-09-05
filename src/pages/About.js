import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="py-5 text-center container">
        <div className="row pt-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('aboutMe')}</h1>
            <p className="lead text-body-secondary">{t('aboutDescription')}</p>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="shadow-sm h-100 p-5 bg-body-tertiary rounded-3">
              <h2 className="fw-light border-bottom">{t('interests')}</h2>
              <p className="lead">{t('interestsDescription')}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shadow-sm h-100 p-5 bg-body-tertiary rounded-3">
              <h2 className="fw-light border-bottom">{t('contact')}</h2>
              <p className="lead">
                {t('contactIntro')}
              </p>
              <div>
                <ul className="list-unstyled">
                  <li className="py-2">
                    <a 
                      href="https://wa.me/+5491135605376" 
                      className="icon-link icon-link-hover link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" 
                      style={{ "--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
                      target="_blank" 
                      rel="noopener noreferrer"
                      >
                      <i className="bi bi-whatsapp"></i>+54 9 11 3560-5376
                    </a>
                  </li>
                  <li className="py-1">
                    <a 
                      href="mailto:ma.victoria.mele@gmail.com" 
                      className="icon-link icon-link-hover link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" 
                      style={{ "--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
                      target="_blank" 
                      rel="noopener noreferrer"
                      >
                      <i className="bi bi-envelope"></i>ma.victoria.mele@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
