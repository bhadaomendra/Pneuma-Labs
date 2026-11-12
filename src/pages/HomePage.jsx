import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';
import EngineeringContrast from '../components/EngineeringContrast';
import FarmingUnits from '../components/FarmingUnits';
import CultivationTraining from '../components/CultivationTraining';
import TelemetryHud from '../components/TelemetryHud';
import ProductRnD from '../components/ProductRnD';
import EcosystemPipeline from '../components/EcosystemPipeline';

function HomePage({ onOpenConsultation }) {
  return (
    <main>
      <HeroSection onOpenConsultation={onOpenConsultation} />
      <FeatureStrip />
      <EngineeringContrast />
      <FarmingUnits onOpenConsultation={onOpenConsultation} />
      <CultivationTraining onOpenConsultation={onOpenConsultation} />
      <TelemetryHud />
      <ProductRnD onOpenConsultation={onOpenConsultation} />
      <EcosystemPipeline />
    </main>
  );
}

export default HomePage;

