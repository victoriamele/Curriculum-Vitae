import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="my-5">
        <div className="p-5 text-center">
          <div className="container py-5">
            <p className="lead">
              {t('welcome')}
            </p>
            <h1 className="text-body-emphasis">MARÍA VICTORIA MELE</h1>
            
            <p className="col-lg-8 mx-auto lead">
              {t('homeIntro')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;