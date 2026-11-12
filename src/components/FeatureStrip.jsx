import React from 'react';
import { BookOpen, Cpu, Landmark, ShieldCheck } from 'lucide-react';
import { FEATURE_STRIP_ITEMS } from '../data/pneumaData';

const ICON_MAP = {
  envelope: ShieldCheck,
  iot: Cpu,
  training: BookOpen,
  buyback: Landmark,
};

function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="Core Infrastructure Capabilities">
      <div className="container feature-strip-grid">
        {FEATURE_STRIP_ITEMS.map((item) => {
          const IconComponent = ICON_MAP[item.id];
          return (
            <div key={item.id} className="feature-strip-item">
              <div className="feature-strip-icon-box">
                <IconComponent size={17} strokeWidth={1.7} />
              </div>
              <div className="feature-strip-copy">
                <h3 className="feature-strip-title">{item.title}</h3>
                <p className="feature-strip-desc">
                  {item.id === 'iot' ? (
                    <>
                      Continuous sensor mesh governing CO<sub>2</sub>, humidity, and airflow.
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureStrip;

