// src/components/Carousel.js
import React from 'react';
import responsive from '../img/responsiveCertification.png';
import frontend from '../img/frontendCertification.png';
import javascript from '../img/javascriptCertification.png';

function Carousel() {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Certifications</h2>
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

export default Carousel;
