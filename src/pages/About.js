import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <h1>{t('aboutMe')}</h1>
      <p>{t('aboutDescription')}</p>
    </div>
  );
}

export default About;
