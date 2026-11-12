import React, { useState } from 'react';
import { MapPin, Phone, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import { CONTACT_INFO, NAV_LINKS } from '../data/pneumaData';

function Navbar({ onOpenConsultation }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (item) => {
    setMobileOpen(false);
    if (item.action === 'contact') {
      onOpenConsultation('General Contact & Inquiry');
    }
  };

  return (
    <>
      <div className="announcement-bar" id="top">
        <div className="announcement-inner">
          <div className="announcement-left">
            <span className="announcement-pill">Turnkey Units &amp; Lab Masterclasses</span>
            <span className="announcement-copy">
              Enrolling Cordyceps Masterclasses &amp; Commissioning Q1–Q2 2026 Modular PUF Facilities
            </span>
          </div>
          <div className="announcement-right">
            <span className="announcement-meta">
              <MapPin size={12} className="announcement-icon" />
              <span>{CONTACT_INFO.address}</span>
            </span>
            <a href={CONTACT_INFO.phoneHref} className="announcement-meta announcement-link">
              <Phone size={12} className="announcement-icon" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="announcement-whatsapp"
            >
              WhatsApp: {CONTACT_INFO.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="header-brand-row">
          <BrandMark />
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="header-divider" />

        <nav className={`header-nav-row ${mobileOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <div className="header-nav-inner">
            <div className="nav-links-group">
              {NAV_LINKS.map((item) =>
                item.action === 'contact' ? (
                  <button
                    key={item.label}
                    type="button"
                    className="nav-link nav-link-btn"
                    onClick={() => handleNavClick(item)}
                  >
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link"
                    onClick={() => handleNavClick(item)}
                  >
                    <span>{item.label}</span>
                    {item.badge && <span className="nav-new-badge">{item.badge}</span>}
                  </a>
                )
              )}
            </div>

            <button
              type="button"
              className="header-cta-btn"
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultation('Book Consultation');
              }}
            >
              Book
              <br />
              Consultation
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

