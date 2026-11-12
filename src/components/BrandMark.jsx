import React from 'react';

function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="Pneuma Labs Home">
      <svg
        className="brand-emblem"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pneumaCrestGold" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D6B16A" />
            <stop offset="50%" stopColor="#A97F36" />
            <stop offset="100%" stopColor="#6D4D1A" />
          </linearGradient>
        </defs>
        <path
          d="M20.5 11.4A24 24 0 0 1 52.8 43.8"
          stroke="url(#pneumaCrestGold)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M43.5 52.6A24 24 0 0 1 11.2 20.2"
          stroke="url(#pneumaCrestGold)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M32 16C29.8 20.2 24.5 23.6 19 24.4C24.5 24.4 29.2 21.8 32 18.6C34.8 21.8 39.5 24.4 45 24.4C39.5 23.6 34.2 20.2 32 16Z"
          fill="url(#pneumaCrestGold)"
        />
        <path
          d="M32 23.5C28.8 29.8 22.8 34.4 16 36.2C22.2 35.8 27.6 32.8 32 28.4C36.4 32.8 41.8 35.8 48 36.2C41.2 34.4 35.2 29.8 32 23.5Z"
          fill="url(#pneumaCrestGold)"
        />
        <path
          d="M32 32C28 38.8 21.5 43.8 14.5 46C21.2 45.4 27 41.8 32 36.8C37 41.8 42.8 45.4 49.5 46C42.5 43.8 36 38.8 32 32Z"
          fill="url(#pneumaCrestGold)"
        />
        <path d="M32 36.5L30.2 50L32 52L33.8 50L32 36.5Z" fill="url(#pneumaCrestGold)" />
      </svg>
      <span className="brand-wordmark">PNEUMA</span>
      <span className="brand-subword">LABS</span>
    </a>
  );
}

export default BrandMark;

