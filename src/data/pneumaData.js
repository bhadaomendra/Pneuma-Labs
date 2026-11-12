export const CONTACT_INFO = {
  address: 'Boston House, Andheri East, Mumbai',
  phoneDisplay: '+91 9326663741',
  phoneHref: 'tel:+919326663741',
  whatsappDisplay: '+91 8779063636',
  whatsappNumber: '918779063636',
};

export const NAV_LINKS = [
  { label: 'Farming Units', href: '#farming-units' },
  { label: 'Cultivation Training', href: '#cultivation-training', badge: 'NEW' },
  { label: 'Infrastructure & IoT', href: '#infrastructure-iot' },
  { label: 'Product R&D', href: '#product-rd' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'About', href: '#engineering-contrast' },
  { label: 'Contact', action: 'contact' },
];

export const SPEC_PUF_METRICS = [
  { value: '±0.5°C', label: 'Thermal Envelope Precision', accent: false },
  { value: '99.4%', label: 'Cleanroom Cycle Success Rate', accent: false },
  { value: '100%', label: 'Guaranteed Buyback Offtake', accent: true },
];

export const FEATURE_STRIP_ITEMS = [
  {
    id: 'envelope',
    title: 'PUF Climate Envelope',
    description: 'Medical-grade insulation removing external weather dependencies.',
  },
  {
    id: 'iot',
    title: 'IoT Telemetry & Automation',
    description: 'Continuous sensor mesh governing CO₂, humidity, and airflow.',
  },
  {
    id: 'training',
    title: 'Cordyceps & Oyster Training',
    description: 'Scientific cleanroom masterclasses with validated SOPs & lab immersion.',
  },
  {
    id: 'buyback',
    title: 'Centralized Buyback Network',
    description: 'Direct absorption into Pnuema processing lines with guaranteed contracts.',
  },
];

export const FAILURE_POINTS = [
  {
    title: '1. Spore & Trichoderma Contamination',
    description:
      'Porous bamboo, thatch, and unsealed shed walls harbor competitive molds that destroy entire fruiting flushes.',
  },
  {
    title: '2. Extreme Subtropical Heat Spikes',
    description:
      'Indian summer temperatures (>38°C) penetrate uninsulated rooms, drying mycelial blocks and aborting pinheads.',
  },
  {
    title: '3. Middleman Exploitation & 48-Hour Spoilage',
    description:
      'Fresh harvests degrade rapidly, forcing growers into severe distress pricing at local vegetable mandis.',
  },
  {
    title: '4. Manual Humidification Errors',
    description:
      'Manual water spraying creates localized puddles, hollow stems, and high bacterial blotch rates.',
  },
];

export const PNEUMA_SOLUTIONS = [
  {
    title: '1. Hermetically Sealed PUF Cleanrooms',
    description:
      'Non-porous, sanitizable walls with positive-pressure HEPA fresh air filtration that blocks airborne spore competitors.',
  },
  {
    title: '2. Autonomous Microclimate Regulation',
    description:
      'Microprocessor chilling and heating loops guarantee exact pinhead initiation thresholds day and night.',
  },
  {
    title: '3. Guaranteed Institutional Buyback Offtake',
    description:
      "Contractual volume guarantees routed into Pnuema's Mumbai processing depot for tinctures, coffee, and drying.",
  },
  {
    title: '4. Ultrasonic Fine-Droplet Mist Injections',
    description:
      'Sub-micron ultrasonic vapor maintains 92% relative humidity without droplets landing on sensitive caps.',
  },
];

export const FARMING_UNITS = [
  {
    unitCode: 'UNIT 01',
    tier: 'STARTER',
    title: 'Starter Unit',
    subtitle: 'Designed for side-income cultivators, basements, and first-time adopters.',
    popular: false,
    goldTierPill: false,
    goldCta: false,
    specs: [
      { label: 'Cycle Yield:', value: '80 – 120 kg', gold: false },
      { label: 'Footprint:', value: '120 – 180 sq.ft', gold: false },
      { label: 'Control:', value: 'Semi-Automated', gold: false },
    ],
    features: [
      'Insulated modular PUF cleanroom',
      'Ultrasonic mist & temp control',
      'Onboarding kit & video SOPs',
      'Guaranteed buyback eligibility',
    ],
    ctaLabel: 'Inquire for Unit 01',
  },
  {
    unitCode: 'UNIT 02',
    tier: 'COMMERCIAL',
    title: 'Commercial Unit',
    subtitle: 'For agri-entrepreneurs, peri-urban farming ventures, and SMB growers.',
    popular: true,
    goldTierPill: true,
    goldCta: true,
    specs: [
      { label: 'Cycle Yield:', value: '400 – 600 kg', gold: false },
      { label: 'Footprint:', value: '400 – 600 sq.ft', gold: true },
      { label: 'Control:', value: 'Full IoT Mesh Stack', gold: false },
    ],
    features: [
      'Automated multi-zone FAE & mist',
      'Naayom IoT cloud telemetry HUD',
      'On-site commissioning & audits',
      'Priority pricing buyback agreement',
    ],
    ctaLabel: 'Inquire for Unit 02',
  },
  {
    unitCode: 'UNIT 03',
    tier: 'FACILITY',
    title: 'Automated Facility',
    subtitle: 'Multi-chamber setup for large-scale production & institutional supply.',
    popular: false,
    goldTierPill: false,
    goldCta: false,
    specs: [
      { label: 'Cycle Yield:', value: '2,000+ kg', gold: false },
      { label: 'Footprint:', value: '1,500 – 4,000 sq.ft', gold: false },
      { label: 'Control:', value: 'Enterprise PLC Nodes', gold: false },
    ],
    features: [
      'Chambered incubation + fruiting',
      '24/7 Remote agronomist surveillance',
      'HVAC chiller loop redundancy',
      'Direct processing hub allocation',
    ],
    ctaLabel: 'Inquire for Unit 03',
  },
  {
    unitCode: 'UNIT 04',
    tier: 'FOCO MODEL',
    title: 'Managed Farming',
    subtitle: 'Franchise-Owned, Company-Operated. 100% turnkey passive asset.',
    popular: false,
    goldTierPill: true,
    goldCta: false,
    specs: [
      { label: 'Operation:', value: '100% Pnuema Run', gold: true },
      { label: 'Owner Role:', value: 'Land / Capital Asset', gold: false },
      { label: 'Settlement:', value: 'Revenue Share', gold: true },
    ],
    features: [
      'Zero daily agricultural labour required',
      'Trained agronomy crew deployment',
      'Automated ledger & cycle reporting',
      'Guaranteed harvest absorption',
    ],
    ctaLabel: 'Inquire for FOCO Model',
  },
];

export const TRAINING_TRACKS = [
  {
    id: 'cordyceps',
    pill: 'ADVANCED BIOTECH LAB',
    category: 'HIGH-VALUE NUTRACEUTICAL',
    title: 'Cordyceps Militaris Cultivation Masterclass',
    description:
      'Master the exact cleanroom protocols required to cultivate pharmaceutical-grade Cordyceps Militaris with maximized cordycepin and adenosine bioactives.',
    steps: [
      {
        num: '1',
        title: 'Cleanroom Spawn & Liquid Culture Prep',
        detail:
          'Petri-dish isolation, sub-culturing vigorous mycelial strains, and liquid broth oxygenation techniques.',
      },
      {
        num: '2',
        title: 'Nutrient Medium Formulation & Autoclaving',
        detail:
          'Calibrating rice grain beds with peptone, dextrose, micronutrients, and pressure-sterilization cycles.',
      },
      {
        num: '3',
        title: 'Photoperiod & Thermal Ramping (18–20°C)',
        detail:
          'Lux spectrum calibration (cold white/blue LED), dark run vs. light stimulation, and pinhead shock ramping.',
      },
      {
        num: '4',
        title: 'Potency Optimization & Clean Dehydration',
        detail:
          'High-cordycepin harvest timing, low-temperature dehydration, moisture testing, and nitrogen barrier packing.',
      },
    ],
    meta: [
      { label: 'BATCH FORMAT', value: '3-Day Lab Immersion', gold: false },
      { label: 'CURRICULUM', value: 'Lab SOP Handbook', gold: false },
      { label: 'COMMERCIAL TRACK', value: 'Buyback Linked', gold: true },
    ],
    ctaLabel: 'Inquire for Cordyceps Training',
  },
  {
    id: 'oyster',
    pill: 'INDUSTRIAL BULK AGRI-SCALE',
    category: 'HIGH VOLUME & BYPRODUCTS',
    title: 'Commercial Oyster Mushroom Cultivation',
    description:
      'Industrialized production methodology covering agricultural substrate preparation, zero-chemical pasteurization, flush scheduling, and value-added byproduct conversion.',
    steps: [
      {
        num: '1',
        title: 'Substrate Selection & Pasteurization',
        detail:
          'Optimal ratios for wheat straw, paddy straw, and sawdust; hot water immersion vs. steam chamber cycles.',
      },
      {
        num: '2',
        title: 'Sterile Bagging, Inoculation & Spawn Run',
        detail:
          'High-speed sterile bag filling, grain spawn distribution, and dark-room incubation (22–25°C).',
      },
      {
        num: '3',
        title: 'PUF-Controlled RH & Fresh Air (FAE) Tuning',
        detail:
          'Ultrasonic mist modulation (85–92% RH) and automated CO₂ evacuation to prevent elongated stems and mold.',
      },
      {
        num: '4',
        title: 'Harvest Cycles & Byproduct Processing',
        detail:
          'Clean cutting techniques, dehydration, conversion into smoked mushroom jerky and seasoning powders.',
      },
    ],
    meta: [
      { label: 'SPECIES FOCUS', value: 'King, Elm & Grey Oyster', gold: false },
      { label: 'TOOLING', value: 'Substrate Yield Calculator', gold: false },
      { label: 'OFFTAKE', value: 'Mandi & Buyback Linked', gold: true },
    ],
    ctaLabel: 'Inquire for Oyster Training',
  },
];

export const TRAINING_HIGHLIGHTS = [
  {
    code: '01 // SOP BLUEPRINTS',
    title: 'Validated SOP Handbooks',
    description:
      'Complete temperature logs, humidity charts, and contamination troubleshooting matrices.',
  },
  {
    code: '02 // VERIFIED GENETICS',
    title: 'Pure High-Vigor Spawn',
    description:
      "Direct priority access to Pneuma Labs' sterile mother cultures and grain master spawn batches.",
  },
  {
    code: '03 // PRACTICAL LAB WORK',
    title: 'Hands-on Lab Immersion',
    description:
      'Train inside operating cleanrooms under laminar airflow hoods, autoclaves, and incubation chambers.',
  },
  {
    code: '04 // OFFTAKE CERTAINTY',
    title: 'Buyback Integration',
    description:
      'Graduates qualifying with verified purity benchmarks are enrolled into our direct buyback routes.',
  },
];

export const TELEMETRY_MODES = [
  {
    id: 'fruiting',
    label: 'Fruiting Room 02',
    chamber: 'Fruiting Chamber 02 — West Hub',
    gateway: 'Cellular Gateway: Online · Zero Packet Loss',
    metrics: [
      { label: 'TEMPERATURE', value: '18.5', unit: '°C', note: 'Target: 18.0°C (Optimal)' },
      { label: 'RELATIVE HUMIDITY', value: '92', unit: '%', note: 'Ultrasonic Mist Active' },
      { label: 'CO₂ LEVEL', value: '778', unit: 'ppm', note: 'FAE Automated Cycle' },
      { label: 'AIR VELOCITY', value: '0.39', unit: 'm/s', note: 'Laminar Flow Steady' },
    ],
    status: 'Chamber in Pinhead Fruiting Phase. Vapor envelope calibrated within ±0.2 RH.',
    guard: 'Contamination Guard: 100%',
  },
  {
    id: 'colonization',
    label: 'Colonization Stage',
    chamber: 'Incubation Chamber 01 — West Hub',
    gateway: 'Cellular Gateway: Online · Zero Packet Loss',
    metrics: [
      { label: 'TEMPERATURE', value: '23.4', unit: '°C', note: 'Target: 23.5°C (Mycelial)' },
      { label: 'RELATIVE HUMIDITY', value: '74', unit: '%', note: 'Dry Envelope Locked' },
      { label: 'CO₂ LEVEL', value: '1,420', unit: 'ppm', note: 'Dark-Run Retention' },
      { label: 'AIR VELOCITY', value: '0.18', unit: 'm/s', note: 'Positive HEPA Pressure' },
    ],
    status: 'Chamber in Dark Colonization Phase. Thermal stability locked within ±0.3°C.',
    guard: 'Contamination Guard: 100%',
  },
  {
    id: 'flush',
    label: 'Flush / Vent Cycle',
    chamber: 'Fruiting Chamber 02 — West Hub',
    gateway: 'Cellular Gateway: Online · Zero Packet Loss',
    metrics: [
      { label: 'TEMPERATURE', value: '17.8', unit: '°C', note: 'Flush Cooling Ramp' },
      { label: 'RELATIVE HUMIDITY', value: '88', unit: '%', note: 'Mist Purging Balanced' },
      { label: 'CO₂ LEVEL', value: '612', unit: 'ppm', note: 'High-Flow FAE Exhaust' },
      { label: 'AIR VELOCITY', value: '0.52', unit: 'm/s', note: 'Active Fresh Air Purge' },
    ],
    status: 'Automated Fresh Air Exchange active. CO₂ purged below 650 ppm threshold.',
    guard: 'Contamination Guard: 100%',
  },
];

export const RND_PRODUCTS = [
  {
    id: 'tinctures',
    badge: 'HPLC TESTED',
    eyebrow: 'R&D PIPELINE 01',
    title: 'Dual-Extracted Tinctures',
    description:
      "Ultrasonic ethanol and hot-water extraction of Lion's Mane (Hericium erinaceus) and Cordyceps militaris, with verified beta-glucan potency.",
    specs: [
      { label: 'Active Spec:', value: '>30% Beta-Glucans', gold: false },
      { label: 'Method:', value: 'Ultrasonic Sonication', gold: true },
    ],
    ctaLabel: 'Request Specifications',
    goldCta: false,
  },
  {
    id: 'coffee',
    badge: 'FMCG READY',
    eyebrow: 'R&D PIPELINE 02',
    title: '3-in-1 Mushroom Coffee Instant Pre-mix',
    description:
      "Single-serve functional morning formulation blending premium Arabica coffee, clean non-dairy creamer, and adaptogenic Lion's Mane & Reishi extracts.",
    specs: [
      { label: 'Serving:', value: 'Single-Serve 18g Sachet', gold: false },
      { label: 'Sensory:', value: 'Smooth Focus, Zero Jitter', gold: true },
    ],
    ctaLabel: 'Request Sample Formulation',
    goldCta: true,
  },
  {
    id: 'byproducts',
    badge: 'CIRCULAR',
    eyebrow: 'R&D PIPELINE 03',
    title: 'Oyster Mushroom By-Products',
    description:
      'Savory smoked mushroom jerky, natural umami seasoning powders, and fortified protein culinary bases produced by upcycling stems and clean secondary cuts.',
    specs: [
      { label: 'By-Product:', value: 'Smoked Jerky & Powder', gold: false },
      { label: 'Nutrient:', value: '24% Digestible Protein', gold: true },
    ],
    ctaLabel: 'Request Commercial Catalog',
    goldCta: false,
  },
];

export const ECOSYSTEM_STEPS = [
  {
    code: '01 // TRAINING & SPAWN',
    title: 'Training & Cultivation Support',
    description:
      'Hands-on SOP training in Cordyceps & Oyster workflows, plus lab-grade mother cultures dispatched directly to farms.',
  },
  {
    code: '02 // CLEANROOM CYCLE',
    title: 'Standardized Quality',
    description:
      'Automated environmental protocols ensure tight cap density, zero pesticide use, and low water weight across every flush.',
  },
  {
    code: '03 // CENTRALIZED HUB',
    title: 'Centralized Processing',
    description:
      'Crops are received at our central Mumbai hub for dehydration grading, moisture analysis, and ultrasonic cleaning.',
  },
  {
    code: '04 // B2B DISTRIBUTION',
    title: 'Market Access',
    description:
      'Routed into pre-negotiated purchase contracts across fine-dining restaurants, five-star hotels, and gourmet supermarkets.',
  },
  {
    code: '05 // FORMULATION',
    title: 'Product R&D Integration',
    description:
      "Surplus flushes and dedicated strains feed directly into Pnuema's functional beverage, coffee pre-mix, and tincture pipelines.",
  },
  {
    code: '06 // FINANCIAL CERTAINTY',
    title: 'Guaranteed Buyback',
    description:
      'Clear, predictable cycle settlements with guaranteed price floors, insulating cultivators from wholesale mandi fluctuations.',
  },
];

