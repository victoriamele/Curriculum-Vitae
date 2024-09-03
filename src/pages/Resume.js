import React from 'react';
import { useTranslation } from 'react-i18next';
import cv from '../assets/CV.pdf'
import IconGrid from '../components/IconGrid';
import Carousel from '../components/Carousel';

function Resume() {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="fw-light">{t('resume')}</h1>
          <p className="col-lg-8 mx-auto fs-5 lead text-body-secondary">{t('resumeDescription')}</p>
          <div className="d-inline-flex gap-2 mb-5">
            {/* Button trigger modal */}
            <button
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill btn-equal"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              {t('viewResume')}
            </button>

            {/* Button for downloading the resume */}
            <button 
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill btn-equal" 
              type="button"
            >
              <a href={cv} download target="_blank" rel="noopener noreferrer">{t('downloadResume')}</a>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{t('resume')}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
              <embed src={cv} type="application/pdf" width="100%" />
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