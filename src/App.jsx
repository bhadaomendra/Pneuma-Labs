import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import ConsultationModal from './components/ConsultationModal';
import HomePage from './pages/HomePage';

function App() {
  const [modalState, setModalState] = useState({ open: false, topic: 'Book Consultation' });

  const openConsultation = (topic = 'Book Consultation') => {
    setModalState({ open: true, topic });
  };

  const closeConsultation = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

  return (
    <div className="app-root">
      <Navbar onOpenConsultation={openConsultation} />
      <Routes>
        <Route path="/" element={<HomePage onOpenConsultation={openConsultation} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppButton />
      <ConsultationModal
        isOpen={modalState.open}
        topic={modalState.topic}
        onClose={closeConsultation}
      />
    </div>
  );
}

export default App;

