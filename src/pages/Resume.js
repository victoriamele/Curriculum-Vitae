import React from 'react';
import { useTranslation } from 'react-i18next';

function Resume() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <h1>{t('resume')}</h1>
      <p>{t('resumeDescription')}</p>
      <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">{t('downloadResume')}</a>
    </div>
  );
}

export default Resume;