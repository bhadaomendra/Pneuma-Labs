import React from 'react';

export function TinctureIllustration() {
  return (
    <svg viewBox="0 0 140 130" className="rnd-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="tinctureLiquid" x1="70" y1="68" x2="70" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5EEDB" />
          <stop offset="100%" stopColor="#EADBC0" />
        </linearGradient>
      </defs>
      {/* Dropper Tip */}
      <rect x="68" y="13" width="4" height="6" rx="1.5" fill="#B58E49" />
      {/* Black Rubber Bulb & Collar */}
      <rect x="65" y="18" width="10" height="8" rx="4" fill="#1F1E1C" />
      <rect x="63.5" y="23" width="13" height="6.5" rx="2" fill="#1F1E1C" />
      {/* Bottle Neck */}
      <path d="M60 32H80L82 37H58L60 32Z" fill="#FCF8EF" stroke="#C5A367" strokeWidth="1.2" />
      {/* Bottle Body */}
      <path
        d="M58 37C55 37 53 40 52.5 45L49 103C48.7 109 52 113 58 113H82C88 113 91.3 109 91 103L87.5 45C87 40 85 37 82 37H58Z"
        fill="#FFFFFF"
        stroke="#B9934F"
        strokeWidth="1.5"
      />
      {/* Amber Liquid Fill */}
      <path
        d="M51.5 68H88.5L90.2 102C90.4 107.2 87.4 111 82 111H58C52.6 111 49.6 107.2 49.8 102L51.5 68Z"
        fill="url(#tinctureLiquid)"
      />
      {/* White Front Label */}
      <rect x="57" y="64" width="26" height="33" rx="3" fill="#FFFFFF" stroke="#E4DAC7" strokeWidth="1" />
      <line x1="63" y1="74" x2="77" y2="74" stroke="#B68F4A" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="63" y1="80" x2="73" y2="80" stroke="#D3C4A8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CoffeeCupIllustration() {
  return (
    <svg viewBox="0 0 140 130" className="rnd-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Three Steam Wisps */}
      <path d="M59 35C57.5 29 61 24 59.5 18" stroke="#D6C4A5" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M70 33C68.5 27 72 22 70.5 16" stroke="#D6C4A5" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M81 35C79.5 29 83 24 81.5 18" stroke="#D6C4A5" strokeWidth="1.4" strokeLinecap="round" />
      {/* Cup Lid */}
      <path
        d="M49 44L53 39H87L91 44H49Z"
        fill="#F4ECDC"
        stroke="#B9934F"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <rect x="47" y="44" width="46" height="4.5" rx="2" fill="#F6EFE2" stroke="#B9934F" strokeWidth="1.4" />
      {/* Cup Body */}
      <path
        d="M50 48.5H90L84.5 101C83.9 106.2 80.5 109 75.5 109H64.5C59.5 109 56.1 106.2 55.5 101L50 48.5Z"
        fill="#FFFFFF"
        stroke="#B9934F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Cup Sleeve */}
      <path
        d="M52.3 67H87.7L86 85H54L52.3 67Z"
        fill="#FAF6ED"
        stroke="#C5A263"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <text
        x="70"
        y="79"
        textAnchor="middle"
        fill="#8E6B2D"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8.5"
        fontWeight="600"
      >
        3-IN-1
      </text>
    </svg>
  );
}

export function PouchIllustration() {
  return (
    <svg viewBox="0 0 140 130" className="rnd-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Tear Notches */}
      <line x1="41" y1="45" x2="45" y2="45" stroke="#B9934F" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="95" y1="45" x2="99" y2="45" stroke="#B9934F" strokeWidth="1.4" strokeLinecap="round" />
      {/* Pouch Silhouette */}
      <path
        d="M49 30H91L95 40L97.5 103C97.7 109.2 93.2 113 87 113H53C46.8 113 42.3 109.2 42.5 103L45 40L49 30Z"
        fill="#FDFBF7"
        stroke="#B9934F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Top Seal Line */}
      <line x1="45.5" y1="38.5" x2="94.5" y2="38.5" stroke="#E4D7BE" strokeWidth="1.2" />
      {/* Center Emblem Circle */}
      <circle cx="70" cy="73" r="14.5" fill="#FCF7EC" stroke="#D1B785" strokeWidth="1.2" />
      {/* Mushroom Silhouette */}
      <path
        d="M61 73.5C61 68.5 65 65.5 70 65.5C75 65.5 79 68.5 79 73.5H61Z"
        fill="#B0873F"
      />
      <rect x="68.2" y="73.5" width="3.6" height="8" rx="1.5" fill="#B0873F" />
    </svg>
  );
}

