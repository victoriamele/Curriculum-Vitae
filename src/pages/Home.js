import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
        <h1>{t('welcome')}</h1>
        <p>{t('homeIntro')}</p>
    </div>
  );
}

export default Home;