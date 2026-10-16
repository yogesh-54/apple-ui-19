import React from 'react';
import { X, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function DetailModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-lg bg-white rounded-[28px] p-8 shadow-2xl border border-black/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header kicker */}
        {data.subtitle && (
          <span className="text-[12px] font-bold tracking-wider text-[#6e6e73] uppercase">
            {data.subtitle}
          </span>
        )}

        <h3 className="text-[26px] font-bold text-[#1d1d1f] mt-1.5 leading-snug">
          {data.title}
        </h3>

        {/* Pricing if product */}
        {data.price && (
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-[22px] font-bold text-[#1d1d1f]">{data.price}</span>
            {data.monthly && (
              <span className="text-[14px] text-[#6e6e73]">or {data.monthly}</span>
            )}
          </div>
        )}

        {/* Selected Color indicator if available */}
        {data.color && (
          <div className="mt-2 text-[13px] text-[#1d1d1f] font-medium flex items-center gap-1.5">
            <span>Color:</span>
            <span className="text-[#0071e3]">{data.color}</span>
          </div>
        )}

        {/* Body content */}
        <p className="text-[15px] text-[#515154] mt-4 leading-relaxed font-normal">
          {data.body ||
            'Experience industry-leading performance, stunning Super Retina XDR displays, advanced camera systems with Photonic Engine, Crash Detection, and all-day battery life.'}
        </p>

        {/* Apple Benefits Pills */}
        <div className="mt-6 pt-6 border-t border-[#f2f2f5] grid grid-cols-3 gap-3 text-center">
          <div className="flex flex-col items-center">
            <Truck className="w-5 h-5 text-[#0071e3] mb-1.5" />
            <span className="text-[11px] font-semibold text-[#1d1d1f]">Fast, Free Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <RotateCcw className="w-5 h-5 text-[#0071e3] mb-1.5" />
            <span className="text-[11px] font-semibold text-[#1d1d1f]">Free 14-Day Returns</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 text-[#0071e3] mb-1.5" />
            <span className="text-[11px] font-semibold text-[#1d1d1f]">AppleCare+ Available</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-[14px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              alert('Added to your Bag!');
              onClose();
            }}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-[14px] font-medium shadow-sm transition cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
