import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="my-5">
        <div className="p-5 text-center">
          <div className="container py-3">
            <p className="text-body-secondary lead" id="welcome">
              {t('welcome')}
            </p>
            <h1 className="display-1 text-body-emphasis">MARÍA VICTORIA MELE</h1>
            
            <p className="col-lg-8 mx-auto lead fst-italic">
              {t('homeIntro')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;