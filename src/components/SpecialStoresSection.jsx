import React, { useRef } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SpecialStoresSection({ onOpenDetail }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 'business',
      kicker: 'BUSINESS',
      title: 'From enterprise to small business, we’ll work with you.',
      theme: 'dark',
      type: 'business',
      body: 'Whether you’re a company of 10 or 10,000, our dedicated business team offers special volume pricing, trade-in value, and seamless device deployment.',
    },
    {
      id: 'government',
      kicker: 'GOVERNMENT',
      title: 'Special pricing is available for state, local, and federal agencies.',
      theme: 'light',
      type: 'government',
      body: 'Apple provides customized procurement solutions, volume contracts, and security compliance for government agencies at every level.',
    },
    {
      id: 'military',
      kicker: 'VETERANS AND MILITARY',
      title: 'Active and veteran members receive 10% off for military and their families.',
      theme: 'light',
      type: 'military',
      body: 'Apple is proud to offer active military personnel, veterans, and their immediate families a 10% discount on Apple products and accessories.',
    },
  ];

  return (
    <section id="special-stores" className="py-12 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight">
              <span className="text-[#1d1d1f]">Special stores. </span>
              <span className="text-[#6e6e73]">
                Exclusive savings for businesses, the military, and more.
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer shadow-xs"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer shadow-xs"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 scroll-smooth"
        >
          {cards.map((card) => {
            const isDark = card.theme === 'dark';

            return (
              <div
                key={card.id}
                className={`min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 min-h-[480px] group cursor-pointer border shrink-0 ${
                  isDark
                    ? 'bg-[#1d1d1f] text-white border-transparent shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.22)]'
                    : 'bg-white text-[#1d1d1f] border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]'
                }`}
                onClick={() =>
                  onOpenDetail &&
                  onOpenDetail({
                    title: card.title,
                    subtitle: card.kicker,
                    body: card.body,
                    type: 'special',
                  })
                }
              >
                <div>
                  <span
                    className={`text-[12px] font-bold tracking-wider uppercase ${
                      isDark ? 'text-gray-400' : 'text-[#6e6e73]'
                    }`}
                  >
                    {card.kicker}
                  </span>
                  <h3
                    className={`text-[23px] font-bold mt-2 leading-snug ${
                      isDark ? 'text-white' : 'text-[#1d1d1f]'
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                <div className="my-auto py-4 flex items-center justify-center">
                  {card.type === 'business' && (
                    <div className="relative w-36 h-56 rounded-[22px] bg-[#111214] p-1.5 shadow-2xl border border-white/20 group-hover:scale-105 transition duration-300">
                      <div className="w-full h-full rounded-[18px] bg-gradient-to-b from-[#1e1e24] to-[#121216] p-2.5 flex flex-col justify-between text-white">
                        <div className="w-full flex justify-between items-center text-[8px] text-gray-400">
                          <span>iOS POS</span>
                          <span>9:41</span>
                        </div>
                        <div className="space-y-1.5 my-auto">
                          <div className="w-full h-8 rounded-md bg-white/10 p-1 flex items-center justify-between text-[8px]">
                            <span>Revenue</span>
                            <span className="text-emerald-400 font-bold">+24%</span>
                          </div>
                          <div className="w-full h-6 rounded-md bg-white/5 p-1 flex items-center justify-between text-[7px] text-gray-300">
                            <span>Inventory</span>
                            <span>98%</span>
                          </div>
                        </div>
                        <div className="w-16 h-1 bg-white/40 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  )}

                  {card.type === 'government' && (
                    <div className="relative w-36 h-56 rounded-[22px] bg-[#1d1d1f] p-1.5 shadow-xl border border-black/10 group-hover:scale-105 transition duration-300">
                      <div className="w-full h-full rounded-[18px] bg-gradient-to-b from-sky-100 via-white to-blue-50 p-2 flex flex-col justify-between text-[#1d1d1f]">
                        <div className="flex justify-between items-center text-[8px] text-gray-500 font-medium">
                          <span>GOV Portal</span>
                          <span>9:41</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 my-auto">
                          <div className="h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 p-1 flex flex-col justify-center items-center text-[7px] font-semibold text-blue-900">
                            Contracts
                          </div>
                          <div className="h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 p-1 flex flex-col justify-center items-center text-[7px] font-semibold text-emerald-900">
                            Security
                          </div>
                        </div>
                        <div className="w-16 h-1 bg-black/40 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  )}

                  {card.type === 'military' && (
                    <div className="relative w-full max-w-[260px] h-40 flex items-center justify-center group-hover:scale-105 transition duration-300">
                      <div className="absolute -left-2 bottom-4 w-32 h-20 rounded-t-lg bg-gradient-to-tr from-gray-300 to-gray-100 p-1 shadow-lg border border-black/10 flex flex-col justify-between">
                        <div className="w-full h-full bg-[#18181b] rounded-t-sm flex items-center justify-center">
                          <span className="text-[7px] text-white/60">MacBook Air</span>
                        </div>
                      </div>
                      <div className="absolute right-12 bottom-5 w-20 h-28 rounded-xl bg-gradient-to-tr from-gray-200 to-white p-1 shadow-xl border border-black/10 flex items-center justify-center">
                        <div className="w-full h-full bg-[#202024] rounded-lg flex items-center justify-center">
                          <span className="text-[7px] text-white/70">iPad</span>
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-4 w-12 h-22 rounded-xl bg-black p-0.5 shadow-2xl border border-white/20 flex items-center justify-center">
                        <div className="w-full h-full bg-purple-900 rounded-[10px] flex items-center justify-center">
                          <span className="text-[6px] text-purple-200 font-bold">10%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition group-hover:scale-105 cursor-pointer ${
                      isDark
                        ? 'bg-white/20 hover:bg-white/30 text-white'
                        : 'bg-[#1d1d1f] hover:bg-[#333336] text-white'
                    }`}
                    aria-label="Store details"
                  >
                    <Plus className="w-5 h-5" />
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
