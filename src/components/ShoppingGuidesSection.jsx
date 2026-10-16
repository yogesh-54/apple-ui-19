import React, { useRef } from 'react';
import { Plus, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ShoppingGuidesSection({ onOpenDetail }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="shopping-guides" className="py-12 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight">
              <span className="text-[#1d1d1f]">Shopping guides. </span>
              <span className="text-[#6e6e73]">Can't decide? Start here.</span>
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
          {/* Card 1: Compare all models */}
          <div
            className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[480px] group cursor-pointer border border-black/[0.04] shrink-0"
            onClick={() =>
              onOpenDetail &&
              onOpenDetail({
                title: 'Which iPhone is right for you?',
                subtitle: 'COMPARE ALL MODELS',
                body: 'Compare tech specs, cameras, battery life, and size across iPhone 14 Pro, iPhone 14, iPhone 13, and iPhone SE to find your match.',
                type: 'compare',
              })
            }
          >
            <div>
              <span className="text-[12px] font-bold tracking-wider text-[#6e6e73] uppercase">
                COMPARE ALL MODELS
              </span>
              <h3 className="text-[23px] font-bold text-[#1d1d1f] mt-2 leading-snug">
                Which iPhone is right for you?
              </h3>
            </div>

            {/* Two iPhones side by side held in hands */}
            <div className="my-auto py-4 flex items-center justify-center">
              <div className="relative flex items-center justify-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                <div className="w-[105px] h-[175px] rounded-[22px] bg-gradient-to-b from-[#2a1b40] to-[#120822] p-1.5 shadow-xl border border-purple-400/30 flex flex-col justify-between">
                  <div className="w-full flex justify-center">
                    <div className="w-8 h-2 rounded-full bg-black"></div>
                  </div>
                  <div className="text-center text-white/90">
                    <div className="text-[6px] opacity-70">6.1" or 6.7"</div>
                    <div className="text-[10px] font-bold">14 Pro</div>
                  </div>
                  <div className="w-6 h-0.5 bg-white/40 mx-auto rounded-full mb-1"></div>
                </div>

                <div className="w-[100px] h-[168px] rounded-[20px] bg-gradient-to-b from-[#1b324d] to-[#0c1a29] p-1.5 shadow-xl border border-blue-400/30 flex flex-col justify-between">
                  <div className="w-full flex justify-center">
                    <div className="w-9 h-1.5 rounded-b-sm bg-black"></div>
                  </div>
                  <div className="text-center text-white/90">
                    <div className="text-[6px] opacity-70">6.1" or 6.7"</div>
                    <div className="text-[10px] font-bold">iPhone 14</div>
                  </div>
                  <div className="w-6 h-0.5 bg-white/40 mx-auto rounded-full mb-1"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                className="w-9 h-9 rounded-full bg-[#1d1d1f] hover:bg-[#333336] text-white flex items-center justify-center shadow-md transition group-hover:scale-105 cursor-pointer"
                aria-label="Compare iPhones"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 2: Shop with a Specialist over video (Dark Card) */}
          <div
            className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] bg-[#1d1d1f] text-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition-all duration-300 min-h-[480px] group cursor-pointer relative overflow-hidden shrink-0"
            onClick={() =>
              onOpenDetail &&
              onOpenDetail({
                title: 'Shop with a Specialist over video',
                subtitle: 'LIVE SHOPPING SESSION',
                body: 'Connect one-on-one with an Apple Specialist through one-way video. See the products in hand, compare colors, and ask whatever questions you have.',
                type: 'specialist',
              })
            }
          >
            <div>
              <span className="text-[12px] font-bold tracking-wider text-[#ff9f0a] uppercase">
                NEW
              </span>
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mt-1.5 leading-tight">
                Shop with a Specialist over video.
              </h3>
              <p className="text-[13px] text-[#a1a1a6] mt-2 font-normal leading-relaxed">
                Shop one-on-one with a Specialist in a live video session. Browse products, explore features, and ask questions.
              </p>
            </div>

            {/* Video call mockup screen */}
            <div className="my-auto py-2 flex items-center justify-center">
              <div className="relative w-[130px] h-[210px] rounded-[24px] bg-[#111] p-1.5 shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[18px] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=480&q=80"
                    alt="Apple Specialist Live Video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[8px] text-white font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Live Specialist
                  </div>
                  <div className="absolute bottom-2 inset-x-2 p-1 rounded-md bg-black/70 backdrop-blur-md text-[9px] text-center text-white font-medium">
                    Apple Specialist
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md shadow-md transition group-hover:scale-105 cursor-pointer"
                aria-label="Shop with a Specialist"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 3: Watch and Learn */}
          <div
            className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[480px] group cursor-pointer border border-black/[0.04] shrink-0"
            onClick={() =>
              onOpenDetail &&
              onOpenDetail({
                title: 'How to trade in your iPhone',
                subtitle: 'WATCH AND LEARN',
                body: 'Watch this quick video to learn how easy it is to back up your old iPhone, wipe your data securely, and send it in using prepaid packaging.',
                type: 'video',
              })
            }
          >
            <div>
              <span className="text-[12px] font-bold tracking-wider text-[#6e6e73] uppercase">
                WATCH AND LEARN
              </span>
              <h3 className="text-[23px] font-bold text-[#1d1d1f] mt-2 leading-snug">
                How to trade in your iPhone.
              </h3>
              <p className="text-[13px] text-[#0071e3] font-medium mt-2 inline-flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-current" /> Play video (0:47)
              </p>
            </div>

            {/* Video Thumbnail Graphic */}
            <div className="my-auto py-4 flex items-center justify-center">
              <div className="relative w-full max-w-[240px] h-[150px] rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-50 border border-black/10 shadow-md overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&h=260&q=80"
                  alt="Trade-in Video Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <Play className="w-5 h-5 text-[#1d1d1f] fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                className="w-9 h-9 rounded-full bg-[#1d1d1f] hover:bg-[#333336] text-white flex items-center justify-center shadow-md transition group-hover:scale-105 cursor-pointer"
                aria-label="Watch trade in video"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
