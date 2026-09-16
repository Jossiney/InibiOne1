import { KitOption, Testimonial, Ingredient, FaqItem } from '../types';

export const KITS_DATA: KitOption[] = [
  {
    id: 'kit-1',
    bottles: 1,
    months: 1,
    title: 'Kit Inicial: Despertar',
    subtitle: 'Para experimentar a sensação de leveza e controle inicial da saciedade.',
    originalPrice: 247,
    promoPrice: 197,
    installments: 12,
    installmentValue: 19.78,
    discountPercent: 20,
    freeShipping: false,
    savings: 50,
  },
  {
    id: 'kit-3',
    bottles: 3,
    months: 3,
    title: 'Tratamento Recomendado: Reconstrução',
    subtitle: 'O protocolo mais escolhido para reprogramar hábitos, desinchar e consolidar novos resultados.',
    originalPrice: 741,
    promoPrice: 347,
    installments: 12,
    installmentValue: 34.84,
    discountPercent: 53,
    badge: 'ESCOLHA MAIS POPULAR • 53% OFF',
    isPopular: true,
    freeShipping: true,
    gifts: ['E-book: Guia de Rotina Desinflamatória & Chás Drenantes', 'Acesso à Comunidade VIP Mulheres Mais Leves'],
    savings: 394,
  },
  {
    id: 'kit-5',
    bottles: 5,
    months: 5,
    title: 'Transformação Total: Renovação',
    subtitle: 'Para quem busca a mudança mais profunda, manutenção duradoura da autoestima e melhor economia.',
    originalPrice: 1235,
    promoPrice: 487,
    installments: 12,
    installmentValue: 48.90,
    discountPercent: 60,
    badge: 'MELHOR CUSTO-BENEFÍCIO • ECONOMIA MÁXIMA',
    freeShipping: true,
    gifts: [
      'E-book: Guia de Rotina Desinflamatória & Chás Drenantes',
      'Guia Prático: Controle Emocional & Relação de Paz com a Balança',
      'Frete Expresso Prioritário Garantido',
    ],
    savings: 748,
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mariana Silveira',
    age: 38,
    city: 'Belo Horizonte, MG',
    timeUsing: 'Uso há 60 dias (Kit 3)',
    headline: '“Parei de descontar a ansiedade do trabalho na comida às 17h.”',
    quote:
      'Eu vivia refém daquela fome voraz no fim da tarde. Parecia que meu dia só acabava quando eu atacava carboidratos. Com o Inibe One, a saciedade veio de forma tão suave e natural que nem percebi os doces sumirem da minha rotina. Voltei a entrar na minha calça jeans favorita sem aperto.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightTag: 'Controle da Fome Emocional',
  },
  {
    id: 'test-2',
    name: 'Camila Rocha',
    age: 43,
    city: 'São Paulo, SP',
    timeUsing: 'Uso há 90 dias (Kit 5)',
    headline: '“O espelho deixou de ser um lugar de cobrança e virou orgulho.”',
    quote:
      'Depois dos 40, achei que meu metabolismo estava condenado e que o cansaço constante era normal. A maior surpresa com o Inibe One foi a energia limpa logo pela manhã e como meu abdômen desinchou já nos primeiros 10 dias. Me sinto viva, feminina e cheia de disposição para curtir meus filhos.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightTag: 'Metabolismo & Autoestima',
  },
  {
    id: 'test-3',
    name: 'Beatriz Lacerda',
    age: 32,
    city: 'Curitiba, PR',
    timeUsing: 'Uso há 45 dias (Kit 3)',
    headline: '“Zero palpitação, zero efeito rebote. Uma fórmula que respeita meu corpo.”',
    quote:
      'Já passei por remédios sintéticos horríveis que me davam tremedeira e insônia. O Inibe One é o oposto: sinto uma paz gástrica, digestão leve e uma sensação gostosa de plenitude durante as refeições. Pela primeira vez estou emagrecendo sem me punir.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightTag: 'Fórmula Limpa & Sem Efeitos Colaterais',
  },
  {
    id: 'test-4',
    name: 'Juliana Medeiros',
    age: 47,
    city: 'Rio de Janeiro, RJ',
    timeUsing: 'Uso há 120 dias (Kit 5)',
    headline: '“Recuperei a confiança de usar vestidos e colocar fotos no feed.”',
    quote:
      'Eu me escondia atrás de roupas largas e escuras há anos. O inchaço me fazia sentir pesada o tempo todo. Hoje acordo com o corpo leve, a pele viçosa e uma disposição que há muito tempo eu não experimentava. Não é apenas peso, é recomeço de vida.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightTag: 'Liberdade & Confiança Reencontrada',
  },
];

export const INGREDIENTS_DATA: Ingredient[] = [
  {
    id: 'ing-1',
    name: 'Psyllium Premium Pureza 99%',
    scientificName: 'Plantago ovata',
    role: 'Saciedade Inteligente & Conforto Intestinal',
    description:
      'Fibras solúveis nobres que se expandem delicadamente no estômago formando um gel biocompatível. Retarda o esvaziamento gástrico, prolongando a sensação de plenitude por horas.',
    benefit: 'Sacia sem pesar no estômago e regula o trânsito intestinal.',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ing-2',
    name: 'Extrato Puro de Laranja Moro',
    scientificName: 'Citrus sinensis L. Osbeck',
    role: 'Ação Drenante & Redução de Gordura Abdominal',
    description:
      'Rico em antocianina C3G, um bioativo potente que atua diretamente nos adipócitos e na diminuição do acúmulo lipídico na região da cintura, com potente ação antioxidante.',
    benefit: 'Diminui a retenção líquida e modela a silhueta de forma natural.',
    image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ing-3',
    name: 'Picolinato de Cromo Quelato',
    scientificName: 'Chromium Picolinate',
    role: 'Corte de Vontade por Doces e Picos de Insulina',
    description:
      'Mineral essencial em forma quelatada para máxima biodisponibilidade. Auxilia no metabolismo de carboidratos e estabiliza a glicose, desarmando o gatilho da compulsão por doces.',
    benefit: 'Cessa o desejo repentino por açúcar e carboidratos refinados.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ing-4',
    name: 'Chá Verde Padronizado em EGCG',
    scientificName: 'Camellia sinensis',
    role: 'Termogênese Botânica Suave & Energia Limpa',
    description:
      'Concentrado em polifenóis ativos que aceleram o gasto calórico basal de forma constante, sem sobrecarregar o sistema nervoso central nem causar agitação ou palpitações.',
    benefit: 'Disposição sustentada do amanhecer até a noite sem tremores.',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ing-5',
    name: 'Espirulina & Complexo de Zinco',
    scientificName: 'Arthrospira platensis & Zinc',
    role: 'Vitalidade Celular, Cabelos, Unhas & Firmeza',
    description:
      'Superalimento rico em micronutrientes, aminoácidos e antioxidantes que preservam a massa magra, sustentam a imunidade e mantêm a vitalidade da pele durante o emagrecimento.',
    benefit: 'Emagrecimento com tônus, vitalidade e pele viçosa.',
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Como devo tomar o Inibe One no meu dia a dia?',
    answer:
      'Recomenda-se tomar 2 cápsulas ao dia: 1 cápsula pela manhã cerca de 20 a 30 minutos antes do café da manhã, e 1 cápsula 30 minutos antes do almoço ou jantar, sempre com um copo generoso de água (250ml a 300ml). Essa hidratação potencializa a ativação suave das fibras.',
  },
  {
    question: 'Em quanto tempo começo a notar as primeiras mudanças?',
    answer:
      'A sensação de saciedade e o alívio na digestão costumam ser percebidos logo nos primeiros 3 a 5 dias. Entre 10 e 15 dias, a redução visível do inchaço e a diminuição da vontade de beliscar doces tornam-se evidentes. Para uma transformação profunda e consolidação dos resultados, recomendamos o tratamento contínuo de 90 a 150 dias (Kits 3 ou 5).',
  },
  {
    question: 'O Inibe One causa taquicardia, insônia ou ansiedade?',
    answer:
      'Não. Diferente de estimulantes sintéticos agressivos, a fórmula do Inibe One é 100% botânica e balanceada com ativos nobres. Ela estimula o metabolismo de maneira equilibrada e não interfere no sono, nem provoca agitação cardíaca ou alterações no humor.',
  },
  {
    question: 'O produto é autorizado e seguro segundo as normas da Anvisa?',
    answer:
      'Sim! O Inibe One é formulado em laboratório certificado e segue rigorosamente os padrões de qualidade e segurança estabelecidos pela Anvisa (conforme RDC 240/2018 e normativas vigentes para suplementos alimentares), sendo 100% legal e seguro para consumo.',
  },
  {
    question: 'Como funciona a Garantia Incondicional de 30 Dias?',
    answer:
      'Acreditamos plenamente no poder transformador do Inibe One. Por isso, você tem 30 dias para testar o produto a partir da entrega. Se por qualquer motivo achar que ele não proporcionou mais leveza, saciedade e energia ao seu dia, basta enviar um e-mail para o nosso suporte e reembolsamos 100% do valor pago. Seu risco é rigorosamente zero.',
  },
  {
    question: 'Qual é o prazo de entrega e como o produto é embalado?',
    answer:
      'O envio é realizado via transportadora expressa ou Correios com código de rastreamento enviado diretamente no seu WhatsApp e e-mail. O prazo médio de entrega varia de 3 a 7 dias úteis conforme a sua região. A embalagem é totalmente discreta e segura, garantindo sua total privacidade.',
  },
];
