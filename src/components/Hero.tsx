import React from 'react';
import { ShieldCheck, Star, ArrowRight, CheckCircle2, HeartHandshake, Sparkles, SunMedium } from 'lucide-react';
import { ProductBottle } from './ProductBottle';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5]">
      {/* Subtle organic sunlight radiance background */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#E9DCBF]/40 via-[#22C55E]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#1E3322]/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Proof Pill Header */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ECE4D8]/80 border border-[#D9CEBF] shadow-xs text-xs font-semibold text-[#253929]">
            <div className="flex -space-x-1.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Cliente Inibe One"
                className="w-5 h-5 rounded-full object-cover border border-white"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Cliente Inibe One"
                className="w-5 h-5 rounded-full object-cover border border-white"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Cliente Inibe One"
                className="w-5 h-5 rounded-full object-cover border border-white"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-1 text-[#C4881A]">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-[#324536]">
              Mais de <strong>14.800 mulheres</strong> reencontraram sua leveza
            </span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#142618] font-bold leading-[1.08] tracking-tight mb-6">
              Volte a se sentir{' '}
              <span className="text-[#15803D] relative inline-block underline decoration-[#22C55E]/40 decoration-wavy decoration-2">
                leve, radiante
              </span>{' '}
              e no controle do seu corpo.
            </h1>

            <p className="text-lg sm:text-xl text-[#3E4F42] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal mb-8">
              A fórmula botânica de bem-estar feminino que desacelera o impulso por doces,
              desincha a rotina e devolve a energia estável que você merece —{' '}
              <span className="font-semibold text-[#182B1C]">
                sem dietas punitivas, sem taquicardia e sem efeito sanfona.
              </span>
            </p>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9 text-xs sm:text-sm font-medium text-[#293E2D]">
              <div className="flex items-center gap-1.5 bg-[#EAE2D5]/70 px-3 py-1.5 rounded-full border border-[#D5CAB9]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Saciedade suave e prolongada</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#EAE2D5]/70 px-3 py-1.5 rounded-full border border-[#D5CAB9]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Abdômen visivelmente desinflamado</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#EAE2D5]/70 px-3 py-1.5 rounded-full border border-[#D5CAB9]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Disposição real do amanhecer à noite</span>
              </div>
            </div>

            {/* High Contrast Premium CTA Section */}
            <div className="space-y-3.5 max-w-lg mx-auto lg:mx-0">
              <button
                id="hero-primary-cta"
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#17301E] via-[#1B3A23] to-[#122818] hover:from-[#132819] hover:to-[#0F2013] active:scale-[0.98] transition-all duration-200 shadow-xl hover:shadow-2xl border border-[#3C6443] group cursor-pointer"
              >
                <span>Quero Fazer Parte Dessa Transformação</span>
                <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Reassurance Microcopy */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-[#526355] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  Garantia blindada de 30 dias
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                  Frete Grátis nos kits recomendados
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#16A34A]" />
                  Compra 100% segura e discreta
                </span>
              </div>
            </div>
          </div>

          {/* Integrated Lifestyle Scene + Product Bottle (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            {/* Lifestyle Picture Frame with organic soft rounded corners */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative warm aura glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#22C55E]/15 via-[#DECFB5]/40 to-[#19321E]/15 rounded-[36px] blur-xl -z-10" />

              {/* Main Lifestyle Card */}
              <div className="relative rounded-[32px] overflow-hidden bg-[#FAF6F0] border border-[#E5DDD0] shadow-2xl p-3 sm:p-4">
                {/* Authentic Sunlit Lifestyle Photo: woman stretching in serene morning wellness */}
                <div className="relative h-72 sm:h-80 w-full rounded-[24px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=85"
                    alt="Mulher em rotina matinal leve e energizada"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle warm sunlight gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142317]/80 via-[#142317]/20 to-transparent" />

                  {/* Lifestyle caption bottom overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#86EFAC] font-semibold tracking-wide uppercase mb-0.5">
                      <SunMedium className="w-3.5 h-3.5" />
                      Rotina Leve & Vitalidade
                    </div>
                    <p className="text-sm font-medium text-white/95 leading-snug">
                      Acordar descansada, sem peso na consciência e com a energia renovada.
                    </p>
                  </div>
                </div>

                {/* Overlaid Product Bottle Component with natural perspective */}
                <div className="relative -mt-20 pt-4 pb-2 flex items-center justify-center">
                  <ProductBottle size="md" />
                </div>

                {/* Floating Micro Highlights around bottle */}
                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#EAE3D7]">
                  <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E2DAD0] flex items-center gap-2 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-[#182C1B] text-[#22C55E] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#182B1D] leading-tight">Fome Sob Controle</span>
                      <span className="block text-[10px] text-[#556658]">Zero impulsos às 17h</span>
                    </div>
                  </div>

                  <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E2DAD0] flex items-center gap-2 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-[#182C1B] text-[#22C55E] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#182B1D] leading-tight">Zero Inchaço</span>
                      <span className="block text-[10px] text-[#556658]">Drenagem botânica</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility & Trust Seal Bar */}
        <div className="mt-16 pt-8 border-t border-[#E4DCD0] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#69796C] mb-1">Qualidade Assegurada</span>
            <span className="text-sm sm:text-base font-bold text-[#162719]">Notificado na Anvisa</span>
            <span className="text-xs text-[#79887C]">Conforme RDC 240/2018</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#69796C] mb-1">Pureza Botânica</span>
            <span className="text-sm sm:text-base font-bold text-[#162719]">100% Vegano & Clean</span>
            <span className="text-xs text-[#79887C]">Sem toxinas ou químicos</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#69796C] mb-1">Satisfação Total</span>
            <span className="text-sm sm:text-base font-bold text-[#162719]">30 Dias de Garantia</span>
            <span className="text-xs text-[#79887C]">Risco zero para seu teste</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#69796C] mb-1">Logística Nacional</span>
            <span className="text-sm sm:text-base font-bold text-[#162719]">Entrega Rápida & Segura</span>
            <span className="text-xs text-[#79887C]">Rastreio passo a passo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
