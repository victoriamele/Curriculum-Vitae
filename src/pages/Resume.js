import React from 'react';
import { useTranslation } from 'react-i18next';
import responsive from '../img/responsiveCertification.png'
import frontend from '../img/frontendCertification.png'
import javascript from '../img/javascriptCertification.png'
import cv from '../assets/CV.pdf'

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
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              {t('viewResume')}
            </button>

            {/* Button for downloading the resume */}
            <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
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

      <div className="container px-4 py-5" id="icon-grid">
    <h2 className="pb-2 border-bottom">Icon grid</h2>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#calendar3"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#home"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#speedometer2"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#toggles2"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#geo-fill"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        {/*<svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#tools"></use></svg>*/}
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>

      {/* Carousel */}
      <div className="carousel-container mx-auto my-4">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={responsive} className="d-block w-100" alt="First slide" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={frontend} className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={javascript} className="d-block w-100" alt="Third slide" />
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
      </div>
    </div>
  );
}

export default Resume;