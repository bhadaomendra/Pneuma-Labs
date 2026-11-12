import React from 'react';
import { ECOSYSTEM_STEPS } from '../data/pneumaData';

function EcosystemPipeline() {
  return (
    <section className="ecosystem-section" id="ecosystem">
      <div className="container">
        <div className="section-header-center">
          <div className="eyebrow-pill">FULL LIFECYCLE</div>
          <h2 className="section-title">The 6-Step Ecosystem Pipeline.</h2>
          <p className="section-subtitle">
            From practical training and sterile spawn logistics in cleanrooms to centralized
            processing and guaranteed buyback.
          </p>
        </div>

        <div className="ecosystem-grid">
          {ECOSYSTEM_STEPS.map((step) => (
            <article key={step.code} className="ecosystem-card">
              <span className="ecosystem-code">{step.code}</span>
              <h3 className="ecosystem-title">{step.title}</h3>
              <p className="ecosystem-desc">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EcosystemPipeline;

