import React, { useEffect, useState } from 'react';
import { MapPin, MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/pneumaData';

function ConsultationModal({ isOpen, topic, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      'Hello Pneuma Labs!',
      `Inquiry: ${topic || 'Book Consultation'}`,
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      city ? `City: ${city}` : null,
      notes ? `Details: ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
    onClose();
  };

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          aria-label="Close modal"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <div className="eyebrow-pill modal-pill">PNEUMA LABS DESK</div>
        <h3 id="consultation-modal-title" className="modal-title">
          {topic || 'Book Consultation'}
        </h3>
        <p className="modal-subtitle">
          Connect directly with our Mumbai cleanroom engineering &amp; agronomy desk.
        </p>

        <div className="modal-contact-strip">
          <div className="modal-contact-row">
            <MapPin size={14} className="announcement-icon" />
            <span>{CONTACT_INFO.address}</span>
          </div>
          <div className="modal-contact-links">
            <a href={CONTACT_INFO.phoneHref} className="modal-contact-link">
              <Phone size={13} />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="modal-contact-link is-gold"
            >
              <MessageCircle size={13} />
              <span>WhatsApp: {CONTACT_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="modal-field">
            <span>Full Name</span>
            <input
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <div className="modal-field-row">
            <label className="modal-field">
              <span>Phone / WhatsApp</span>
              <input
                type="tel"
                required
                placeholder="+91 98XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label className="modal-field">
              <span>City / State</span>
              <input
                type="text"
                placeholder="e.g. Mumbai, Maharashtra"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>

          <label className="modal-field">
            <span>Notes (Optional)</span>
            <textarea
              rows={3}
              placeholder="Space availability, unit interest, or training batch preference"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>

          <button type="submit" className="btn-gold-card-cta modal-submit-btn">
            Send Inquiry via WhatsApp Desk
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultationModal;

