import React from 'react';
import { KITS_DATA } from '../data/content';
import { KitOption } from '../types';
import { Check, ShieldCheck, Sparkles, Gift, Truck, ArrowRight } from 'lucide-react';
import { ProductBottle } from './ProductBottle';

interface PricingKitsProps {
  onSelectKit: (kit: KitOption) => void;
}

export const PricingKits: React.FC<PricingKitsProps> = ({ onSelectKit }) => {
  return (
    <section id="kits" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D5] text-[#203623] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            Protocolos Exclusivos
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#142618] font-bold leading-tight tracking-tight">
            Escolha o seu ciclo de{' '}
            <span className="text-[#15803D]">transformação pessoal</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405043] leading-relaxed">
            Recomendamos no mínimo 90 dias (Kit 3) para reprogramação biológica da saciedade e resultados perenes.
            Todos os kits contam com a nossa garantia blindada de 30 dias.
          </p>
        </div>

        {/* 3 Kits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {KITS_DATA.map((kit) => {
            const isPopular = kit.isPopular;

            return (
              <div
                key={kit.id}
                className={`relative rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#1C3221] to-[#122416] text-[#FAF8F5] border-2 border-[#386C43] shadow-2xl scale-[1.02] lg:-translate-y-2'
                    : 'bg-[#F5EFE6] text-[#203423] border border-[#DDD3C3] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Highlight Badge */}
                {kit.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-[#0D2111] text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{kit.badge}</span>
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="text-center pb-4 border-b border-black/10">
                    <span className={`text-xs uppercase tracking-widest font-bold block mb-1 ${isPopular ? 'text-[#86EFAC]' : 'text-[#16A34A]'}`}>
                      Tratamento Para {kit.months} {kit.months === 1 ? 'Mês' : 'Meses'}
                    </span>
                    <h3 className="font-serif-editorial text-2xl font-bold tracking-tight">
                      {kit.title}
                    </h3>
                    <p className={`text-xs mt-1 max-w-xs mx-auto leading-relaxed ${isPopular ? 'text-[#D1E0D3]' : 'text-[#586A5B]'}`}>
                      {kit.subtitle}
                    </p>
                  </div>

                  {/* Bottle Visual Representation */}
                  <div className="py-6 flex items-center justify-center">
                    <div className="flex items-center justify-center -space-x-8">
                      {[...Array(kit.bottles)].map((_, idx) => (
                        <div key={idx} className="transform transition-transform hover:scale-105">
                          <ProductBottle size="sm" showBadge={false} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="text-center pt-2 pb-6">
                    <div className={`text-xs line-through ${isPopular ? 'text-[#A0B5A4]' : 'text-[#7D8E80]'}`}>
                      De R$ {kit.originalPrice},00 por apenas:
                    </div>

                    <div className="mt-1">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-[#86EFAC]' : 'text-[#16A34A]'}`}>
                        12x de
                      </span>
                      <div className="font-serif-editorial text-4xl sm:text-5xl font-extrabold leading-none my-1 tracking-tight">
                        R$ {kit.installmentValue.toFixed(2).replace('.', ',')}
                      </div>
                      <div className={`text-xs ${isPopular ? 'text-[#D1E0D3]' : 'text-[#5A6D5E]'}`}>
                        ou R$ {kit.promoPrice},00 à vista no Pix
                      </div>
                    </div>

                    <div className={`mt-2.5 inline-block text-[11px] font-bold px-3 py-1 rounded-full ${isPopular ? 'bg-white/10 text-[#86EFAC]' : 'bg-[#E3D9CC] text-[#192E1D]'}`}>
                      Você economiza R$ {kit.savings},00
                    </div>
                  </div>

                  {/* Benefits & Included Perks */}
                  <div className={`pt-4 border-t space-y-2.5 text-xs sm:text-sm ${isPopular ? 'border-white/10' : 'border-[#E0D5C5]'}`}>
                    <div className="flex items-center gap-2">
                      <Check className={`w-4 h-4 shrink-0 ${isPopular ? 'text-[#22C55E]' : 'text-[#16A34A]'}`} />
                      <span>{kit.bottles}x Frasco{kit.bottles > 1 ? 's' : ''} Inibe One Original</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Truck className={`w-4 h-4 shrink-0 ${isPopular ? 'text-[#22C55E]' : 'text-[#16A34A]'}`} />
                      <span>
                        {kit.freeShipping ? (
                          <strong>Frete Grátis com Envio Expresso</strong>
                        ) : (
                          'Envio com rastreamento seguro'
                        )}
                      </span>
                    </div>

                    {kit.gifts && kit.gifts.map((gift, gIdx) => (
                      <div key={gIdx} className="flex items-center gap-2">
                        <Gift className={`w-4 h-4 shrink-0 ${isPopular ? 'text-[#22C55E]' : 'text-[#16A34A]'}`} />
                        <span><strong>Bônus:</strong> {gift}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectKit(kit)}
                    className={`w-full py-4 px-6 rounded-full font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 shadow-md cursor-pointer ${
                      isPopular
                        ? 'bg-[#22C55E] hover:bg-[#1CAE52] text-[#0E2012] shadow-lg shadow-[#22C55E]/20 hover:scale-[1.01]'
                        : 'bg-[#1C3221] hover:bg-[#132417] text-white hover:scale-[1.01]'
                    }`}
                  >
                    <span>Garantir Meu Kit Agora</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className={`mt-3 text-center text-[11px] flex items-center justify-center gap-1.5 ${isPopular ? 'text-[#A0B8A4]' : 'text-[#6A7B6D]'}`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Garantia de 30 dias • Compra 100% Segura</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
