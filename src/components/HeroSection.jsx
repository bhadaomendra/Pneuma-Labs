import React from 'react';
import { ArrowRight } from 'lucide-react';
import PufIsometricDiagram from './PufIsometricDiagram';
import { CONTACT_INFO, SPEC_PUF_METRICS } from '../data/pneumaData';

function HeroSection({ onOpenConsultation }) {
  return (
    <section className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-content">
        <div className="eyebrow-pill">
          Controlled Environment Agriculture &nbsp;·&nbsp; Biotechnology &amp; Infrastructure
        </div>

        <h1 className="hero-title">
          Climate-Controlled
          <br />
          Mushroom Farming
          <br />
          Systems.
        </h1>

        <p className="hero-subtitle">
          Modular PUF panel farming units engineered with IoT automated microclimate control,
          practical cultivation training, value-add product R&amp;D, and guaranteed buyback
          partnerships.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="btn-gold-primary hero-btn"
            onClick={() => onOpenConsultation('Book Consultation')}
          >
            <span>Book Consultation</span>
            <ArrowRight size={15} />
          </button>

          <a href="#farming-units" className="btn-outline-light hero-btn">
            Explore Farming Units
          </a>

          <a href="#cultivation-training" className="btn-outline-cream hero-btn">
            Cultivation Training
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello Pneuma Labs, I would like to connect with the WhatsApp Desk.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="hero-whatsapp-link"
          >
            <span>WhatsApp Desk</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="container spec-puf-wrapper">
        <div className="spec-puf-card">
          <div className="spec-puf-header">
            <div className="spec-puf-code">
              <span className="gold-dot" />
              <span>SPEC-PUF // CALIBRATED CLEANROOM ARCHITECTURE</span>
            </div>
            <div className="spec-puf-origin-pill">Engineered in Mumbai · Vol. 01 – 2026</div>
          </div>

          <div className="spec-puf-divider" />

          <div className="spec-puf-showcase">
            <PufIsometricDiagram />

            <div className="spec-puf-details">
              <div className="spec-detail-box">
                <div className="spec-detail-eyebrow">THERMAL ENVELOPE PRECISION</div>
                <h3 className="spec-detail-title">High-Grade R-Value Polyurethane Core</h3>
                <p className="spec-detail-desc">
                  Shields fruiting flushes from extreme 45°C ambient Indian summer spikes.
                </p>
              </div>

              <div className="spec-detail-box">
                <div className="spec-detail-eyebrow">HYGIENE &amp; CLEANROOM CLASS</div>
                <h3 className="spec-detail-title">Zero Condensation, Sanitizable Interior</h3>
                <p className="spec-detail-desc">
                  Hermetic joints eliminate moisture harboring green mold and spore rot.
                </p>
              </div>
            </div>
          </div>

          <div className="spec-metrics-grid">
            {SPEC_PUF_METRICS.map((metric) => (
              <div key={metric.label} className="spec-metric-card">
                <div className={`spec-metric-value ${metric.accent ? 'is-gold' : ''}`}>
                  {metric.value}
                </div>
                <div className="spec-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

