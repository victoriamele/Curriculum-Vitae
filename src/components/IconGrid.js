// IconGrid.js
import React from 'react';
import icons from '../icons/Icons';

function IconGrid() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Professional Skillset</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {icons.map((icon, index) => (
          <div key={index} className="col d-flex align-items-start">
            <img src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{icon.name}</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconGrid;
