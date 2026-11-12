import React from 'react';

function PufIsometricDiagram() {
  return (
    <div className="puf-diagram-wrap">
      <svg
        className="puf-diagram-svg"
        viewBox="0 0 420 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="80mm High-Density PUF Cleanroom Architecture Diagram"
      >
        <ellipse cx="210" cy="222" rx="184" ry="26" fill="#F4EFE4" opacity="0.65" />

        {/* Top Isometric Face */}
        <polygon
          points="210,24 374,98 210,172 46,98"
          fill="#FFFFFF"
          stroke="#B58E49"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />

        {/* Left Isometric Side Wall */}
        <polygon
          points="46,98 210,172 210,232 46,158"
          fill="#F6F1E6"
          stroke="#B58E49"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />

        {/* Right Isometric Side Wall */}
        <polygon
          points="210,172 374,98 374,158 210,232"
          fill="#F4EEE1"
          stroke="#B58E49"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />

        {/* Two Recessed Modular Panel Slots Straddling Front-Left Ridge */}
        <polygon
          points="118,116.5 190,149 190,159 118,126.5"
          fill="#FAF6ED"
          stroke="#C29D5B"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <polygon
          points="118,130.5 190,163 190,174 118,141.5"
          fill="#FAF6ED"
          stroke="#C29D5B"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Vertical Dashed Axis Across Roof Peak to Front Corner */}
        <line
          x1="210"
          y1="24"
          x2="210"
          y2="172"
          stroke="#B58E49"
          strokeWidth="2.1"
          strokeDasharray="4.5 4.5"
        />

        {/* Curved Dashed Telemetry Arc */}
        <path
          d="M234 118C272 92 332 98 328 126C325 140 312 148 298 158"
          stroke="#B58E49"
          strokeWidth="2"
          strokeDasharray="4.5 4.5"
          strokeLinecap="round"
        />

        {/* IoT Mesh Node Dot + Label */}
        <circle cx="210" cy="96" r="5.5" fill="#BE944B" />
        <text
          x="222"
          y="96"
          fill="#765620"
          fontFamily="Inter, sans-serif"
          fontSize="11.5"
          fontWeight="600"
        >
          Pneuma IoT Mesh
        </text>
      </svg>

      <div className="puf-envelope-callout">
        <span className="puf-callout-eyebrow">CORE ENVELOPE</span>
        <span className="puf-callout-title">80mm High-Density PUF</span>
      </div>
    </div>
  );
}

export default PufIsometricDiagram;

