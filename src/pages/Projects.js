import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCards from '../components/ProjectCards';

function Projects() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('projects')}</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
      </section>

      <ProjectCards />
    </main>
    
  );
}

export default Projects;