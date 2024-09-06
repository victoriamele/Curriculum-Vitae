// src/pages/Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCards from '../components/ProjectCards';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto mb-lg-4">
            <h1 className="fw-light">{t('projectsTitle')}</h1>
            <p className="lead text-body-secondary">{t('projectsSubtitle')}</p>
          </div>
        </div>
      </div>
      <ProjectCards />
    </div>
  );
}

export default Projects;