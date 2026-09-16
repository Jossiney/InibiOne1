import React from 'react';
import { X, Check, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  onCtaClick: () => void;
}

export const BeforeAfterMindset: React.FC<BeforeAfterProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#17301E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D5] text-[#243727] text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-[#16A34A]" />
            O Fim do Ciclo Vicioso
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#142618] font-bold leading-tight tracking-tight">
            Chega de travar uma{' '}
            <span className="text-[#15803D]">batalha diária</span> contra o espelho.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405043] leading-relaxed">
            A sensação de cansaço não vem apenas dos quilinhos a mais. Ela vem da culpa a cada refeição,
            da dependência do açúcar no fim da tarde e de adiar a sua própria felicidade.
          </p>
        </div>

        {/* Dual Reality Emotional Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Reality 1: The Frustrating Cycle */}
          <div className="rounded-[28px] bg-[#EFE9DF] border border-[#DDD5C8] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Photo representation */}
              <div className="relative h-56 rounded-2xl overflow-hidden mb-6 filter saturate-75">
                <img
                  src="https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=800&q=80"
                  alt="Mulher sentindo frustração e cansaço"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262C27]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs uppercase tracking-widest font-bold text-white/90 bg-[#363E38]/90 px-3 py-1 rounded-full">
                  O Ciclo que te Esgota
                </span>
              </div>

              <h3 className="font-serif-editorial text-2xl font-bold text-[#202722] mb-4">
                Quando a rotina parece um fardo constante:
              </h3>

              <ul className="space-y-3.5 text-sm sm:text-base text-[#4D5850]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D1C6B4] text-[#714D4D] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Fome emocional incontrolável:</strong> o impulso cego por pães e doces quando a ansiedade ou o estresse do dia apertam.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D1C6B4] text-[#714D4D] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Inchaço e peso constante:</strong> acordar já com a sensação de retenção que incomoda ao vestir a roupa de trabalho.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D1C6B4] text-[#714D4D] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Restrições agressivas e punitivas:</strong> passar fome com dietas insustentáveis que só geram mais efeito rebote e mau humor.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D1C6B4] text-[#714D4D] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Fuga de fotos e espelhos:</strong> escolher roupas largas e escuras apenas para esconder o próprio corpo.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#DDD3C3] text-xs text-[#6F7B71] italic">
              “Não precisa ser um sacrifício permanente para você voltar a se amar.”
            </div>
          </div>

          {/* Reality 2: The New Horizon with Inibe One */}
          <div className="rounded-[28px] bg-gradient-to-b from-[#1C3221] to-[#122316] text-[#FAF8F5] border border-[#2B4E33] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#22C55E]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Photo representation */}
              <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
                  alt="Mulher radiante e confiante na luz do sol"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122417]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs uppercase tracking-widest font-bold text-[#E7DEC9] bg-[#1B3A23]/90 px-3 py-1 rounded-full border border-[#2B5435] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#22C55E]" />
                  A Transformação com Inibe One
                </span>
              </div>

              <h3 className="font-serif-editorial text-2xl font-bold text-[#FFFFFF] mb-4">
                A leveza de estar em harmonia com seu corpo:
              </h3>

              <ul className="space-y-3.5 text-sm sm:text-base text-[#D7E3D8]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#204427] text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5 border border-[#3C6944]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-white">Saciedade serena e gentil:</strong> sentir-se satisfeita com refeições conscientes, sem a angústia de ficar pensando em comida.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#204427] text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5 border border-[#3C6944]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-white">Abdômen plano e desinchado:</strong> ação drenante natural que elimina a retenção e te faz sentir o corpo livre logo pela manhã.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#204427] text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5 border border-[#3C6944]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-white">Energia limpa e duradoura:</strong> disposição natural do café da manhã até a hora de dormir, sem picos de fadiga.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#204427] text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5 border border-[#3C6944]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-white">O prazer de se vestir bem:</strong> resgatar do guarda-roupa aquela peça especial e sorrir com sinceridade para o espelho.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <button
                onClick={onCtaClick}
                className="w-full py-3.5 px-6 rounded-full bg-[#22C55E] hover:bg-[#1DA950] text-[#0E1E12] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#22C55E]/20"
              >
                <span>Eu Quero Viver Essa Mudança</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
