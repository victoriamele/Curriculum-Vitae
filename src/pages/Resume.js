// src/pages/Resume.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import cv from '../assets/CV.pdf'
import IconGrid from '../components/IconGrid';
import Carousel from '../components/Carousel';

function Resume() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('resume')}</h1>
            <p className="lead text-body-secondary">{t('resumeDescription')}</p>
            <div className="d-inline-flex gap-2">
              {/* Button trigger modal */}
              <button
                className="btn btn-outline-secondary rounded-pill btn-equal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                >
                {t('view')}
              </button>
              {/* Button for downloading the resume */}
              <button 
                className="btn btn-outline-secondary rounded-pill btn-equal" 
                type="button"
                >
                <a 
                  href={cv} 
                  download 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  {t('downloadResume')}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div 
        className="modal fade" 
        id="staticBackdrop" 
        tabIndex="-1" 
        aria-labelledby="staticBackdropLabel" 
        aria-hidden="true"
        >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{t('resume')}</h5>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                >
              </button>
            </div>
            <div className="modal-body p-0">
              <embed 
                src={cv} 
                type="application/pdf" 
                width="100%" 
              />
            </div>
          </div>
        </div>
      </div>
      <IconGrid />
      <Carousel />
    </div>
  );
}

export default Resume;