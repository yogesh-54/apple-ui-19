import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ShopHeader from './components/ShopHeader';
import AllModelsSection from './components/AllModelsSection';
import WaysToSaveSection from './components/WaysToSaveSection';
import ShoppingGuidesSection from './components/ShoppingGuidesSection';
import SetupSupportSection from './components/SetupSupportSection';
import AccessoriesSection from './components/AccessoriesSection';
import IPhoneExperienceSection from './components/IPhoneExperienceSection';
import SpecialStoresSection from './components/SpecialStoresSection';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('all-models');
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetail = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-[#0071e3] selection:text-white">
      {/* Global Apple Navbar */}
      <Navbar />

      {/* Main Shop Header & Sticky Filter Nav */}
      <ShopHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="space-y-4">
        {/* All Models Section */}
        <AllModelsSection onOpenDetail={handleOpenDetail} />

        {/* Ways to Save Section */}
        <WaysToSaveSection onOpenDetail={handleOpenDetail} />

        {/* Shopping Guides Section */}
        <ShoppingGuidesSection onOpenDetail={handleOpenDetail} />

        {/* Setup and Support Section */}
        <SetupSupportSection onOpenDetail={handleOpenDetail} />

        {/* Accessories Section */}
        <AccessoriesSection onOpenDetail={handleOpenDetail} />

        {/* The iPhone Experience Section */}
        <IPhoneExperienceSection onOpenDetail={handleOpenDetail} />

        {/* Special Stores Section */}
        <SpecialStoresSection onOpenDetail={handleOpenDetail} />
      </main>

      {/* Apple Footer with Detailed Footnotes and Directory */}
      <Footer />

      {/* Interactive Detail Modal for Buy & Info Cards */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={handleCloseDetail}
        data={modalData}
      />
    </div>
  );
}
