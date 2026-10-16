import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function AccessoriesSection({ onOpenDetail }) {
  const scrollRef = useRef(null);

  const [activeSiliconeColor, setActiveSiliconeColor] = useState('#f5d133');
  const [activeLeatherColor, setActiveLeatherColor] = useState('#2e2c3b');

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const siliconeColors = [
    { hex: '#f5d133', name: 'Canary Yellow' },
    { hex: '#ea7358', name: 'Sunglow' },
    { hex: '#637f94', name: 'Sky' },
    { hex: '#5f6f52', name: 'Olive' },
    { hex: '#23252a', name: 'Midnight' },
  ];

  const leatherColors = [
    { hex: '#2e2c3b', name: 'Ink' },
    { hex: '#314438', name: 'Forest Green' },
    { hex: '#684a3b', name: 'Umber' },
    { hex: '#1c1d1f', name: 'Midnight' },
  ];

  return (
    <section id="accessories" className="py-14 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight">
              <span className="text-[#1d1d1f]">Accessories. </span>
              <span className="text-[#6e6e73]">
                Essentials that pair perfectly with your favorite devices.
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer shadow-xs"
              aria-label="Previous accessories"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer shadow-xs"
              aria-label="Next accessories"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Cards Grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 scroll-smooth"
        >
          {/* Card 1: In with the new */}
          <div className="min-w-[300px] md:min-w-[340px] bg-white rounded-[24px] p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 border border-black/[0.04]">
            <div>
              <h3 className="text-[24px] font-bold text-[#1d1d1f] leading-snug">
                In with the new.
              </h3>
              <p className="text-[14px] text-[#6e6e73] mt-2 font-normal">
                Explore all fresh cases, wallets, chargers and more.
              </p>
              <a
                href="#all-accessories"
                className="text-[#0071e3] text-[13px] font-medium hover:underline inline-flex items-center mt-3"
              >
                Shop iPhone accessories <ChevronRight className="w-3.5 h-3.5 ml-0.5 inline" />
              </a>
            </div>

            {/* Visual trio of cases & MagSafe */}
            <div className="my-6 flex items-center justify-center relative h-48">
              {/* Yellow case */}
              <div className="w-20 h-36 rounded-2xl bg-[#f5d133] shadow-md border border-black/5 -rotate-6 transform hover:rotate-0 transition duration-300 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white/60"></div>
              </div>
              {/* Olive case */}
              <div className="w-20 h-36 rounded-2xl bg-[#5f6f52] shadow-lg border border-black/5 -ml-4 z-10 hover:scale-105 transition duration-300 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white/60"></div>
              </div>
              {/* Purple case */}
              <div className="w-20 h-36 rounded-2xl bg-[#715c82] shadow-md border border-black/5 -ml-4 rotate-6 transform hover:rotate-0 transition duration-300 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white/60"></div>
              </div>
            </div>
            <div></div>
          </div>

          {/* Card 2: Silicone Case */}
          <div className="min-w-[280px] md:min-w-[300px] bg-white rounded-[24px] p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 border border-black/[0.04]">
            {/* Swatches */}
            <div className="flex justify-center items-center space-x-1.5 pt-2">
              {siliconeColors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveSiliconeColor(c.hex)}
                  title={c.name}
                  className={`w-3 h-3 rounded-full transition cursor-pointer ${
                    activeSiliconeColor === c.hex
                      ? 'ring-2 ring-offset-2 ring-[#0071e3] scale-110'
                      : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>

            {/* Case Render */}
            <div className="my-6 flex justify-center items-center py-4">
              <div
                className="w-28 h-48 rounded-[24px] shadow-lg transition-all duration-300 p-2 flex flex-col items-center justify-center relative border border-black/5"
                style={{ backgroundColor: activeSiliconeColor }}
              >
                {/* Camera cutout */}
                <div className="absolute top-2 left-2 w-10 h-10 rounded-xl bg-black/15 border border-white/20"></div>
                {/* MagSafe Ring */}
                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>

            {/* Title & Price */}
            <div className="text-center">
              <span className="text-[11px] font-semibold text-[#b64400] uppercase tracking-wide">
                New
              </span>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mt-1 leading-snug">
                iPhone 14 Silicone Case with MagSafe - Canary Yellow
              </h4>
              <p className="text-[14px] font-medium text-[#1d1d1f] mt-2">$49.00</p>
            </div>
          </div>

          {/* Card 3: Leather Case */}
          <div className="min-w-[280px] md:min-w-[300px] bg-white rounded-[24px] p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 border border-black/[0.04]">
            {/* Swatches */}
            <div className="flex justify-center items-center space-x-1.5 pt-2">
              {leatherColors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveLeatherColor(c.hex)}
                  title={c.name}
                  className={`w-3 h-3 rounded-full transition cursor-pointer ${
                    activeLeatherColor === c.hex
                      ? 'ring-2 ring-offset-2 ring-[#0071e3] scale-110'
                      : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>

            {/* Case Render */}
            <div className="my-6 flex justify-center items-center py-4">
              <div
                className="w-28 h-48 rounded-[24px] shadow-lg transition-all duration-300 p-2 flex flex-col items-center justify-center relative border border-black/5"
                style={{ backgroundColor: activeLeatherColor }}
              >
                {/* Camera cutout */}
                <div className="absolute top-2 left-2 w-12 h-12 rounded-xl bg-black/20 border border-white/10"></div>
                {/* MagSafe Ring */}
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>

            {/* Title & Price */}
            <div className="text-center">
              <span className="text-[11px] font-semibold text-[#b64400] uppercase tracking-wide">
                New
              </span>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mt-1 leading-snug">
                iPhone 14 Pro Leather Case with MagSafe - Ink
              </h4>
              <p className="text-[14px] font-medium text-[#1d1d1f] mt-2">$59.00</p>
            </div>
          </div>

          {/* Card 4: 20W Power Adapter */}
          <div className="min-w-[280px] md:min-w-[300px] bg-white rounded-[24px] p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 border border-black/[0.04]">
            <div></div>

            {/* Adapter Render */}
            <div className="my-6 flex justify-center items-center py-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#e6e6e8] shadow-md border border-black/10 flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition">
                <div className="w-7 h-2 rounded-xs bg-[#b3b3b8] mb-1"></div>
                <div className="w-3.5 h-1.5 rounded-full bg-[#1c1c1e] mt-2"></div>
                <span className="text-[8px] text-gray-500 mt-2 font-mono">20W USB-C</span>
              </div>
            </div>

            {/* Title & Price */}
            <div className="text-center">
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mt-1 leading-snug">
                20W USB-C Power Adapter
              </h4>
              <p className="text-[14px] font-medium text-[#1d1d1f] mt-2">$19.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
