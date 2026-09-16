import React, { useState } from 'react';
import { Leaf, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#E8E2D6] transition-all">
      {/* Micro Announcement Bar */}
      <div className="bg-[#18281C] text-[#E5DFD3] text-[12px] font-medium py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="hidden sm:inline-flex items-center gap-1 text-[#22C55E]">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <span>
          <strong>Lote Exclusivo de Primavera:</strong> Frete Grátis e brindes especiais nos Kits de 3 e 5 frascos.
        </span>
        <span className="hidden md:inline-flex items-center gap-1 text-[#D9CDB8] text-[11px] ml-2 border-l border-white/20 pl-2">
          <ShieldCheck className="w-3 h-3 text-[#22C55E]" /> Notificado na Anvisa
        </span>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-full bg-[#1A2D1F] flex items-center justify-center text-[#E5D7BF] shadow-sm group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 text-[#22C55E]" />
          </div>
          <div>
            <span className="font-serif-editorial text-2xl font-bold tracking-tight text-[#16291B] block leading-none">
              INIBE ONE
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#667265] block mt-0.5">
              Feminine Wellness
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#354839]">
          <button
            onClick={() => scrollTo('beneficios')}
            className="hover:text-[#16A34A] transition-colors cursor-pointer"
          >
            Benefícios Reais
          </button>
          <button
            onClick={() => scrollTo('rotina')}
            className="hover:text-[#16A34A] transition-colors cursor-pointer"
          >
            Como Atua no Dia
          </button>
          <button
            onClick={() => scrollTo('ingredientes')}
            className="hover:text-[#16A34A] transition-colors cursor-pointer"
          >
            Fórmula Limpa
          </button>
          <button
            onClick={() => scrollTo('depoimentos')}
            className="hover:text-[#16A34A] transition-colors cursor-pointer"
          >
            Mulheres Transformadas
          </button>
          <button
            onClick={() => scrollTo('garantia')}
            className="hover:text-[#16A34A] transition-colors cursor-pointer"
          >
            Garantia de 30 Dias
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-[#16A34A] transition-colors cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-cta-button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#1B2F20] hover:bg-[#142418] active:scale-[0.98] transition-all shadow-md hover:shadow-lg border border-[#2B4731]"
          >
            <span>Quero Fazer Parte</span>
            <span className="ml-2 w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1E2E21] hover:bg-[#EBE4D8] transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E2DAD0] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2.5 text-base font-medium text-[#26372A]">
            <button
              onClick={() => scrollTo('beneficios')}
              className="text-left py-2 border-b border-[#EFE9DF]"
            >
              Benefícios Reais
            </button>
            <button
              onClick={() => scrollTo('rotina')}
              className="text-left py-2 border-b border-[#EFE9DF]"
            >
              Como Atua no Dia
            </button>
            <button
              onClick={() => scrollTo('ingredientes')}
              className="text-left py-2 border-b border-[#EFE9DF]"
            >
              Fórmula Limpa
            </button>
            <button
              onClick={() => scrollTo('depoimentos')}
              className="text-left py-2 border-b border-[#EFE9DF]"
            >
              Mulheres Transformadas
            </button>
            <button
              onClick={() => scrollTo('garantia')}
              className="text-left py-2 border-b border-[#EFE9DF]"
            >
              Garantia de 30 Dias
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-left py-2 border-b border-[#EFE9DF]"
            >
              Dúvidas
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#1B2F20] text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Quero Meu Kit de Transformação</span>
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
