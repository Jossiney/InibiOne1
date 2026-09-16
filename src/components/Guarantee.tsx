import React from 'react';
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

interface GuaranteeProps {
  onCtaClick: () => void;
}

export const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section id="garantia" className="py-20 md:py-28 bg-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-[36px] bg-[#FAF8F5] border border-[#E3D9CC] p-8 sm:p-14 shadow-xl relative overflow-hidden">
          {/* Subtle gold-green glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Seal Graphic (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#1B3220] via-[#24422B] to-[#122316] border-4 border-[#3D6E47] p-2 flex flex-col items-center justify-center text-white shadow-2xl">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#D8C7A5]/40 pointer-events-none" />
                <ShieldCheck className="w-10 h-10 text-[#22C55E] mb-1" />
                <span className="font-serif-editorial text-2xl font-black leading-none text-[#F4EFE6]">
                  30 DIAS
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#86EFAC] font-bold mt-0.5">
                  Garantia Total
                </span>
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#647667] mt-3">
                Risco Zero Para Você
              </span>
            </div>

            {/* Description & Commitment (8 cols) */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE2D5] text-xs font-semibold text-[#1F3322]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#16A34A]" />
                Compromisso de Confiança Inibe One
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#152719] leading-tight">
                Seu bem-estar em primeiro lugar.{' '}
                <span className="text-[#15803D]">Ou seu dinheiro de volta.</span>
              </h3>

              <p className="text-sm sm:text-base text-[#465749] leading-relaxed">
                Temos convicção na pureza e na potência dos ativos botânicos do Inibe One.
                Por isso, propomos um pacto simples: você tem 30 dias a partir da entrega para experimentar o produto.
              </p>

              <p className="text-sm sm:text-base text-[#465749] leading-relaxed">
                Se dentro desse período você não sentir mais leveza, uma saciedade suave e a diminuição do inchaço,
                basta entrar em contato com nossa equipe pelo suporte. Nós devolvemos 100% do valor pago.
                Sem questionamentos, sem burocracia e sem ressentimentos.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#2F4432]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> Reembolso integral direto na sua conta
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> Suporte acolhedor via WhatsApp e e-mail
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C3221] hover:bg-[#122216] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  <span>Experimentar Sem Nenhum Risco</span>
                  <ArrowRight className="w-4 h-4 text-[#22C55E]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
