import React, { useState } from 'react';
import { Sun, Coffee, Sunset, Moon, Sparkles, Clock, CheckCircle } from 'lucide-react';

interface RoutineStep {
  time: string;
  period: string;
  icon: React.ReactNode;
  title: string;
  headline: string;
  description: string;
  microTip: string;
  image: string;
}

const ROUTINE_STEPS: RoutineStep[] = [
  {
    time: '07:30',
    period: 'Manhã',
    icon: <Sun className="w-5 h-5 text-[#C4881A]" />,
    title: 'Despertar com Leveza & Ativação',
    headline: '1 cápsula com 300ml de água antes do café da manhã',
    description:
      'As fibras nobres do Inibe One iniciam o processo de expansão biomimética. A Laranja Moro e o EGCG do chá verde começam a modular o metabolismo basal, trazendo disposição límpida sem taquicardia.',
    microTip: 'Você começa o dia sem aquela sensação de estômago estufado da noite anterior.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
  },
  {
    time: '12:30',
    period: 'Almoço',
    icon: <Coffee className="w-5 h-5 text-[#16A34A]" />,
    title: 'Almoço Consciente & Saciedade Real',
    headline: '1 cápsula 30 minutos antes de almoçar',
    description:
      'Você senta para a refeição e nota que porções equilibradas agora são suficientes para te nutrir com prazer. O picolinato de cromo atua equilibrando a curva de insulina, prevenindo sonolência pós-refeição.',
    microTip: 'Satisfeita sem culpa, sem aquela necessidade de "comer até não aguentar mais".',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    time: '16:45',
    period: 'Tarde',
    icon: <Sunset className="w-5 h-5 text-[#E07A5F]" />,
    title: 'O Fim da Fome Ansiosa das 17h',
    headline: 'A blindagem contra a fissura por doces',
    description:
      'Aquele horário em que o estresse do trabalho costumava te levar correndo até o armário ou cafeteria agora passa com tranquilidade. O apetite permanece sereno e sua mente continua produtiva e calma.',
    microTip: 'A maior vitória das nossas clientes: paz mental e controle da ansiedade alimentar.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    time: '21:30',
    period: 'Noite',
    icon: <Moon className="w-5 h-5 text-[#4A6B82]" />,
    title: 'Noite Tranquila & Sono Reparador',
    headline: 'Digestão suave e descanso biológico',
    description:
      'Fórmula 100% livre de cafeína anidra sintética ou substâncias que prejudicam o sono. Seu corpo desacelera em harmonia, com digestão leve e sem refluxo ou sensação de peso ao encostar a cabeça no travesseiro.',
    microTip: 'Acorde no dia seguinte pronta para recomeçar com o corpo ainda mais desinchado.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
];

export const DailyRoutine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="rotina" className="py-20 md:py-28 bg-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5DCCF] text-[#203623] text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
            Da Manhã à Noite
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#142618] font-bold leading-tight tracking-tight">
            Como o Inibe One transforma o seu{' '}
            <span className="text-[#15803D]">ritmo diário</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405043] leading-relaxed">
            Veja exatamente como cada momento da sua rotina passa a ser vivido com leveza,
            energia contínua e sem os altos e baixos da compulsão alimentar.
          </p>
        </div>

        {/* Step Buttons for quick selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {ROUTINE_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#1C3321] text-white border-[#2A5233] shadow-lg scale-[1.02]'
                    : 'bg-[#FAF8F5] text-[#293B2D] border-[#E1D7C8] hover:bg-[#F2ECE0]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-[#86EFAC]' : 'text-[#627265]'}`}>
                    {step.period}
                  </span>
                  <div className={`p-1.5 rounded-full ${isSelected ? 'bg-white/10' : 'bg-[#EAE1D3]'}`}>
                    {step.icon}
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold font-serif-editorial block leading-none mb-1">
                    {step.time}
                  </span>
                  <span className="text-xs font-medium line-clamp-1 opacity-90">
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-[32px] bg-[#FAF8F5] border border-[#E3D9CB] p-6 sm:p-10 shadow-xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Image */}
            <div className="md:col-span-5 relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-md">
              <img
                src={ROUTINE_STEPS[activeStep].image}
                alt={ROUTINE_STEPS[activeStep].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152718]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-[#172D1C]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#22C55E]" />
                {ROUTINE_STEPS[activeStep].time} • {ROUTINE_STEPS[activeStep].period}
              </div>
            </div>

            {/* Narrative text */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A] uppercase tracking-wider">
                <CheckCircle className="w-4 h-4" />
                {ROUTINE_STEPS[activeStep].headline}
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#16291A]">
                {ROUTINE_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#445648] leading-relaxed">
                {ROUTINE_STEPS[activeStep].description}
              </p>

              <div className="p-3.5 rounded-xl bg-[#EFE9DD] border border-[#DDD3C3] text-xs sm:text-sm font-medium text-[#2C4130] flex items-center gap-2">
                <span className="text-[#16A34A] font-bold">Destaque:</span>
                <span>{ROUTINE_STEPS[activeStep].microTip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
