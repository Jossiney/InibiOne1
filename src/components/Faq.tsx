import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D5] text-[#203623] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#16A34A]" />
            Transparência & Cuidado
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#142618] font-bold leading-tight tracking-tight">
            Perguntas frequentes e{' '}
            <span className="text-[#15803D]">respostas sinceras</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405043] leading-relaxed">
            Tudo o que você precisa saber para iniciar o seu tratamento com tranquilidade e segurança absoluta.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E3D9CC] bg-[#F7F2E9] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F2ECE0] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#162719]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#E4D9C8] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1C3321] text-white' : 'text-[#3E5142]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-[#465749] leading-relaxed border-t border-[#E8DFC2] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp support card */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EFE8DC] border border-[#DDD3C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#18311D] text-[#22C55E] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#182A1B]">
                Ainda tem alguma dúvida específica?
              </h4>
              <p className="text-xs text-[#526354]">
                Nossa equipe de consultoras de bem-estar está online no WhatsApp para te acolher.
              </p>
            </div>
          </div>
          <button
            onClick={() => alert('Atendimento personalizado: Nosso time está pronto para orientar a dosagem ideal para o seu perfil!')}
            className="px-5 py-2.5 rounded-full bg-[#1B3220] hover:bg-[#132417] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Falar com Consultora
          </button>
        </div>
      </div>
    </section>
  );
};
