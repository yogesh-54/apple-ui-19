import React, { useRef } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function IPhoneExperienceSection({ onOpenDetail }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 'music',
      kicker: 'APPLE MUSIC',
      title: 'Hear who’s next in Spatial Audio.',
      subtitle: 'Over 100 million songs, all in Dolby Atmos.',
      theme: 'dark',
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&h=700&q=80',
      type: 'music',
      body: 'Immerse yourself in dynamic head tracking and sound all around you with Apple Music and Spatial Audio.',
    },
    {
      id: 'fitness',
      kicker: 'APPLE FITNESS+',
      title: 'Get 3 months free when you buy an iPhone.4',
      subtitle: 'From HIIT to Meditation, stay active anytime, anywhere.',
      theme: 'light',
      type: 'fitness',
      body: 'Get 3 months of Apple Fitness+ included with your new iPhone purchase. Stay motivated with world-class trainers.',
    },
    {
      id: 'airpods',
      kicker: 'AIRPODS',
      title: 'Magic runs in the family.',
      subtitle: 'Explore all AirPods models and find the best ones for you.',
      theme: 'light',
      type: 'airpods',
      body: 'Effortless setup, active noise cancellation, and seamless switching across all your Apple devices.',
    },
  ];

  return (
    <section id="the-iphone-experience" className="py-12 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight">
              <span className="text-[#1d1d1f]">The iPhone experience. </span>
              <span className="text-[#6e6e73]">
                Designed to connect with everything Apple.
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
          {/* Card 1: Apple Music (Dark) */}
          <div
            className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.2)] transition-all duration-300 min-h-[480px] relative overflow-hidden group cursor-pointer text-white shrink-0"
            onClick={() =>
              onOpenDetail &&
              onOpenDetail({
                title: 'Hear who’s next in Spatial Audio',
                subtitle: 'APPLE MUSIC',
                body: 'Get 6 months of Apple Music free with your new iPhone. Experience music that moves around you with spatial audio and Dolby Atmos.',
                type: 'music',
              })
            }
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&h=700&q=80"
                alt="Spatial Audio Music"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70"></div>
            </div>

            <div className="z-10">
              <span className="text-[12px] font-bold tracking-wider text-pink-400 uppercase">
                APPLE MUSIC
              </span>
              <h3 className="text-[24px] font-bold text-white mt-1.5 leading-snug">
                Hear who’s next in Spatial Audio.
              </h3>
            </div>

            <div className="flex justify-end pt-4 z-10">
              <button
                className="w-9 h-9 rounded-full bg-white/25 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md shadow-md transition group-hover:scale-105 cursor-pointer"
                aria-label="Apple Music info"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 2: Apple Fitness+ */}
          <div
            className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[480px] group cursor-pointer border border-black/[0.04] shrink-0"
            onClick={() =>
              onOpenDetail &&
              onOpenDetail({
                title: 'Apple Fitness+',
                subtitle: 'GET 3 MONTHS FREE',
                body: 'Apple Fitness+ gives you access to thousands of workouts and meditations led by a diverse team of trainers. Now all you need is iPhone.',
                type: 'fitness',
              })
            }
          >
            <div>
              <span className="text-[12px] font-bold tracking-wider text-[#6e6e73] uppercase">
                APPLE FITNESS+
              </span>
              <h3 className="text-[23px] font-bold text-[#1d1d1f] mt-2 leading-snug">
                Get 3 months free when you buy an iPhone.4
              </h3>
            </div>

            <div className="my-auto py-4 flex items-center justify-center">
              <div className="relative w-full max-w-[260px] h-[140px] rounded-[18px] bg-[#111] p-1.5 shadow-xl border border-black/10 group-hover:scale-105 transition duration-300">
                <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=300&q=80"
                    alt="Fitness+ Workout"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] text-[#ccff00] font-bold">
                    HIIT • 20 MIN
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] text-white">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    142 BPM
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                className="w-9 h-9 rounded-full bg-[#1d1d1f] hover:bg-[#333336] text-white flex items-center justify-center shadow-md transition group-hover:scale-105 cursor-pointer"
                aria-label="Apple Fitness+ info"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 3: AirPods */}
          <div
            className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] max-w-[420px] bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[480px] group cursor-pointer border border-black/[0.04] shrink-0"
            onClick={() =>
              onOpenDetail &&
              onOpenDetail({
                title: 'AirPods',
                subtitle: 'MAGIC RUNS IN THE FAMILY',
                body: 'Experience rich high-fidelity audio, Next-level Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking.',
                type: 'airpods',
              })
            }
          >
            <div>
              <span className="text-[12px] font-bold tracking-wider text-[#6e6e73] uppercase">
                AIRPODS
              </span>
              <h3 className="text-[23px] font-bold text-[#1d1d1f] mt-2 leading-snug">
                Magic runs in the family.
              </h3>
              <p className="text-[13px] text-[#6e6e73] mt-2 font-normal leading-relaxed">
                Explore all AirPods models and find the best ones for you.
              </p>
            </div>

            <div className="my-auto py-4 flex items-center justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center group-hover:scale-105 transition duration-300">
                <div className="w-28 h-20 rounded-[22px] bg-gradient-to-b from-[#ffffff] to-[#e8e8ed] shadow-xl border border-black/10 flex flex-col items-center justify-center relative">
                  <div className="absolute top-5 inset-x-0 h-[1px] bg-black/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mb-1"></div>
                  <div className="absolute -top-4 -left-1 w-6 h-10 rounded-full bg-white shadow-md border border-black/5 -rotate-12"></div>
                  <div className="absolute -top-4 -right-1 w-6 h-10 rounded-full bg-white shadow-md border border-black/5 rotate-12"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                className="w-9 h-9 rounded-full bg-[#1d1d1f] hover:bg-[#333336] text-white flex items-center justify-center shadow-md transition group-hover:scale-105 cursor-pointer"
                aria-label="AirPods info"
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
