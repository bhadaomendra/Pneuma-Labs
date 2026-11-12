import React from 'react';
import { FAILURE_POINTS, PNEUMA_SOLUTIONS } from '../data/pneumaData';

function EngineeringContrast() {
  return (
    <section className="contrast-section" id="engineering-contrast">
      <div className="container">
        <div className="section-header-center">
          <div className="eyebrow-pill">THE ENGINEERING CONTRAST</div>
          <h2 className="section-title">We replace luck with engineering.</h2>
          <p className="section-subtitle">
            Over 75% of traditional mushroom projects in India fail due to 4 systemic
            environmental and supply chain vulnerabilities.
          </p>
        </div>

        <div className="contrast-grid">
          <div className="contrast-card contrast-card-risk">
            <div className="contrast-card-header">
              <div className="contrast-card-title-wrap">
                <span className="risk-dot" />
                <h3 className="contrast-card-title">Traditional Farming Failure Points</h3>
              </div>
              <span className="risk-pill">UNMITIGATED RISK</span>
            </div>

            <div className="contrast-divider" />

            <div className="contrast-items">
              {FAILURE_POINTS.map((point) => (
                <div key={point.title} className="contrast-item-box">
                  <h4 className="contrast-item-title">{point.title}</h4>
                  <p className="contrast-item-desc">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contrast-card contrast-card-solution">
            <div className="contrast-card-header">
              <div className="contrast-card-title-wrap">
                <span className="gold-dot" />
                <h3 className="contrast-card-title">The Pnuema Solution</h3>
              </div>
              <span className="solution-pill">DETERMINISTIC HARVEST</span>
            </div>

            <div className="contrast-divider" />

            <div className="contrast-items">
              {PNEUMA_SOLUTIONS.map((solution) => (
                <div key={solution.title} className="contrast-item-box is-solution">
                  <h4 className="contrast-item-title">{solution.title}</h4>
                  <p className="contrast-item-desc">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringContrast;

