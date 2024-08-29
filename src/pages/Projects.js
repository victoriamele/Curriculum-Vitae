import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <h1>{t('projects')}</h1>
      <div className="project">
        <h2>{t('project1Title')}</h2>
        <p>{t('project1Description')}</p>
        <a href="http://link-to-project.com" target="_blank" rel="noopener noreferrer">{t('viewProject')}</a>
      </div>
      <div className="project">
        <h2>{t('project2Title')}</h2>
        <p>{t('project2Description')}</p>
        <a href="http://link-to-project.com" target="_blank" rel="noopener noreferrer">{t('viewProject')}</a>
      </div>
    </div>
  );
}

export default Projects;