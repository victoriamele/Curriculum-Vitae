// src/components/ProjectCards.js

import React from 'react';
import cards from '../cards/Cards';

function ProjectCards() {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cards.map((card, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                />
                <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">{card.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href={card.viewLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
                        View
                      </a>
                      <a href={card.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
