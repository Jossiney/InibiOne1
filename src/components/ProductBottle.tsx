import React from 'react';
import { Sparkles, ShieldCheck, Leaf } from 'lucide-react';

interface ProductBottleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const ProductBottle: React.FC<ProductBottleProps> = ({
  className = '',
  size = 'md',
  showBadge = true,
}) => {
  const scale = size === 'sm' ? 'scale-75' : size === 'lg' ? 'scale-110' : 'scale-100';

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient warm wellness glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#2E5A36]/30 via-[#E8DCC4]/40 to-[#22C55E]/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Product Composite */}
      <div className={`relative transition-transform duration-500 hover:scale-[1.03] ${scale}`}>
        {/* Soft shadow base */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-44 h-8 bg-[#182319]/25 rounded-[100%] blur-md -z-10" />
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#182319]/40 rounded-[100%] blur-sm -z-10" />

        {/* The Flacon Container */}
        <div className="relative w-52 h-80 rounded-[38px] bg-gradient-to-b from-[#213524] via-[#1A2C1D] to-[#121E14] border border-[#3D5B41]/50 shadow-2xl overflow-hidden flex flex-col items-center">
          {/* Glass light reflection ray (left highlight) */}
          <div className="absolute top-0 left-3 w-3 h-full bg-gradient-to-r from-white/25 via-white/10 to-transparent blur-[1.5px] pointer-events-none" />
          {/* Glass light reflection ray (right subtle rim light) */}
          <div className="absolute top-0 right-3 w-1.5 h-full bg-gradient-to-l from-white/20 via-white/5 to-transparent blur-[1px] pointer-events-none" />

          {/* Luxury Matte Metallic Cap */}
          <div className="relative w-28 h-11 bg-gradient-to-b from-[#3E5540] via-[#2A3F2C] to-[#1D2F1F] rounded-t-xl border-t border-x border-[#5D7A60]/40 shadow-inner flex flex-col justify-between py-1">
            <div className="w-full h-0.5 bg-white/15" />
            <div className="w-full h-[1px] bg-white/10" />
            <div className="w-full h-[1px] bg-white/10" />
            <div className="w-full h-[1px] bg-[#101C12]" />
          </div>

          {/* Neck collar band */}
          <div className="w-24 h-3 bg-gradient-to-r from-[#D8C7A5] via-[#F4E9D3] to-[#C1AF8B] shadow-sm flex items-center justify-center">
            <div className="w-full h-[0.5px] bg-[#8B7855]" />
          </div>

          {/* Minimalist Matte Label */}
          <div className="mt-4 w-[172px] h-[190px] rounded-[18px] bg-[#FAF8F5] p-3 shadow-lg flex flex-col justify-between border border-[#E7DEC8] relative">
            {/* Fine gold border detail */}
            <div className="absolute inset-1 rounded-[14px] border border-[#27402A]/15 pointer-events-none" />

            {/* Top brand icon & category */}
            <div className="text-center pt-1">
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1C2F20] text-[#D8C7A5] mb-1">
                <Leaf className="w-3.5 h-3.5" />
              </div>
              <p className="text-[9px] uppercase tracking-[0.24em] font-semibold text-[#667064]">
                BOTANICAL WELLNESS
              </p>
            </div>

            {/* Main Brand Title */}
            <div className="text-center my-auto">
              <h3 className="font-serif-editorial text-2xl font-bold tracking-tight text-[#16291A] leading-none">
                INIBE ONE
              </h3>
              <div className="w-8 h-[1px] bg-[#22C55E] mx-auto my-1.5" />
              <p className="text-[9.5px] font-medium text-[#415344] tracking-wide">
                Saciedade Inteligente & Leveza
              </p>
            </div>

            {/* Micro specs */}
            <div className="border-t border-[#E3DDD1] pt-1.5 flex items-center justify-between text-[8px] text-[#556457] font-medium">
              <span>60 CÁPSULAS</span>
              <span className="flex items-center gap-0.5 text-[#16A34A] font-semibold">
                <Sparkles className="w-2.5 h-2.5" /> 100% NATURAL
              </span>
            </div>
          </div>

          {/* Bottom base glow */}
          <div className="absolute bottom-2 w-32 h-1 bg-[#22C55E]/20 rounded-full blur-[2px]" />
        </div>

        {/* Floating pill badge */}
        {showBadge && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#1C3322] to-[#122316] text-[#E8DCC4] border border-[#3E6544] shadow-xl px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Fórmula Pura</span>
          </div>
        )}
      </div>
    </div>
  );
};
