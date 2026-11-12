import React, { useState } from 'react';
import { TELEMETRY_MODES } from '../data/pneumaData';

function TelemetryHud() {
  const [activeModeId, setActiveModeId] = useState('fruiting');
  const current = TELEMETRY_MODES.find((m) => m.id === activeModeId) || TELEMETRY_MODES[0];

  return (
    <section className="telemetry-section" id="infrastructure-iot">
      <div className="container">
        <div className="section-header-center">
          <div className="eyebrow-pill">CLEANROOM TELEMETRY HUD</div>
          <h2 className="section-title">
            Every variable, monitored.
            <br />
            Every minute, controlled.
          </h2>
          <p className="section-subtitle">
            An integrated sensor mesh sampling temperature, relative humidity, airflow, and CO
            <sub>2</sub> concentration at continuous 1-second intervals.
          </p>
        </div>

        <div className="telemetry-hud-card">
          <div className="telemetry-hud-header">
            <div className="telemetry-chamber-info">
              <div className="telemetry-chamber-row">
                <span className="gold-dot" />
                <h3 className="telemetry-chamber-title">{current.chamber}</h3>
              </div>
              <p className="telemetry-gateway">{current.gateway}</p>
            </div>

            <div className="telemetry-tabs" role="tablist" aria-label="Chamber operating stage">
              {TELEMETRY_MODES.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  role="tab"
                  aria-selected={mode.id === activeModeId}
                  className={`telemetry-tab-btn ${mode.id === activeModeId ? 'is-active' : ''}`}
                  onClick={() => setActiveModeId(mode.id)}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          <div className="telemetry-divider" />

          <div className="telemetry-metrics-grid">
            {current.metrics.map((metric) => (
              <div key={metric.label} className="telemetry-metric-box">
                <span className="telemetry-metric-label">
                  {metric.label === 'CO₂ LEVEL' ? (
                    <>
                      CO<sub>2</sub> LEVEL
                    </>
                  ) : (
                    metric.label
                  )}
                </span>
                <div className="telemetry-metric-reading">
                  <span className="telemetry-metric-value">{metric.value}</span>
                  <span className="telemetry-metric-unit">{metric.unit}</span>
                </div>
                <div className="telemetry-metric-note">
                  <span className="telemetry-note-dot" />
                  <span>{metric.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="telemetry-status-bar">
            <div className="telemetry-status-left">
              <span className="gold-dot" />
              <span>{current.status}</span>
            </div>
            <div className="telemetry-status-right">
              <span>Remote Cloud Control</span>
              <span className="telemetry-status-sep">·</span>
              <span>{current.guard}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TelemetryHud;

