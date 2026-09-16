import React from 'react';
import { Leaf, ShieldCheck, Lock, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#142317] text-[#D1DDD3] pt-16 pb-12 border-t border-[#253D2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#253B2A]">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#203D26] flex items-center justify-center text-[#E5D7BF]">
                <Leaf className="w-4 h-4 text-[#22C55E]" />
              </div>
              <span className="font-serif-editorial text-2xl font-bold tracking-tight text-white block">
                INIBE ONE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#9FB3A3] leading-relaxed max-w-sm">
              Desenvolvido para inspirar mulheres a reencontrarem sua leveza, energia e autoestima
              através de bioativos botânicos de alta pureza e respeito ao ritmo biológico feminino.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#899F8D] pt-2">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#22C55E]" /> Checkout Seguro SSL 256
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" /> Anvisa RDC 240/2018
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 text-xs sm:text-sm">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Navegação Segura
            </h4>
            <ul className="space-y-2 text-[#9FB3A3]">
              <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios Comprovados</a></li>
              <li><a href="#rotina" className="hover:text-white transition-colors">Linha do Tempo no Seu Dia</a></li>
              <li><a href="#ingredientes" className="hover:text-white transition-colors">Fórmula & Bioativos</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Histórias Reais</a></li>
              <li><a href="#kits" className="hover:text-white transition-colors">Tabela de Preços & Ofertas</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Security & Guarantees (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-xs text-[#9FB3A3]">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Compromisso & Privacidade
            </h4>
            <p className="leading-relaxed">
              Sua privacidade é inegociável. Seus dados cadastrais e financeiros são 100% criptografados
              e nunca compartilhados. O envio é realizado em embalagem discreta e lacrada.
            </p>
            <div className="p-3 rounded-xl bg-[#192C1D] border border-[#27462C] flex items-center gap-3">
              <Award className="w-6 h-6 text-[#22C55E] shrink-0" />
              <div>
                <span className="text-white font-bold block text-xs">Garantia Incondicional</span>
                <span className="text-[11px] text-[#A2B6A5]">30 dias para testar com risco zero.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Responsible Health Disclaimer */}
        <div className="py-8 border-b border-[#253B2A] text-[11px] text-[#7E9382] leading-relaxed space-y-2">
          <p>
            <strong>Aviso Legal & Regulatório:</strong> O Inibe One é um suplemento alimentar botânico enquadrado na categoria de alimentos seguros e dispensados de registro conforme a Resolução RDC nº 240/2018 da Agência Nacional de Vigilância Sanitária (Anvisa). Este produto não é um medicamento e não tem como objetivo diagnosticar, tratar, curar ou prevenir qualquer doença.
          </p>
          <p>
            Os resultados podem variar de pessoa para pessoa em decorrência de fatores metabólicos, estilo de vida e regularidade de uso. Mantenha uma alimentação equilibrada e pratique atividades físicas compatíveis com a sua rotina. Gestantes, lactantes e crianças devem consumir apenas sob orientação médica ou de nutricionista.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E8172]">
          <p>© {new Date().getFullYear()} Inibe One. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Feito com cuidado e dedicação à saúde feminina</span>
            <Heart className="w-3.5 h-3.5 text-[#16A34A] fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
