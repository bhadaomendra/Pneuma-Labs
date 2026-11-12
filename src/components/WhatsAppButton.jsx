import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/pneumaData';

function WhatsAppButton() {
  const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Pneuma Labs! I would like to know more about your Modular PUF Farming Units, Cultivation Training & Buyback Partnerships.'
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-desk-float"
      aria-label="Open Pneuma Labs WhatsApp Desk"
    >
      <MessageCircle size={17} strokeWidth={2.1} />
      <span>WhatsApp Desk</span>
    </a>
  );
}

export default WhatsAppButton;

