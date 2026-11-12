import React from 'react';
import { Check } from 'lucide-react';
import { FARMING_UNITS } from '../data/pneumaData';

function FarmingUnits({ onOpenConsultation }) {
  return (
    <section className="units-section" id="farming-units">
      <div className="container">
        <div className="section-header-split">
          <div>
            <div className="eyebrow-pill">TURNKEY INFRASTRUCTURE</div>
            <h2 className="section-title">Four Calibrated Farming Units.</h2>
            <p className="section-subtitle-left">
              Choose the capacity that fits your available footprint, capital allocation, and
              desired operational involvement.
            </p>
          </div>

          <div className="split-badges-row">
            <span className="split-badges-label">All units include:</span>
            <span className="info-pill">Buyback Eligible</span>
            <span className="info-pill">PUF Modular</span>
          </div>
        </div>

        <div className="units-grid">
          {FARMING_UNITS.map((unit) => (
            <article
              key={unit.unitCode}
              className={`unit-card ${unit.popular ? 'is-popular' : ''}`}
            >
              {unit.popular && <div className="popular-badge">MOST POPULAR</div>}

              <div className="unit-top-row">
                <span className="unit-code">{unit.unitCode}</span>
                <span className={`unit-tier-pill ${unit.goldTierPill ? 'is-gold' : ''}`}>
                  {unit.tier}
                </span>
              </div>

              <h3 className="unit-title">{unit.title}</h3>
              <p className="unit-subtitle">{unit.subtitle}</p>

              <div className="unit-specs-box">
                {unit.specs.map((spec) => (
                  <div key={spec.label} className="unit-spec-row">
                    <span className="unit-spec-label">{spec.label}</span>
                    <span className={`unit-spec-value ${spec.gold ? 'is-gold' : ''}`}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="unit-features-list">
                {unit.features.map((feat) => (
                  <li key={feat} className="unit-feature-item">
                    <Check size={14} className="unit-check-icon" strokeWidth={2.2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={unit.goldCta ? 'btn-gold-card-cta' : 'btn-outline-card-cta'}
                onClick={() => onOpenConsultation(`${unit.unitCode} — ${unit.title}`)}
              >
                {unit.ctaLabel}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FarmingUnits;

