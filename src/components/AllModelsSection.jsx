import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IPhoneMockup from './IPhoneMockup';

export default function AllModelsSection({ onOpenDetail }) {
  const scrollRef = useRef(null);

  const [selectedColors, setSelectedColors] = useState({
    pro: { hex: '#4c3f54', name: 'Deep Purple' },
    standard: { hex: '#a0b4c7', name: 'Blue' },
    iphone13: { hex: '#394c38', name: 'Green' },
    se: { hex: '#1d2327', name: 'Midnight' },
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const models = [
    {
      id: 'pro',
      name: 'iPhone 14 Pro & iPhone 14 Pro Max',
      tag: null,
      subtitle: 'The ultimate iPhone.',
      priceMonthly: '$41.62/mo. for 24 mo.',
      priceFull: '$999',
      modelType: 'pro',
      colors: [
        { hex: '#4c3f54', name: 'Deep Purple' },
        { hex: '#f4e8ce', name: 'Gold' },
        { hex: '#f0f2f2', name: 'Silver' },
        { hex: '#403e3d', name: 'Space Black' },
      ],
    },
    {
      id: 'standard',
      name: 'iPhone 14 & iPhone 14 Plus',
      tag: 'NEW',
      subtitle: 'As amazing as ever.',
      priceMonthly: '$33.29/mo. for 24 mo.',
      priceFull: '$799',
      modelType: 'standard',
      colors: [
        { hex: '#a0b4c7', name: 'Blue' },
        { hex: '#e3dbe7', name: 'Purple' },
        { hex: '#f9e479', name: 'Yellow' },
        { hex: '#2c3035', name: 'Midnight' },
        { hex: '#faf6f2', name: 'Starlight' },
        { hex: '#e11c2a', name: '(PRODUCT)RED' },
      ],
    },
    {
      id: 'iphone13',
      name: 'iPhone 13 & iPhone 13 mini',
      tag: null,
      subtitle: 'Serious power. Serious value.',
      priceMonthly: '$24.95/mo. for 24 mo.',
      priceFull: '$599',
      modelType: '13',
      colors: [
        { hex: '#394c38', name: 'Green' },
        { hex: '#fae1dc', name: 'Pink' },
        { hex: '#276787', name: 'Blue' },
        { hex: '#232a31', name: 'Midnight' },
        { hex: '#faf6f2', name: 'Starlight' },
        { hex: '#bf0012', name: '(PRODUCT)RED' },
      ],
    },
    {
      id: 'se',
      name: 'iPhone SE',
      tag: null,
      subtitle: 'Serious power. Serious value.',
      priceMonthly: '$17.87/mo. for 24 mo.',
      priceFull: '$429',
      modelType: 'se',
      colors: [
        { hex: '#1d2327', name: 'Midnight' },
        { hex: '#f0ede6', name: 'Starlight' },
        { hex: '#bf0012', name: '(PRODUCT)RED' },
      ],
    },
  ];

  return (
    <section id="all-models" className="py-14 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight">
              <span className="text-[#1d1d1f]">All Models. </span>
              <span className="text-[#6e6e73]">Take your pick.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer shadow-xs"
              aria-label="Previous models"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer shadow-xs"
              aria-label="Next models"
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
          {models.map((item) => {
            const currentColor = selectedColors[item.id] || item.colors[0];

            return (
              <div
                key={item.id}
                className="min-w-[320px] md:min-w-[360px] bg-white rounded-[24px] p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 border border-black/[0.04]"
              >
                {/* Top Info */}
                <div>
                  <div className="h-6 mb-1">
                    {item.tag && (
                      <span className="text-[12px] font-semibold text-[#b64400] tracking-wide uppercase">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[22px] font-bold text-[#1d1d1f] leading-snug tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] mt-1 font-normal">
                    {item.subtitle}
                  </p>
                </div>

                {/* iPhone Render Mockup */}
                <div className="my-8 flex justify-center items-center py-2">
                  <IPhoneMockup
                    model={item.modelType}
                    color={currentColor.hex}
                    colorName={currentColor.name}
                  />
                </div>

                {/* Color Swatches */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 py-2">
                    {item.colors.map((c) => {
                      const isSelected = currentColor.name === c.name;
                      return (
                        <button
                          key={c.name}
                          onClick={() =>
                            setSelectedColors((prev) => ({
                              ...prev,
                              [item.id]: c,
                            }))
                          }
                          title={c.name}
                          className={`w-3.5 h-3.5 rounded-full transition-all duration-200 cursor-pointer relative ${
                            isSelected
                              ? 'ring-2 ring-offset-2 ring-[#0071e3] scale-110'
                              : 'hover:scale-110 opacity-90'
                          }`}
                          style={{
                            backgroundColor: c.hex,
                            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.25)',
                          }}
                        />
                      );
                    })}
                  </div>
                  <span className="text-[11px] text-[#86868b] mt-1">
                    {currentColor.name}
                  </span>
                </div>

                {/* Pricing & Buy Button */}
                <div className="mt-6 pt-5 border-t border-[#f2f2f5] flex items-center justify-between">
                  <div>
                    <div className="text-[12px] text-[#6e6e73]">
                      From {item.priceFull} or
                    </div>
                    <div className="text-[14px] font-semibold text-[#1d1d1f]">
                      {item.priceMonthly}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      onOpenDetail &&
                      onOpenDetail({
                        title: item.name,
                        subtitle: item.subtitle,
                        price: item.priceFull,
                        monthly: item.priceMonthly,
                        color: currentColor.name,
                        type: 'product',
                      })
                    }
                    className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-150 shadow-sm cursor-pointer"
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
