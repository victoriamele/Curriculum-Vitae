import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="page-content">
        <div className="my-5">
          <div className="p-5 text-center bg-body-tertiary">
            <div className="container py-5">
              <h1 className="text-body-emphasis">{t('aboutMe')}</h1>
              <p className="col-lg-8 mx-auto lead">
                {t('aboutDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="..." className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="..." className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </main>
    
  );
}

export default About;
