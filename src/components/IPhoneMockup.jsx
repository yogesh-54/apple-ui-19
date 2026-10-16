import React from 'react';

export default function IPhoneMockup({
  model = 'pro', // 'pro' | 'standard' | '13' | 'se'
  color = '#4c3f54', // Hex color of chassis
  colorName = 'Deep Purple',
  scale = 1,
}) {
  const isPro = model === 'pro';
  const isStandard = model === 'standard';
  const is13 = model === '13';
  const isSE = model === 'se';

  // Wallpaper gradients matching Apple's official iPhone wallpaper themes
  const getWallpaper = () => {
    if (isPro) {
      if (colorName.includes('Purple')) {
        return 'radial-gradient(ellipse at 50% 30%, #a259ff 0%, #431f6e 40%, #150a26 95%)';
      }
      if (colorName.includes('Gold')) {
        return 'radial-gradient(ellipse at 50% 30%, #ffe099 0%, #8c6a2e 45%, #1f180d 95%)';
      }
      if (colorName.includes('Silver') || colorName.includes('White')) {
        return 'radial-gradient(ellipse at 50% 30%, #e8edf5 0%, #7d8b9e 45%, #181c22 95%)';
      }
      return 'radial-gradient(ellipse at 50% 30%, #68696d 0%, #2f3033 45%, #0d0d0f 95%)';
    }
    if (isStandard) {
      if (colorName.includes('Blue')) {
        return 'linear-gradient(145deg, #a3c9e8 0%, #4578a5 50%, #0d2842 100%)';
      }
      if (colorName.includes('Purple')) {
        return 'linear-gradient(145deg, #e4d7f5 0%, #9b7bc2 50%, #3a1d5e 100%)';
      }
      if (colorName.includes('Yellow')) {
        return 'linear-gradient(145deg, #fef295 0%, #e0ab19 50%, #523a03 100%)';
      }
      if (colorName.includes('Red')) {
        return 'linear-gradient(145deg, #ff6b7b 0%, #c41227 50%, #42040b 100%)';
      }
      if (colorName.includes('Starlight')) {
        return 'linear-gradient(145deg, #fcf8ee 0%, #b8ab8e 50%, #2e281b 100%)';
      }
      return 'linear-gradient(145deg, #404854 0%, #1c222b 60%, #07090d 100%)';
    }
    if (is13) {
      if (colorName.includes('Green')) {
        return 'linear-gradient(145deg, #698263 0%, #2a4025 50%, #0d1a0a 100%)';
      }
      if (colorName.includes('Pink')) {
        return 'linear-gradient(145deg, #fce1df 0%, #d98884 50%, #4a1f1d 100%)';
      }
      return 'linear-gradient(145deg, #32587a 0%, #152e47 50%, #040d17 100%)';
    }
    // SE
    return 'linear-gradient(180deg, #d3202a 0%, #1c1c1e 100%)';
  };

  return (
    <div className="relative w-[280px] h-[220px] flex items-center justify-center select-none group">
      {/* Phone 1: Back View (Slightly tilted behind) */}
      <div
        className="absolute left-[38px] top-[14px] w-[114px] h-[194px] rounded-[24px] p-[2.5px] transition-all duration-500 shadow-xl"
        style={{
          backgroundColor: color,
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(0,0,0,0.18) 100%)`,
          boxShadow: '0 12px 30px -8px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.6)',
          transform: 'translateX(-12px) scale(0.96)',
        }}
      >
        {/* Back Matte Glass Finish */}
        <div 
          className="w-full h-full rounded-[21px] relative overflow-hidden flex flex-col items-center justify-center"
          style={{
            backgroundColor: color,
            backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0.12) 100%)',
          }}
        >
          {/* Subtle Apple Logo on back */}
          <svg className="w-5 h-5 fill-white/40 drop-shadow-sm" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-7.83-11.9-13.68-25.26-17.55-40.09-3.87-14.82-5.81-28.77-5.81-41.84 0-16.71 4.31-30.49 12.93-41.34 8.62-10.86 19.34-16.44 32.17-16.75 4.58 0 9.87 1.25 15.88 3.75 6 2.5 10.14 3.79 12.43 3.86 2.12-.07 6.35-1.39 12.69-3.97 6.34-2.58 11.75-3.81 16.24-3.69 12.74.63 23.01 5.37 30.82 14.22-11.05 6.72-16.48 16.03-16.29 27.93.2 10.14 4.14 18.57 11.83 25.29 7.69 6.72 16.64 10.45 26.85 11.19-2.19 6.82-4.99 14.07-8.4 21.75zM119.22 31.42c0-7.39 2.65-14.38 7.95-20.97 5.3-6.59 11.86-10.45 19.68-11.58.42 1.48.63 2.94.63 4.38 0 7.42-2.73 14.47-8.19 21.15-5.46 6.68-12.16 10.59-20.1 11.72-.03-1.63.03-3.2.03-4.7z" />
          </svg>

          {/* Camera Plateau */}
          {isPro ? (
            /* Triple Pro Camera */
            <div 
              className="absolute top-2 left-2 w-[46px] h-[46px] rounded-[13px] p-1 shadow-md border border-white/20"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Top Lens */}
              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-[#18181a] border border-[#3a3a3c] flex items-center justify-center shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#0a192f] border border-blue-400/40">
                  <div className="w-0.5 h-0.5 rounded-full bg-white/70 ml-0.5 mt-0.5"></div>
                </div>
              </div>
              {/* Bottom Lens */}
              <div className="absolute bottom-1 left-1 w-4 h-4 rounded-full bg-[#18181a] border border-[#3a3a3c] flex items-center justify-center shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#0a192f] border border-blue-400/40">
                  <div className="w-0.5 h-0.5 rounded-full bg-white/70 ml-0.5 mt-0.5"></div>
                </div>
              </div>
              {/* Right Lens */}
              <div className="absolute top-3.5 right-1 w-4 h-4 rounded-full bg-[#18181a] border border-[#3a3a3c] flex items-center justify-center shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#0a192f] border border-blue-400/40">
                  <div className="w-0.5 h-0.5 rounded-full bg-white/70 ml-0.5 mt-0.5"></div>
                </div>
              </div>
              {/* Flash & LiDAR */}
              <div className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-amber-100/90 shadow-sm"></div>
              <div className="absolute bottom-1.5 right-2 w-2 h-2 rounded-full bg-[#101012] border border-white/10"></div>
            </div>
          ) : isSE ? (
            /* Single Camera SE */
            <div className="absolute top-3 left-3 w-5 h-5 rounded-full bg-[#1a1a1c] border border-white/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0b1320] border border-blue-400/30"></div>
            </div>
          ) : (
            /* Dual Diagonal Camera (iPhone 14 / 13) */
            <div 
              className="absolute top-2 left-2 w-[42px] h-[42px] rounded-[12px] p-1 shadow-md border border-white/20"
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Top-Left Lens */}
              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-[#18181a] border border-[#3a3a3c] flex items-center justify-center shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#091524] border border-blue-400/40">
                  <div className="w-0.5 h-0.5 rounded-full bg-white/70 ml-0.5 mt-0.5"></div>
                </div>
              </div>
              {/* Bottom-Right Lens */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#18181a] border border-[#3a3a3c] flex items-center justify-center shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#091524] border border-blue-400/40">
                  <div className="w-0.5 h-0.5 rounded-full bg-white/70 ml-0.5 mt-0.5"></div>
                </div>
              </div>
              {/* Flash */}
              <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-100/90"></div>
            </div>
          )}
        </div>
      </div>

      {/* Phone 2: Front Screen View (Standing in front) */}
      <div
        className="absolute right-[32px] top-[4px] w-[122px] h-[208px] rounded-[26px] p-[2.5px] bg-[#111214] transition-all duration-500 shadow-2xl z-10 group-hover:scale-105"
        style={{
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.15)',
          transform: 'translateX(10px)',
        }}
      >
        {/* Chassis Metal Trim */}
        <div 
          className="w-full h-full rounded-[23px] p-[3px] overflow-hidden relative"
          style={{
            backgroundColor: color,
            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.3) 100%)`,
          }}
        >
          {/* OLED Display Area */}
          <div 
            className="w-full h-full rounded-[20px] relative overflow-hidden flex flex-col justify-between p-2"
            style={{
              background: getWallpaper(),
            }}
          >
            {/* Top Cutout / Dynamic Island */}
            {isPro ? (
              <div className="w-full flex justify-center pt-0.5">
                {/* Dynamic Island Pill */}
                <div className="w-9 h-2.5 rounded-full bg-black flex items-center justify-between px-1 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0a1628] border border-blue-400/40"></div>
                  <div className="w-1 h-1 rounded-full bg-[#0c241a]/60"></div>
                </div>
              </div>
            ) : isSE ? (
              <div className="w-full flex justify-center pt-1">
                <div className="w-5 h-1 rounded-full bg-black/80"></div>
              </div>
            ) : (
              <div className="w-full flex justify-center">
                {/* Notch */}
                <div className="w-10 h-2 bg-black rounded-b-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0a1628] border border-blue-400/40"></div>
                </div>
              </div>
            )}

            {/* Lockscreen Elements: Time & Date */}
            <div className="text-center text-white/90 drop-shadow mt-1">
              <div className="text-[7px] font-medium tracking-tight opacity-80">Wednesday, Sep 7</div>
              <div className="text-[20px] font-bold leading-tight tracking-tight">9:41</div>
            </div>

            {/* Bottom Lockscreen Torch & Camera Shortcuts */}
            <div className="flex items-center justify-between px-1 mb-1">
              <div className="w-4 h-4 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
              </div>
              {/* Home indicator bar */}
              <div className="w-7 h-0.5 rounded-full bg-white/70"></div>
              <div className="w-4 h-4 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                <div className="w-2 h-1.5 border border-white/80 rounded-sm"></div>
              </div>
            </div>

            {/* Subtle Screen Glass Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
