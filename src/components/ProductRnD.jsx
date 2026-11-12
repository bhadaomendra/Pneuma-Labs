import React from 'react';
import { RND_PRODUCTS } from '../data/pneumaData';
import {
  CoffeeCupIllustration,
  PouchIllustration,
  TinctureIllustration,
} from './ProductIllustrations';

const ILLUSTRATION_MAP = {
  tinctures: TinctureIllustration,
  coffee: CoffeeCupIllustration,
  byproducts: PouchIllustration,
};

function ProductRnD({ onOpenConsultation }) {
  return (
    <section className="rnd-section" id="product-rd">
      <div className="container">
        <div className="section-header-split rnd-header-split">
          <div>
            <div className="eyebrow-pill">NUTRACEUTICAL &amp; FUNCTIONAL FOOD R&amp;D</div>
            <h2 className="section-title rnd-title">
              Value-added products developed
              <br />
              through the Pnuema ecosystem.
            </h2>
            <p className="section-subtitle-left">
              Transforming high-grade harvests into shelf-stable, high-margin functional consumer
              formulations.
            </p>
          </div>

          <button
            type="button"
            className="btn-b2b-outline"
            onClick={() => onOpenConsultation('B2B & Distribution Inquiry')}
          >
            Inquire for B2B &amp; Distribution
          </button>
        </div>

        <div className="rnd-grid">
          {RND_PRODUCTS.map((product) => {
            const Illustration = ILLUSTRATION_MAP[product.id];
            return (
              <article key={product.id} className="rnd-card">
                <div className="rnd-illustration-frame">
                  <span className="rnd-frame-badge">{product.badge}</span>
                  <Illustration />
                </div>

                <span className="rnd-eyebrow">{product.eyebrow}</span>
                <h3 className="rnd-card-title">{product.title}</h3>
                <p className="rnd-card-desc">{product.description}</p>

                <div className="rnd-card-divider" />

                <div className="rnd-specs">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="rnd-spec-row">
                      <span className="rnd-spec-label">{spec.label}</span>
                      <span className={`rnd-spec-value ${spec.gold ? 'is-gold' : ''}`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={product.goldCta ? 'btn-gold-card-cta' : 'btn-outline-white-cta'}
                  onClick={() => onOpenConsultation(`${product.title} — ${product.ctaLabel}`)}
                >
                  {product.ctaLabel}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductRnD;

