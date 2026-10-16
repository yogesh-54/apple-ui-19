import React, { useRef } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SetupSupportSection({ onOpenDetail }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 'esim',
      kicker: 'EASY ACTIVATION',
      title: 'iPhone and eSIM — a nicer, simpler way to connect to your carrier.',
      body: 'With eSIM, you can activate your cellular plan without needing a physical nano-SIM card. Switch carriers, manage multiple numbers, and stay connected while traveling.',
      type: 'esim',
    },
    {
      id: 'quickstart',
      kicker: 'EASY DATA TRANSFER',
      title: 'Use Quick Start to set up and transfer data.',
      desc: 'Move your data to your new iPhone automatically with Quick Start.',
      body: 'Simply bring your old device near your new iPhone to transfer photos, apps, messages, and settings seamlessly over Wi-Fi.',
      type: 'quickstart',
    },
    {
      id: 'personal-setup',
      kicker: 'PERSONAL SETUP',
      title: 'Meet in person or online for 1-on-1 Personal Setup.',
      desc: 'Talk through questions and get hands-on support.',
      body: 'When you purchase a new iPhone, you can schedule a complimentary 30-minute session with an Apple Specialist to get everything set up just how you like.',
      type: 'personal',
    },
  ];

  return (
    <section id="setup-and-support" className="py-12 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight">
              <span className="text-[#1d1d1f]">Setup and support. </span>
              <span className="text-[#6e6e73]">Our Specialists are here for help.</span>
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
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[460px] group cursor-pointer border border-black/[0.04] shrink-0"
              onClick={() =>
                onOpenDetail &&
                onOpenDetail({
                  title: card.title,
                  subtitle: card.kicker,
                  body: card.body,
                  type: 'info',
                })
              }
            >
              <div>
                <span className="text-[12px] font-bold tracking-wider text-[#6e6e73] uppercase">
                  {card.kicker}
                </span>
                <h3 className="text-[22px] font-bold text-[#1d1d1f] mt-2 leading-snug">
                  {card.title}
                </h3>
                {card.desc && (
                  <p className="text-[13px] text-[#6e6e73] mt-2 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                )}
              </div>

              {/* Visual per card */}
              <div className="my-auto py-4 flex items-center justify-center">
                {card.type === 'esim' && (
                  <div className="relative flex items-center justify-center w-full h-40">
                    <div className="absolute left-6 w-20 h-32 rounded-xl bg-purple-900 shadow-md border border-purple-500/30 transform -rotate-12 group-hover:-rotate-8 transition duration-300 flex items-center justify-center">
                      <div className="text-white/40 text-[9px]">eSIM</div>
                    </div>
                    <div className="absolute left-16 w-22 h-34 rounded-xl bg-sky-900 shadow-lg border border-sky-500/30 transform -rotate-3 group-hover:rotate-0 transition duration-300 flex items-center justify-center">
                      <div className="text-white/60 text-[10px] font-medium">Fast</div>
                    </div>
                    <div className="absolute left-28 w-24 h-36 rounded-xl bg-amber-50 shadow-xl border border-amber-200 transform rotate-8 group-hover:rotate-12 transition duration-300 flex flex-col items-center justify-center p-2">
                      <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center text-xs font-bold mb-1">
                        ✓
                      </span>
                      <span className="text-[9px] font-semibold text-gray-700">Connected</span>
                    </div>
                  </div>
                )}

                {card.type === 'quickstart' && (
                  <div className="w-full flex items-center justify-center py-4">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center shadow-inner relative group-hover:scale-105 transition duration-300">
                      <div className="absolute inset-2 border-2 border-dashed border-blue-400/50 rounded-full animate-spin duration-1000"></div>
                      <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {card.type === 'personal' && (
                  <div className="w-full flex items-center justify-center py-2">
                    <div className="relative w-44 h-36 rounded-2xl bg-[#f5f5f7] border border-black/5 p-4 flex flex-col justify-between group-hover:scale-105 transition duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-[#0071e3] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                          1:1
                        </div>
                        <div>
                          <div className="text-[12px] font-bold text-[#1d1d1f]">Personal Setup</div>
                          <div className="text-[10px] text-[#6e6e73]">Online or in store</div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600 shadow-2xs border border-black/5">
                        "We can transfer everything and answer your questions."
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  className="w-9 h-9 rounded-full bg-[#1d1d1f] hover:bg-[#333336] text-white flex items-center justify-center shadow-md transition group-hover:scale-105 cursor-pointer"
                  aria-label="Learn more"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
