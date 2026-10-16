import React, { useRef } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WaysToSaveSection({ onOpenDetail }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 'trade-in',
      kicker: 'APPLE TRADE IN',
      title: 'Get $200–$650 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1',
      type: 'tradein',
      detailTitle: 'Apple Trade In',
      detailBody: 'Trade in your eligible smartphone for credit toward a new iPhone. It’s good for you and the planet.',
    },
    {
      id: 'carrier-deals',
      kicker: 'CARRIER DEALS AT APPLE',
      title: 'Save up to $1000 on the newest iPhone after trade-in.2',
      type: 'carrier',
      detailTitle: 'Carrier Deals at Apple',
      detailBody: 'Get incredible carrier deals without going to the carrier store. Choose from AT&T, T-Mobile, and Verizon.',
    },
    {
      id: 'apple-card',
      kicker: 'APPLE CARD',
      title: 'Pay 0% APR over 24 months when you choose to check out with Apple Card Monthly Installments.3',
      type: 'applecard',
      detailTitle: 'Apple Card Monthly Installments',
      detailBody: 'Enjoy 0% APR financing on iPhone, plus get 3% Daily Cash back upfront when you buy with Apple Card.',
    },
  ];

  return (
    <section id="ways-to-save" className="py-12 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight">
              <span className="text-[#1d1d1f]">Ways to save. </span>
              <span className="text-[#6e6e73]">Find what works for you.</span>
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
              className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[460px] relative overflow-hidden group cursor-pointer border border-black/[0.04] shrink-0"
              onClick={() =>
                onOpenDetail &&
                onOpenDetail({
                  title: card.detailTitle,
                  subtitle: card.kicker,
                  body: card.detailBody,
                  type: 'info',
                })
              }
            >
              {/* Card Header Content */}
              <div className="z-10">
                <span className="text-[12px] font-bold tracking-wider text-[#6e6e73] uppercase">
                  {card.kicker}
                </span>
                <h3 className="text-[21px] font-bold text-[#1d1d1f] mt-2 leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Graphic Illustration per Card */}
              <div className="my-auto py-6 flex items-center justify-center z-0">
                {card.type === 'tradein' && (
                  <div className="relative w-full max-w-[280px] h-44 flex items-center justify-center">
                    {/* Hand with old phone */}
                    <div className="absolute -left-2 top-4 w-28 h-36 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-2xl p-1.5 shadow-lg transform -rotate-6 group-hover:-rotate-3 transition duration-300 border border-black/5">
                      <div className="w-full h-full bg-[#1c1c1e] rounded-xl flex items-center justify-center">
                        <div className="text-white/60 text-[10px] font-medium">Trade In</div>
                      </div>
                    </div>
                    {/* New iPhone Box & Phone */}
                    <div className="absolute right-0 bottom-2 w-36 h-36 bg-gradient-to-tr from-[#fbfbfd] to-[#e8e8ed] rounded-2xl p-3 shadow-xl transform rotate-3 group-hover:rotate-6 transition duration-300 border border-black/10 flex flex-col items-center justify-center">
                      <div className="w-24 h-28 bg-gradient-to-b from-[#2a1b40] to-[#120822] rounded-xl shadow-md border border-purple-400/30 flex items-center justify-center">
                        <span className="text-purple-300/80 text-[11px] font-semibold">iPhone 14</span>
                      </div>
                    </div>
                  </div>
                )}

                {card.type === 'carrier' && (
                  <div className="w-full flex flex-col items-center justify-center py-4 space-y-6">
                    {/* Carrier Logos */}
                    <div className="flex items-center justify-center space-x-2 text-[#00a8e0]">
                      <svg className="w-7 h-7" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" />
                        <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="currentColor" strokeWidth="8" />
                        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="8" />
                      </svg>
                      <span className="text-[20px] font-black tracking-tight text-[#00a8e0]">AT&T</span>
                    </div>

                    <div className="flex items-center justify-center space-x-1.5 text-[#e20074]">
                      <span className="text-[26px] font-black italic tracking-tighter">T</span>
                      <span className="text-[19px] font-bold tracking-tight">Mobile</span>
                    </div>

                    <div className="flex items-center justify-center space-x-1 text-[#ed0000]">
                      <span className="text-[22px] font-black lowercase tracking-tighter text-[#1d1d1f]">verizon</span>
                      <svg className="w-5 h-5 text-[#ed0000]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>
                )}

                {card.type === 'applecard' && (
                  <div className="relative w-full max-w-[260px] h-38 perspective-500">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#f5f5f7] via-[#fafafa] to-[#ffffff] border border-black/10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] p-5 flex flex-col justify-between transform group-hover:scale-105 group-hover:-rotate-2 transition duration-300">
                      <div className="flex items-center justify-between">
                        <svg className="w-6 h-6 fill-[#1d1d1f]" viewBox="0 0 170 170">
                          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-7.83-11.9-13.68-25.26-17.55-40.09-3.87-14.82-5.81-28.77-5.81-41.84 0-16.71 4.31-30.49 12.93-41.34 8.62-10.86 19.34-16.44 32.17-16.75 4.58 0 9.87 1.25 15.88 3.75 6 2.5 10.14 3.79 12.43 3.86 2.12-.07 6.35-1.39 12.69-3.97 6.34-2.58 11.75-3.81 16.24-3.69 12.74.63 23.01 5.37 30.82 14.22-11.05 6.72-16.48 16.03-16.29 27.93.2 10.14 4.14 18.57 11.83 25.29 7.69 6.72 16.64 10.45 26.85 11.19-2.19 6.82-4.99 14.07-8.4 21.75zM119.22 31.42c0-7.39 2.65-14.38 7.95-20.97 5.3-6.59 11.86-10.45 19.68-11.58.42 1.48.63 2.94.63 4.38 0 7.42-2.73 14.47-8.19 21.15-5.46 6.68-12.16 10.59-20.1 11.72-.03-1.63.03-3.2.03-4.7z" />
                        </svg>
                        <div className="w-7 h-5 rounded-sm bg-gradient-to-r from-amber-200 to-amber-100 border border-amber-300/60 shadow-xs flex items-center justify-center">
                          <div className="w-4 h-3 border border-amber-400/40 rounded-xs"></div>
                        </div>
                      </div>
                      <div className="text-[12px] tracking-wider text-[#6e6e73] font-medium">
                        JOHN APPLESEED
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Plus Button */}
              <div className="flex justify-end pt-4 z-10">
                <button
                  className="w-9 h-9 rounded-full bg-[#1d1d1f] hover:bg-[#333336] text-white flex items-center justify-center shadow-md transition group-hover:scale-105 cursor-pointer"
                  aria-label="More details"
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
