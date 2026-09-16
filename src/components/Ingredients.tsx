import React, { useState } from 'react';
import { INGREDIENTS_DATA } from '../data/content';
import { ShieldCheck, Check, Sparkles } from 'lucide-react';

export const Ingredients: React.FC = () => {
  const [selectedId, setSelectedId] = useState(INGREDIENTS_DATA[0].id);
  const activeIngredient = INGREDIENTS_DATA.find((i) => i.id === selectedId) || INGREDIENTS_DATA[0];

  return (
    <section id="ingredientes" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D5] text-[#223725] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
            Transparência & Ciência Botânica
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#142618] font-bold leading-tight tracking-tight">
            Bioativos nobres que o seu corpo{' '}
            <span className="text-[#15803D]">reconhece e absorve</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405043] leading-relaxed">
            Nada de substâncias químicas duvidosas, anfetaminas ou laxantes agressivos.
            Uma matriz de alta pureza botânica com sinergia comprovada para o metabolismo feminino.
          </p>
        </div>

        {/* Interactive Dual-Panel Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left List of Ingredients (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {INGREDIENTS_DATA.map((item) => {
              const isActive = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#1C3321] text-white border-[#2A5233] shadow-lg scale-[1.01]'
                      : 'bg-[#F5EFE6] text-[#233527] border-[#E2D8C9] hover:bg-[#EDE5D6]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base leading-tight">
                        {item.name}
                      </h4>
                      <p className={`text-xs italic ${isActive ? 'text-[#86EFAC]' : 'text-[#6C7B6F]'}`}>
                        {item.scientificName}
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-[#22C55E] text-[#122316]' : 'bg-[#DDD3C3] text-[#556658]'}`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Showcase Card (7 cols) */}
          <div className="lg:col-span-7 rounded-[32px] bg-gradient-to-b from-[#FAF6F0] to-[#F3EDE3] border border-[#E1D6C7] p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white">
                <img
                  src={activeIngredient.image}
                  alt={activeIngredient.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#16A34A] block mb-1">
                  Ativo Selecionado
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#152719]">
                  {activeIngredient.name}
                </h3>
                <p className="text-xs sm:text-sm italic text-[#5D6F61]">
                  Nomenclatura Científica: {activeIngredient.scientificName}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5DDCF] text-xs font-semibold text-[#1C3221]">
                  <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                  {activeIngredient.role}
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E3D8C8]">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#637265] mb-1">
                  Mecanismo Biológico no Organismo
                </h4>
                <p className="text-sm sm:text-base text-[#384A3B] leading-relaxed">
                  {activeIngredient.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C3322] text-[#FAF8F5] border border-[#2B5234]">
                <span className="text-xs uppercase tracking-widest font-bold text-[#86EFAC] block mb-1">
                  Benefício Visível Para Você
                </span>
                <p className="text-sm sm:text-base font-medium">
                  {activeIngredient.benefit}
                </p>
              </div>
            </div>

            {/* Clean Formula Credentials */}
            <div className="mt-8 pt-6 border-t border-[#E3D8C8] grid grid-cols-3 gap-2 text-center text-xs font-semibold text-[#485A4B]">
              <div className="p-2 rounded-xl bg-white/60">
                <span className="block text-[#16A34A]">✓</span> Sem Glúten & Lactose
              </div>
              <div className="p-2 rounded-xl bg-white/60">
                <span className="block text-[#16A34A]">✓</span> 100% Notificado Anvisa
              </div>
              <div className="p-2 rounded-xl bg-white/60">
                <span className="block text-[#16A34A]">✓</span> Livre de Estimulantes Sintéticos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
