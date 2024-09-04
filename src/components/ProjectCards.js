// src/components/ProjectCards.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import cards from '../cards/Cards';

function ProjectCards() {
    const { t } = useTranslation();
  
    return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cards.map((card, index) => (
            <div className="col d-flex align-items-stretch" key={index}>
              <div className="card shadow-sm d-flex flex-column">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{t(`projectsDetails.${card.key}.name`)}</h5>
                  <p className="card-text flex-grow-1">{t(`projectsDetails.${card.key}.description`)}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <a href={card.viewLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
                        {t('view')}
                      </a>
                      {card.codeLink ? (
                        <a
                          href={card.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          {t('code')}
                        </a>
                      ) : (
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          disabled
                        >
                          {t('code')}
                        </button>
                      )}
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
