import React from 'react';
import { ChevronRight, MessageSquare, Store } from 'lucide-react';

export default function ShopHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'all-models', label: 'All Models' },
    { id: 'ways-to-save', label: 'Ways to Save' },
    { id: 'shopping-guides', label: 'Shopping Guides' },
    { id: 'setup-and-support', label: 'Setup and Support' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'the-iphone-experience', label: 'The iPhone Experience' },
    { id: 'special-stores', label: 'Special Stores' },
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for sticky navbars
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f5f5f7] pt-12 pb-6 border-b border-[#e5e5ea]/80">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-10">
          <div>
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight text-[#1d1d1f] leading-none">
              Shop iPhone
            </h1>
          </div>

          {/* Right Help Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-10 text-[13px] text-[#1d1d1f]">
            {/* Specialist Help */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Apple Specialist"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="font-normal text-[#1d1d1f]">Need shopping help?</p>
                <a href="#specialist" className="text-[#0071e3] hover:underline font-normal inline-flex items-center">
                  Ask an iPhone Specialist <ChevronRight className="w-3 h-3 ml-0.5 inline" />
                </a>
              </div>
            </div>

            {/* Visit Store */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#1d1d1f] ring-1 ring-black/5">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-7.83-11.9-13.68-25.26-17.55-40.09-3.87-14.82-5.81-28.77-5.81-41.84 0-16.71 4.31-30.49 12.93-41.34 8.62-10.86 19.34-16.44 32.17-16.75 4.58 0 9.87 1.25 15.88 3.75 6 2.5 10.14 3.79 12.43 3.86 2.12-.07 6.35-1.39 12.69-3.97 6.34-2.58 11.75-3.81 16.24-3.69 12.74.63 23.01 5.37 30.82 14.22-11.05 6.72-16.48 16.03-16.29 27.93.2 10.14 4.14 18.57 11.83 25.29 7.69 6.72 16.64 10.45 26.85 11.19-2.19 6.82-4.99 14.07-8.4 21.75zM119.22 31.42c0-7.39 2.65-14.38 7.95-20.97 5.3-6.59 11.86-10.45 19.68-11.58.42 1.48.63 2.94.63 4.38 0 7.42-2.73 14.47-8.19 21.15-5.46 6.68-12.16 10.59-20.1 11.72-.03-1.63.03-3.2.03-4.7z" />
                </svg>
              </div>
              <div>
                <p className="font-normal text-[#1d1d1f]">Visit an Apple Store</p>
                <a href="#stores" className="text-[#0071e3] hover:underline font-normal inline-flex items-center">
                  Find one near you <ChevronRight className="w-3 h-3 ml-0.5 inline" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Nav Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2 -mx-2 px-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1d1d1f] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#1d1d1f] hover:shadow-xs border border-black/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
