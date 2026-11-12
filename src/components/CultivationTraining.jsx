import React from 'react';
import { Star } from 'lucide-react';
import { TRAINING_HIGHLIGHTS, TRAINING_TRACKS } from '../data/pneumaData';

function CultivationTraining({ onOpenConsultation }) {
  return (
    <section className="training-section" id="cultivation-training">
      <div className="container">
        <div className="section-header-split">
          <div>
            <div className="eyebrow-pill">PROFESSIONAL AGRONOMY &amp; BIOTECH MASTERCLASSES</div>
            <h2 className="section-title">
              Scientific Cultivation Training.
              <br />
              From Sterile Spawn to Scaled Yield.
            </h2>
            <p className="section-subtitle-left">
              Hands-on cleanroom immersion, validated Standard Operating Procedures (SOPs), and
              guaranteed buyback integration for high-value species.
            </p>
          </div>

          <div className="split-badges-row">
            <span className="info-pill">Lab Immersion</span>
            <span className="info-pill">SOP Manuals</span>
            <span className="info-pill is-gold">Buyback Linked</span>
          </div>
        </div>

        <div className="training-cards-grid">
          {TRAINING_TRACKS.map((track) => (
            <article key={track.id} className="training-track-card">
              <div className="training-track-top">
                <span className="training-pill">{track.pill}</span>
                <span className="training-category">{track.category}</span>
              </div>

              <h3 className="training-track-title">{track.title}</h3>
              <p className="training-track-desc">{track.description}</p>

              <div className="training-steps">
                {track.steps.map((step) => (
                  <div key={step.num} className="training-step-box">
                    <span className="training-step-num">{step.num}</span>
                    <div>
                      <h4 className="training-step-title">{step.title}</h4>
                      <p className="training-step-desc">
                        {track.id === 'oyster' && step.num === '3' ? (
                          <>
                            Ultrasonic mist modulation (85–92% RH) and automated CO<sub>2</sub>{' '}
                            evacuation to prevent elongated stems and mold.
                          </>
                        ) : (
                          step.detail
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="training-meta-box">
                {track.meta.map((item) => (
                  <div key={item.label} className="training-meta-col">
                    <span className="training-meta-label">{item.label}</span>
                    <span className={`training-meta-value ${item.gold ? 'is-gold' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="training-divider" />

              <div className="training-cta-row">
                <button
                  type="button"
                  className="btn-gold-card-cta training-primary-cta"
                  onClick={() => onOpenConsultation(track.title)}
                >
                  {track.ctaLabel}
                </button>
                <button
                  type="button"
                  className="btn-curriculum-pdf"
                  onClick={() => onOpenConsultation(`${track.title} — Curriculum PDF`)}
                >
                  Curriculum PDF
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="training-bottom-panel">
          <div className="training-highlights-grid">
            {TRAINING_HIGHLIGHTS.map((item) => (
              <div key={item.code} className="training-highlight-card">
                <span className="training-highlight-code">{item.code}</span>
                <h4 className="training-highlight-title">{item.title}</h4>
                <p className="training-highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="training-bottom-divider" />

          <div className="dual-cert-bar">
            <div className="dual-cert-left">
              <div className="dual-cert-icon-wrap" aria-hidden="true">
                <Star size={16} fill="#B58B42" stroke="#B58B42" />
              </div>
              <div>
                <h4 className="dual-cert-title">
                  Dual Certification: Cordyceps + Oyster Comprehensive Track
                </h4>
                <p className="dual-cert-desc">
                  Combines both advanced biotech lab culturing and industrial bulk farm economics
                  into an intensive 5-day curriculum.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="btn-gold-primary dual-cert-btn"
              onClick={() =>
                onOpenConsultation('Dual Certification: Cordyceps + Oyster Comprehensive Track')
              }
            >
              Inquire for Dual Track
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CultivationTraining;

