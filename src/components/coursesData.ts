import { EligibleCourse, Testimonial, FaqItem } from '../types';

export const INSTITUTION_INFO = {
  name: "Instituto Saber Consciente",
  internationalIssuer: "Saber Consciente Worldwide LLC (EUA)",
  accreditationText: "Certificado por @cel.education e avalizado por @fgu_online",
  studentsCount: "+18.000",
  rating: "4.9/5.0",
  format: "100% Online",
  accessType: "Acesso Vitalício",
  videoUrl: "https://youtu.be/9pG-s3y6258",
  videoEmbedId: "9pG-s3y6258",
};

// 3 Official Courses Eligible for International Certification
export const ELIGIBLE_COURSES: EligibleCourse[] = [
  {
    id: "neurociencia",
    emoji: "🧠",
    title: "Neurociência Comportamental",
    fullTitle: "🧠 Neurociência Comportamental + Certificação Internacional",
    subtitle: "+ Certificação Internacional (EUA)",
    badge: "Alta Demanda Clínica",
    checkoutUrl: "https://pay.hotmart.com/Q94931307D?checkoutMode=6&off=duteuuii&offDiscount=INTER&bid=1786715525911",
    hours: "150h",
    rating: "4.9",
    studentsCount: "+4.800 alunos",
    highlightColor: "violet",
    shortDescription: "Compreenda o funcionamento cerebral, plasticidade neural, tomada de decisão, regulação emocional, neurotransmissores e intervenções comportamentais de ponta.",
    fullDescription: "Uma formação profunda e científica que une as descobertas mais recentes da neurobiologia moderna à prática terapêutica, capacitando você a entender e intervir nos circuitos neurais, reprogramação de hábitos, regulação de ansiedade, estresse e funções executivas.",
    certificateTitle: "Executive Certified Diploma in Behavioral Neuroscience & Cognitive Studies",
    targetAudience: "Terapeutas, psicólogos, psicanalistas, coaches, educadores e profissionais da saúde que buscam embasamento científico de ponta para atendimentos de alta performance.",
    learningOutcomes: [
      "Compreensão anatômica e funcional dos circuitos neurais e neurotransmissores",
      "Mapeamento e intervenção nos eixos de ansiedade, estresse, medo e recompensa (Dopamina, Serotonina, GABA)",
      "Aplicação clínica da neuroplasticidade para reprogramação de crenças e hábitos",
      "Decodificação de vieses cognitivos e fortalecimento das funções executivas pré-frontais",
      "Elaboração de protocolos terapêuticos embasados na neurociência moderna"
    ],
    modulesList: [
      {
        title: "Módulo 1: Introdução à Neurociência",
        description: "Bases fundamentais do sistema nervoso, anatomia cerebral, neurônios, comunicação sináptica e princípios gerais do funcionamento neural."
      },
      {
        title: "Módulo 2: Memórias, Emoções e Circuitos Neurais",
        description: "Sistema límbico, amígdala, hipocampo, mecanismos de consolidação da memória e regulação dos eixos emocionais e neuroquímica (neurotransmissores)."
      },
      {
        title: "Módulo 3: Neurociência e Transtornos",
        description: "Bases neurobiológicas da ansiedade, depressão, estresse crônico, pânico, burnout e alterações nos circuitos de regulação."
      },
      {
        title: "Módulo 4: Prática na Neurociência",
        description: "Ferramentas práticas de aplicação, protocolos de intervenção, exercícios de autorregulação e métodos de acompanhamento."
      },
      {
        title: "Módulo 5: Neurociência do Desenvolvimento",
        description: "Etapas de maturação do sistema nervoso ao longo da vida, plasticidade sináptica e impacto das experiências no cérebro."
      },
      {
        title: "Módulo 6: Neurociência Cognitiva",
        description: "Funções executivas, córtex pré-frontal, tomada de decisão, foco, atenção sustentada, percepção e vieses cognitivos."
      },
      {
        title: "Módulo 7: Neurociência Infantil",
        description: "Desenvolvimento cerebral na infância, primeira infância, neurobiologia do apego, estímulos pedagógicos e regulação socioemocional infantil."
      },
      {
        title: "Módulo 8: Neurociência Comportamental",
        description: "Hábitos, circuitos de recompensa e dopamina, modificação de comportamentos, motivação e condicionamentos neurais."
      },
      {
        title: "Módulo 9: Neurociência Clínica",
        description: "Abordagem no setting clínico, anamnese neurofuncional, condutas éticas e integração da neurociência nos atendimentos terapêuticos."
      }
    ],
    includedBonuses: [
      "Certificado Internacional de 150h emitido nos EUA (Saber Consciente LLC)",
      "Formação 100% Online com Acesso Vitalício"
    ]
  },
  {
    id: "terapeuta-master",
    emoji: "🌿",
    title: "Terapeuta Holístico Master",
    fullTitle: "🌿 Terapeuta Holístico Master + Certificação Internacional",
    subtitle: "+ Certificação Internacional (EUA)",
    badge: "Mais Procurado • Formação Completa",
    checkoutUrl: "https://pay.hotmart.com/L98300152N?checkoutMode=6&off=68lww2t4&offDiscount=INTER&bid=1786715717788",
    hours: "568h",
    rating: "5.0",
    studentsCount: "+11.500 alunos",
    featured: true,
    highlightColor: "emerald",
    shortDescription: "Formação completa com 35 técnicas consagradas divididas em Terapias Mentais e Emocionais, Terapias Corporais e Terapias Energéticas, com carga de 568h e diploma emitido nos EUA.",
    fullDescription: "O programa de formação de terapeutas holísticos mais conceituado e completo do mercado. Você dominará 35 técnicas fundamentais divididas em 3 grandes eixos de atuação clínica: Terapias Mentais e Emocionais, Terapias Corporais e Terapias Energéticas, capacitando você para atendimentos presenciais e online de alto impacto.",
    certificateTitle: "Executive Certified Diploma - Senior International Holistic Therapist (568h)",
    targetAudience: "Iniciantes do zero absoluto que desejam viver de terapia, bem como terapeutas já atuantes que desejam se consagrar com diploma internacional emitido nos EUA e um arsenal completo de 35 ferramentas de cura.",
    learningOutcomes: [
      "Domínio de 16 Terapias Mentais e Emocionais (Psicofloral, PNL, EFT, Hipnose, TCC, Jung, Constelação e mais)",
      "Aplicação prática de 13 Terapias Corporais (Ortomolecular, Homeopatia, Fitoterapia, Auriculo, Ayurveda, Cone Hindu, etc.)",
      "Harmonização com 9 Terapias Energéticas (Reiki Usui Nível 1 ao 3B, Radiestesia, Limpeza Quântica, Chakras, Feng Shui)",
      "Técnicas de atendimento na prática, primeiros passos para atuar, divulgação e bônus exclusivo de Reiki & Cromo em Animais"
    ],
    techniqueCategories: [
      {
        categoryName: "Terapias Mentais e Emocionais",
        description: "16 técnicas focadas no reequilíbrio psíquico, alívio de traumas, ansiedade, ressignificação de crenças e expansão da consciência:",
        techniques: [
          "Psicofloralterapia",
          "Ciência da Felicidade",
          "Psicoaromaterapia",
          "Crise de Pânico e Ansiedade",
          "Arquétipos de Jung",
          "Terapia dos Sonhos",
          "Psicanálise Clínica",
          "Psicanálise da Mulher e Infantil",
          "Terapia Cognitivo Comportamental (TCC)",
          "PNL - Programação Neurolinguística",
          "EFT - Liberação Emocional",
          "Crenças Limitantes",
          "Constelação Familiar",
          "Psicossomática",
          "Hipnose Clínica",
          "Cromoterapia"
        ]
      },
      {
        categoryName: "Terapias Corporais",
        description: "13 técnicas de intervenção somática, equilíbrio fisiológico, desintoxicação e terapias manuais integrativas:",
        techniques: [
          "Terapia Ortomolecular",
          "Homeopatia",
          "Nutrição Holística",
          "Iridologia",
          "Bases da Medicina Germânica",
          "Fitoterapia",
          "Auriculoterapia",
          "Massagem com Óleos Essenciais",
          "Ayurveda",
          "Introdução à MTC (Medicina Tradicional Chinesa)",
          "Reflexologia",
          "Cone Hindu",
          "Moxaterapia"
        ]
      },
      {
        categoryName: "Terapias Energéticas",
        description: "9 técnicas vibracionais de alinhamento dos corpos sutis, ambientes e canalização energética:",
        techniques: [
          "Limpeza Energética e de Ambientes",
          "Terapia Quântica",
          "Divórcio Energético",
          "Feng Shui",
          "Baguá",
          "Numerologia",
          "Cristaloterapia e Chakras",
          "Radiestesia",
          "Reiki Usui (Nível I ao 3 B)"
        ]
      }
    ],
    modulesList: [
      {
        title: "Eixo 1: Terapias Mentais e Emocionais (16 Técnicas)",
        description: "Psicofloralterapia, Ciência da Felicidade, Psicoaromaterapia, Ansiedade/Pânico, Jung, Sonhos, Psicanálise Clínica/Infantil/Mulher, TCC, PNL, EFT, Crenças Limitantes, Constelação, Psicossomática, Hipnose e Cromoterapia."
      },
      {
        title: "Eixo 2: Terapias Corporais & Fitoterápicas (13 Técnicas)",
        description: "Terapia Ortomolecular, Homeopatia, Nutrição Holística, Iridologia, Medicina Germânica, Fitoterapia, Auriculoterapia, Massagem com Óleos, Ayurveda, MTC, Reflexologia, Cone Hindu e Moxaterapia."
      },
      {
        title: "Eixo 3: Terapias Energéticas & Vibracionais (9 Técnicas)",
        description: "Limpeza Energética e Ambientes, Terapia Quântica, Divórcio Energético, Feng Shui, Baguá, Numerologia, Cristaloterapia e Chakras, Radiestesia e Reiki Usui Completo (Nível I ao 3B)."
      },
      {
        title: "Eixo 4: Técnicas de Atendimento & Primeiros Passos",
        description: "Técnicas de Atendimento, Primeiros passos para começar na área, Como divulgar o seu trabalho e Reiki e Cromo em Animais."
      }
    ],
    includedBonuses: [
      "Bônus: Técnicas de Atendimento",
      "Bônus: Primeiros passos para começar na área",
      "Bônus: Como divulgar o seu trabalho",
      "Bônus: Reiki e Cromo em Animais",
      "Certificado Internacional de 568h emitido nos EUA (Saber Consciente LLC)"
    ]
  },
  {
    id: "psicoterapia-psicanalise",
    emoji: "🛋️",
    title: "Psicoterapia e Psicanálise",
    fullTitle: "🛋️ Psicoterapia e Psicanálise + Certificação Internacional",
    subtitle: "+ Certificação Internacional (EUA)",
    badge: "Formação Aprofundada",
    checkoutUrl: "https://pay.hotmart.com/X93961718P?checkoutMode=6&off=oztdfvgn&offDiscount=INTER&bid=1786712616298",
    hours: "600h",
    rating: "4.9",
    studentsCount: "+3.900 alunos",
    highlightColor: "amber",
    shortDescription: "Formação aprofundada de 600h cobrindo 24 pilares clínicos essenciais: Psicanálise Clínica, Psicopatologias, TCC/Mindfulness, Logoterapia, TVP, Clínica da Mulher e Infantil com chancela internacional.",
    fullDescription: "Uma imersão completa e rigorosa na prática psicanalítica e abordagens psicoterapêuticas contemporâneas. Você terá acesso a 24 eixos fundamentais que vão desde a clínica de base e psicopatologias até técnicas avançadas de atendimento, supervisão de casos, logoterapia e diversidade.",
    certificateTitle: "Executive Certified Diploma in Psychotherapy & Clinical Psychoanalysis (600h)",
    targetAudience: "Pessoas apaixonadas pela mente humana, terapeutas, psicólogos, conselheiros e analistas que buscam base conceitual sólida, escuta clínica refinada e segurança para atendimentos individuais.",
    learningOutcomes: [
      "Domínio da Psicanálise Clínica e diagnóstico de Psicopatologias fundamentais",
      "Especializações em Psicanálise Infantil, Desenhos, Sistêmica, da Mulher e Envelhecimento",
      "Abordagens psicoterapêuticas modernas: TCC com Mindfulness, Terapia de Aceitação/Compromisso, Mentalização e Logoterapia",
      "Prática clínica com Supervisão de Atendimento e Estudos de Caso (1 aula online ao vivo por mês), TVP e postura analítica"
    ],
    techniqueCategories: [
      {
        categoryName: "Psicanálise & Fundamentos Clínicos",
        description: "Bases teóricas clássicas, aprofundamentos e psicopatologias:",
        techniques: [
          "Psicanálise Clínica",
          "Psicopatologias",
          "Psicanálise Aprofundamento",
          "Psicanálise Infantil e Interpretação de Desenhos",
          "Psicanálise Sistêmica e da Mulher",
          "Psicanálise Humanista e Herança Emocional"
        ]
      },
      {
        categoryName: "Psicoterapias & Abordagens Contemporâneas",
        description: "Modelos terapêuticos integrativos e comportamentais:",
        techniques: [
          "Psicoterapia Contextual e Breve",
          "Psicoterapia Baseada na Mentalização",
          "Terapia Cognitiva Baseada em Mindfulness",
          "Terapia Positiva, de Aceitação e Compromisso",
          "Psicossomática e Metafísica",
          "Logoterapia",
          "Método Clínico Centrado na Pessoa",
          "Psicoterapia Regressão – TVP"
        ]
      },
      {
        categoryName: "Prática Clínica, Supervisão & Extensões",
        description: "Ferramentas práticas de atendimento, nichos e desenvolvimento profissional:",
        techniques: [
          "Supervisão de Atendimento e Estudos de Caso (1 aula online ao vivo por mês)",
          "Primeiros Passos para Começar na Área",
          "Técnicas de Atendimento",
          "Mapas Mentais",
          "Psicanálise Institucional & Organizacional",
          "Psicanálise na Diversidade Sexual",
          "Psicanálise no Envelhecimento",
          "Psicanalista Palestrante",
          "Antropologia na Psicoterapia"
        ]
      }
    ],
    modulesList: [
      {
        title: "1. Psicanálise Clínica & Psicopatologias",
        description: "Bases conceituais, metapsicologia freudiana, identificação de neuroses, psicoses, perversões e estruturas psíquicas."
      },
      {
        title: "2. Psicanálise Aprofundamento & Humanista",
        description: "Teorias pós-freudianas, herança emocional transgeracional e correntes humanistas de escuta e acolhimento."
      },
      {
        title: "3. Psicanálise Infantil, Desenhos & da Mulher",
        description: "Interpretação psicanalítica do desenho infantil, fases do desenvolvimento, psicanálise sistêmica e clínica feminina."
      },
      {
        title: "4. Supervisão de Atendimento & Estudos de Caso (1 aula online ao vivo por mês)",
        description: "Encontros mensais online ao vivo com análise de casos clínicos reais, manejo de transferência/contratransferência, resistências e enquadre seguro."
      },
      {
        title: "5. Psicoterapia Contextual, Breve & Mentalização",
        description: "Protocolos de intervenção focal, mentalização clínica, ampliação da percepção emocional e autorregulação."
      },
      {
        title: "6. Terapia Cognitiva com Mindfulness, Aceitação & Compromisso",
        description: "Integração de mindfulness com TCC e ACT (Acceptance and Commitment Therapy) para ansiedade e sofrimento existencial."
      },
      {
        title: "7. Psicossomática, Metafísica & Logoterapia",
        description: "A relação mente-corpo na somatização e a busca pelo sentido da vida segundo a Logoterapia de Viktor Frankl."
      },
      {
        title: "8. Prática: Técnicas de Atendimento, TVP & Início na Área",
        description: "Primeiros passos para atuar, enquadre, contratos terapêuticos, psicoterapia de regressão (TVP) e mapas mentais."
      },
      {
        title: "9. Psicanálise Aplicada: Diversidade, Envelhecimento, Instituições & Palestras",
        description: "Clínica na diversidade sexual, envelhecimento, psicanálise organizacional/institucional, antropologia e formação de palestrante."
      }
    ],
    includedBonuses: [
      "Certificado Internacional de 600h emitido nos EUA (Saber Consciente LLC)",
      "Formação 100% Online com Acesso Vitalício"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mirta Cortés Jiménez",
    city: "Orlando, FL - EUA",
    role: "Terapeuta Holística Internacional",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    text: "O certificado internacional emitido pela Saber Consciente Worldwide LLC e chancelado pela Florida Global University abriu as portas para eu atender clientes aqui nos Estados Unidos com total segurança e respeito. A didática da Luciana é simplesmente impecável!",
    rating: 5,
    highlight: "Atende clientes nos EUA e Brasil",
    verified: true,
    courseTaken: "Terapeuta Holístico Master"
  },
  {
    id: "t2",
    name: "Dra. Juliana Peixoto",
    city: "São Paulo, SP",
    role: "Especialista em Neurociência Comportamental",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    text: "A formação em Neurociência Comportamental do Saber Consciente agregou uma base científica sólida às minhas consultas. A chancela internacional da FGU confere um peso imenso ao currículo profissional!",
    rating: 5,
    highlight: "Clínica com agenda cheia",
    verified: true,
    courseTaken: "Neurociência Comportamental"
  },
  {
    id: "t3",
    name: "Carla Silveira Dias",
    city: "Lisboa, Portugal",
    role: "Psicoterapeuta e Psicanalista Clínica",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    text: "A profundidade teórica aliada à prática clínica na formação de Psicoterapia e Psicanálise me deu toda a confiança para iniciar meus atendimentos online na Europa. O suporte da equipe é maravilhoso.",
    rating: 5,
    highlight: "Atendimentos em toda a Europa",
    verified: true,
    courseTaken: "Psicoterapia e Psicanálise"
  },
  {
    id: "t4",
    name: "Rodrigo Mendes",
    city: "Belo Horizonte, MG",
    role: "Terapeuta Holístico Master",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Comecei do zero. As videoaulas mostram cada detalhe prático de Reiki, Florais e Radiestesia. O certificado internacional nos EUA valorizou muito o valor cobrado por sessão.",
    rating: 5,
    highlight: "Triplicou o valor da consulta",
    verified: true,
    courseTaken: "Terapeuta Holístico Master"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Os cursos são presenciais ou 100% online?",
    answer: "Todos os cursos são 100% ONLINE! Você tem total flexibilidade para assistir às videoaulas quando e onde quiser (pelo computador, tablet ou celular), com acesso vitalício e suporte contínuo para tirar dúvidas.",
    category: "Formato"
  },
  {
    question: "Como funciona a Certificação Internacional nos cursos elegíveis?",
    answer: "Os cursos elegíveis possuem emissão direta pela Saber Consciente Worldwide LLC (Estados Unidos), são certificados por @cel.education e avalizados por @fgu_online (Florida Global University), conferindo o título executivo internacional com carga horária registrada (Terapeuta Holístico Master com 568h, Psicoterapia e Psicanálise com 600h e Neurociência Comportamental com 150h).",
    category: "Certificação"
  },
  {
    question: "Quais são os cursos elegíveis para a Certificação Internacional?",
    answer: "Os cursos elegíveis são: 1) 🧠 Neurociência Comportamental + Certificação Internacional; 2) 🌿 Terapeuta Holístico Master + Certificação Internacional; 3) 🛋️ Psicoterapia e Psicanálise + Certificação Internacional.",
    category: "Cursos"
  },
  {
    question: "Preciso ter conhecimento prévio ou formação na área da saúde?",
    answer: "Não! Os cursos foram desenvolvidos com metodologia passo a passo, desde as bases conceituais fundamentais até as técnicas avançadas de atendimento clínico e intervenção profissional.",
    category: "Requisitos"
  },
  {
    question: "Como e quando recebo o acesso ao curso escolhido?",
    answer: "O acesso é imediato! Assim que o seu pagamento for aprovado pela plataforma segura Hotmart, você receberá instantaneamente um e-mail com os dados de acesso à área de membros exclusiva.",
    category: "Acesso"
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "O seu acesso é VITALÍCIO! Você poderá assistir às aulas no seu ritmo pelo computador, tablet ou celular, com direito a todas as atualizações futuras sem qualquer mensalidade.",
    category: "Acesso"
  },
  {
    question: "Como funciona a garantia incondicional de 7 dias?",
    answer: "Você tem 7 dias para acessar a plataforma, assistir às aulas e avaliar o material. Se não ficar 100% satisfeito, basta solicitar o reembolso na Hotmart com 1 clique e todo o seu investimento será devolvido imediatamente.",
    category: "Garantia"
  }
];
