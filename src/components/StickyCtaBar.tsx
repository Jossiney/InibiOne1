import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface StickyCtaBarProps {
  onCtaClick: () => void;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#162719]/95 backdrop-blur-md border-t border-[#29452E] py-3 px-4 shadow-2xl transition-all animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left message */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-[#244329] text-[#22C55E] flex items-center justify-center shrink-0 hidden sm:flex">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-white font-serif-editorial text-base sm:text-lg font-bold block leading-none">
              Inibe One • Sua Transformação Começa Hoje
            </span>
            <span className="text-[11px] text-[#9CB5A0] flex items-center gap-1 mt-0.5 justify-center sm:justify-start">
              <ShieldCheck className="w-3 h-3 text-[#22C55E]" />
              Garantia de 30 Dias • Frete Grátis nos kits recomendados
            </span>
          </div>
        </div>

        {/* Right CTA */}
        <div className="w-full sm:w-auto">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#22C55E] hover:bg-[#18A34B] active:scale-[0.98] text-[#0C1F10] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Quero Meu Kit de Leveza</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
