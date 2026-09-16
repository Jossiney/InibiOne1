import React, { useState } from 'react';
import { KitOption } from '../types';
import { X, ShieldCheck, Lock, Truck, Gift, CheckCircle, CreditCard, QrCode, ArrowRight } from 'lucide-react';
import { ProductBottle } from './ProductBottle';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKit: KitOption;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedKit,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');

  if (!isOpen) return null;

  const handleSimulateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-[32px] border border-[#DDD3C3] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#192E1D] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#2C4A31]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#24452B] flex items-center justify-center text-[#22C55E]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-editorial text-xl font-bold tracking-tight leading-none">
                {isSuccess ? 'Pedido Confirmado com Sucesso!' : 'Finalização de Pedido 100% Segura'}
              </h3>
              <p className="text-[11px] text-[#A6BDAA] mt-0.5">
                Criptografia de ponta a ponta • Garantia incondicional de 30 dias
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#C7D9CB] transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#E2F7E6] text-[#16A34A] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h4 className="font-serif-editorial text-3xl font-bold text-[#142618]">
                Parabéns pela sua decisão!
              </h4>

              <p className="text-sm sm:text-base text-[#465749] max-w-md mx-auto leading-relaxed">
                Você deu o passo definitivo para reencontrar sua leveza, energia e autoestima.
                Seu protocolo do <strong>{selectedKit.title}</strong> foi reservado no lote prioritário.
              </p>

              <div className="p-4 rounded-2xl bg-[#F3EDE3] border border-[#DDD3C3] max-w-md mx-auto text-left text-xs text-[#394C3D] space-y-2">
                <div className="flex items-center justify-between">
                  <span>Código de Rastreamento:</span>
                  <span className="font-mono font-bold text-[#16A34A]">INB-BR-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Previsão de Entrega:</span>
                  <span className="font-bold">3 a 5 dias úteis (Envio Expresso)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Garantia de 30 dias:</span>
                  <span className="font-bold text-[#16A34A]">Ativada automaticamente</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-full bg-[#1C3322] hover:bg-[#122316] text-white font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Concluir e Voltar à Página
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSimulateOrder} className="space-y-6">
              {/* Selected Kit Preview */}
              <div className="p-4 rounded-2xl bg-[#F5EFE6] border border-[#DDD3C3] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-16 shrink-0 flex items-center justify-center">
                    <ProductBottle size="sm" showBadge={false} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#16A34A] uppercase tracking-wider block">
                      Item Selecionado
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#18291C]">
                      {selectedKit.title}
                    </h4>
                    <p className="text-xs text-[#5D6F61]">
                      {selectedKit.bottles} frasco{selectedKit.bottles > 1 ? 's' : ''} ({selectedKit.months} meses de tratamento)
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs line-through text-[#798A7C]">
                    R$ {selectedKit.originalPrice},00
                  </div>
                  <div className="font-serif-editorial text-2xl font-bold text-[#162719]">
                    R$ {selectedKit.promoPrice},00
                  </div>
                  <div className="text-[10px] font-semibold text-[#16A34A]">
                    Economia de R$ {selectedKit.savings},00
                  </div>
                </div>
              </div>

              {/* Perks / Free Gifts included */}
              <div className="space-y-1.5 text-xs text-[#3E5042]">
                <div className="flex items-center gap-2 font-medium">
                  <Truck className="w-4 h-4 text-[#16A34A]" />
                  <span>
                    {selectedKit.freeShipping
                      ? 'Frete Grátis com Envio Expresso Garantido'
                      : 'Envio seguro via transportadora parceira'}
                  </span>
                </div>
                {selectedKit.gifts && selectedKit.gifts.map((gift, gIdx) => (
                  <div key={gIdx} className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-[#16A34A]" />
                    <span>Brinde Incluso: {gift}</span>
                  </div>
                ))}
              </div>

              {/* Delivery Data inputs */}
              <div className="space-y-3 pt-2 border-t border-[#E5DCCE]">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#637466]">
                  1. Dados para Entrega e Rastreamento
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#273B2A] mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silveira"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CAB8] bg-white text-sm text-[#18291C] focus:outline-hidden focus:ring-2 focus:ring-[#16A34A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#273B2A] mb-1">
                      WhatsApp para Rastreio
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CAB8] bg-white text-sm text-[#18291C] focus:outline-hidden focus:ring-2 focus:ring-[#16A34A]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#273B2A] mb-1">
                    CEP de Entrega
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="00000-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="w-full sm:w-1/2 px-3.5 py-2.5 rounded-xl border border-[#D5CAB8] bg-white text-sm text-[#18291C] focus:outline-hidden focus:ring-2 focus:ring-[#16A34A]"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-2 border-t border-[#E5DCCE]">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#637466]">
                  2. Forma de Pagamento
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3.5 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-[#16A34A] bg-[#EAF7ED] text-[#142A17] ring-1 ring-[#16A34A]'
                        : 'border-[#DDD3C3] bg-white text-[#455748]'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-[#16A34A]" />
                    <div>
                      <span className="block text-xs font-bold leading-tight">Pix Imediato</span>
                      <span className="block text-[10px] text-[#16A34A] font-semibold">Aprovação instantânea</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-3.5 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      paymentMethod === 'credit'
                        ? 'border-[#16A34A] bg-[#EAF7ED] text-[#142A17] ring-1 ring-[#16A34A]'
                        : 'border-[#DDD3C3] bg-white text-[#455748]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#16A34A]" />
                    <div>
                      <span className="block text-xs font-bold leading-tight">Cartão de Crédito</span>
                      <span className="block text-[10px] text-[#5B6C5E]">Em até 12x de R$ {selectedKit.installmentValue.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Reassurance statement & Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#17301E] to-[#122416] hover:from-[#112316] hover:to-[#0D1C10] active:scale-[0.99] transition-all shadow-xl border border-[#2D5635] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Concluir Pedido com Garantia de 30 Dias</span>
                  <ArrowRight className="w-4 h-4 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#637365]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Garantia de 30 dias: Não gostou? Devolvemos 100% do seu dinheiro.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
