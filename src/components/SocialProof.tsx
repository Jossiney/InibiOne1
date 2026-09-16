import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface SocialProofProps {
  onCtaClick: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onCtaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentStory = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5DCCF] text-[#223625] text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-[#16A34A]" />
            Prova Social & Vidas Transformadas
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#142618] font-bold leading-tight tracking-tight">
            Vidas reais,{' '}
            <span className="text-[#15803D]">mudanças autênticas</span> e duradouras.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405043] leading-relaxed">
            Mulheres reais que deixaram para trás a culpa e o cansaço diário e hoje
            compartilham o prazer de se sentirem leves, dispostas e confiantes.
          </p>
        </div>

        {/* Quantified Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E3D9CC] text-center shadow-xs">
            <span className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#162719] block mb-1">
              94.7%
            </span>
            <p className="text-xs sm:text-sm text-[#4E5E50] leading-snug">
              Redução marcante do impulso incontrolável por doces e pães na 3ª semana.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E3D9CC] text-center shadow-xs">
            <span className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#162719] block mb-1">
              89.2%
            </span>
            <p className="text-xs sm:text-sm text-[#4E5E50] leading-snug">
              Sentiram alívio expressivo do inchaço e abdômen estufado nos primeiros 10 dias.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E3D9CC] text-center shadow-xs">
            <span className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#162719] block mb-1">
              91.4%
            </span>
            <p className="text-xs sm:text-sm text-[#4E5E50] leading-snug">
              Relatam energia estável ao longo do dia, sem agitação cardíaca ou tremores.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E3D9CC] text-center shadow-xs">
            <span className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#162719] block mb-1">
              +14.800
            </span>
            <p className="text-xs sm:text-sm text-[#4E5E50] leading-snug">
              Frascos enviados em todo o Brasil com 4.9 de 5 estrelas em satisfação.
            </p>
          </div>
        </div>

        {/* Featured Interactive Transformation Showcase */}
        <div className="max-w-4xl mx-auto rounded-[36px] bg-[#FAF8F5] border border-[#E2D7C8] p-6 sm:p-12 shadow-xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Authentic Photograph */}
            <div className="md:col-span-5 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md">
                <img
                  src={currentStory.avatar}
                  alt={currentStory.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152518]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-[#182F1E]/90 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {currentStory.timeUsing}
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#C4881A]">
                    {[...Array(currentStory.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16A34A] bg-[#E3EFE5] px-3 py-1 rounded-full">
                    {currentStory.highlightTag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#C9BEAE] mb-2" />

                <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#152719] mb-3 leading-snug">
                  {currentStory.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#465749] leading-relaxed italic mb-6">
                  {currentStory.quote}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#E5DACD] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#192B1D]">
                    {currentStory.name}, {currentStory.age} anos
                  </h4>
                  <p className="text-xs text-[#6C7D6F] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                    {currentStory.city} • Compra Verificada
                  </p>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-full bg-[#EFE9DD] hover:bg-[#E3D9CC] text-[#223525] transition-colors cursor-pointer"
                    aria-label="Depoimento Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2.5 rounded-full bg-[#1C3322] hover:bg-[#152719] text-white transition-colors cursor-pointer"
                    aria-label="Próximo Depoimento"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini CTA under proof */}
        <div className="text-center mt-12">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1A311F] hover:bg-[#122316] transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            Quero Escrever Minha História de Sucesso
          </button>
        </div>
      </div>
    </section>
  );
};
