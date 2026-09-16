import React from 'react';
import { Sparkles, Utensils, Zap, Waves, Smile, Compass } from 'lucide-react';

export const BenefitsBento: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3D6] text-[#213524] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            Ação Multi-Alvo Inteligente
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#142618] font-bold leading-tight tracking-tight">
            Não é mágica.{' '}
            <span className="text-[#15803D]">É ciência botânica</span> a favor da sua rotina.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405043] leading-relaxed">
            Uma sinergia pensada para o organismo feminino que respeita seu ritmo hormonal,
            equilibra a saciedade e destrava seu metabolismo sem choques artificiais.
          </p>
        </div>

        {/* Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1 (Span 7 md) - Saciedade Serena */}
          <div className="md:col-span-7 rounded-[32px] bg-[#F4EFE6] border border-[#E2D8C9] p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#1B2F20] text-[#22C55E] flex items-center justify-center mb-6 shadow-sm">
                <Utensils className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-[#16A34A] block mb-2">
                Pilar 01 • Fim da Fissura por Carboidratos
              </span>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#152719] mb-3">
                Saciedade Inteligente que silencia a fome ansiosa.
              </h3>

              <p className="text-sm sm:text-base text-[#49584D] max-w-lg leading-relaxed mb-6">
                Fibras nobres expandem-se de maneira biocompatível no estômago, enviando sinais
                reais de saciedade ao cérebro. Você almoça e janta com satisfação genuína e elimina
                aquela necessidade desesperada de assaltar o armário no fim da tarde.
              </p>
            </div>

            {/* Inset Photo */}
            <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mt-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
                alt="Alimentação leve e consciente"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C1E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90">
                Paz à mesa: comer o que faz bem sem culpa e sem perder o controle.
              </div>
            </div>
          </div>

          {/* Bento Card 2 (Span 5 md) - Desinchaço & Drenagem */}
          <div className="md:col-span-5 rounded-[32px] bg-gradient-to-b from-[#1C3322] to-[#122316] text-white border border-[#2D5436] p-8 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#28492F] text-[#22C55E] flex items-center justify-center mb-6 border border-[#3E6C46]">
                <Waves className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-[#86EFAC] block mb-2">
                Pilar 02 • Leveza Visível
              </span>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white mb-3">
                Drenagem natural contra o inchaço diário.
              </h3>

              <p className="text-sm sm:text-base text-[#D3E0D5] leading-relaxed mb-6">
                Bioativos de Laranja Moro e polifenóis aceleram a eliminação de líquidos retidos,
                desinflamando o abdômen, aliviando a sensação de peso nas pernas e suavizando a expressão facial.
              </p>
            </div>

            <div className="bg-[#142618] border border-[#27482E] rounded-2xl p-4 mt-4">
              <div className="text-2xl font-serif-editorial font-bold text-[#22C55E]">
                -68% de retenção
              </div>
              <p className="text-xs text-[#BED0C1] mt-1">
                Percepção relatada de desinchaço e conforto abdominal já nos primeiros 10 a 14 dias de uso.
              </p>
            </div>
          </div>

          {/* Bento Card 3 (Span 4 md) - Energia Limpa */}
          <div className="md:col-span-4 rounded-[32px] bg-[#F4EFE6] border border-[#E2D8C9] p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1B2F20] text-[#22C55E] flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-[#16A34A] block mb-2">
                Pilar 03 • Disposição Estável
              </span>

              <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#152719] mb-3">
                Vitalidade sem tremores ou ansiedade.
              </h3>

              <p className="text-sm text-[#49584D] leading-relaxed">
                Termogênese suave que ativa o metabolismo basal sem desencadear taquicardia, insônia ou palpitações. Você ganha ânimo para o trabalho, família e treinos.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFD5C6] flex items-center gap-2 text-xs font-semibold text-[#1F3323]">
              <Compass className="w-4 h-4 text-[#16A34A]" />
              <span>Sem estimulantes sintéticos perigosos</span>
            </div>
          </div>

          {/* Bento Card 4 (Span 4 md) - Autoestima & O Espelho */}
          <div className="md:col-span-4 rounded-[32px] bg-[#F4EFE6] border border-[#E2D8C9] p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1B2F20] text-[#22C55E] flex items-center justify-center mb-6">
                <Smile className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-[#16A34A] block mb-2">
                Pilar 04 • Retomada da Confiança
              </span>

              <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#152719] mb-3">
                Voltar a se olhar no espelho com ternura.
              </h3>

              <p className="text-sm text-[#49584D] leading-relaxed">
                A transformação física reflete diretamente em como você se posiciona no mundo: segurança para vestir o que gosta, tirar fotos com a família e se sentir desejada.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFD5C6] flex items-center gap-2 text-xs font-semibold text-[#1F3323]">
              <Sparkles className="w-4 h-4 text-[#16A34A]" />
              <span>Liberdade de viver sem se esconder</span>
            </div>
          </div>

          {/* Bento Card 5 (Span 4 md) - Equilíbrio Metabólico Duradouro */}
          <div className="md:col-span-4 rounded-[32px] bg-[#F4EFE6] border border-[#E2D8C9] p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1B2F20] text-[#22C55E] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-[#16A34A] block mb-2">
                Pilar 05 • Efeito Sustentável
              </span>

              <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#152719] mb-3">
                Sem efeito sanfona ou dietas de tortura.
              </h3>

              <p className="text-sm text-[#49584D] leading-relaxed">
                Ao reeducar a saciedade e manter o equilíbrio glicêmico estável, você consolida hábitos reais que permanecem com você ao longo de meses e anos.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFD5C6] flex items-center gap-2 text-xs font-semibold text-[#1F3323]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span>Equilíbrio biológico de longo prazo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
