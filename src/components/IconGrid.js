// src/components/IconGrid.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import icons from '../icons/Icons';

function IconGrid() {
  const { t } = useTranslation();

  return (
    <div className="py-5 bg-body-tertiary">
      <div className="container px-4 py-5" id="icon-grid">
      <h2 className="fw-light border-bottom">{t('skills')}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {icons.map((icon, index) => (
          <div key={index} className="col d-flex align-items-start">
            <img src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
            <div className="container-fluid">
              <h3 className="fw-bold mb-0 fs-4">{icon.name}</h3>
              <p className="lead text-body-secondary">{t(`icons.${icon.key}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default IconGrid;
