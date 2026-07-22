export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarPlaceholder?: string;
}

export const siteConfig = {
  name: "CabralMov",
  subtitle: "Pilates & Saúde",
  handle: "@cabralmov",
  instagramUrl: "https://instagram.com/cabralmov",

  // ──────────────────────────────────────────────────────────────────────────
  // DADOS REAIS EXTRAÍDOS DO PERFIL DA EMPRESA E CURRÍCULO LATTES
  // ──────────────────────────────────────────────────────────────────────────
  
  /** WhatsApp principal para todos os CTAs */
  whatsappNumber: "5547991290902",
  
  /** Mensagem padrão do WhatsApp */
  whatsappDefaultMessage: "Olá! Gostaria de agendar uma aula experimental no CabralMov.",

  /** Endereço completo verificado */
  enderecoCompleto: "R. XV de Novembro, 534 - Sl 43 - Centro, Blumenau - SC, 89010-001",

  /** URL de Embed do Google Maps (R. XV de Novembro, 534 - Centro, Blumenau/SC) */
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.514742792629!2d-49.0664917!3d-26.9189689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df19c0b115cb9f%3A0x6b772c3d5ef8968b!2sR.%20XV%20de%20Novembro%2C%20534%20-%20Centro%2C%20Blumenau%20-%20SC%2C%2089010-001!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",

  /** Nome do Fisioterapeuta Responsável */
  nomeProfissional: "Dr. Mateus Barbosa Cabral",

  /** Registro Profissional */
  crefitoOuFormacao: "CREFITO 10/333927-F",

  /** Link do Currículo Lattes Oficial CNPq */
  lattesUrl: "http://lattes.cnpq.br/1151213625445143",

  /** Resumo das Qualificações Atualizadas do Lattes */
  qualificacoes: [
    "Graduação em Fisioterapia (Faculdade Estácio de Alagoas - Estácio FAL)",
    "Especialização em Reabilitação Cardiopulmonar e Metabólica (Instituto HIB - 380h)",
    "Formação Completa em Pilates Solo, Bola e Aparelhos (VOLL Pilates Group - 120h)",
    "Prática Baseada em Evidências (PBE, 2025)",
    "Fisiologia Clínica do Exercício e Reabilitação Cardiopulmonar e Metabólica (CCR)",
    "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF / COFFITO - 20h)",
    "Reabilitação Funcional & Tratamento de Hérnias de Disco Lombares",
  ],

  /** Horários de atendimento */
  horariosAtendimento: "Segunda a Sexta-feira: 07h às 20h | Sábados: sob agendamento",

  /** Depoimentos REAIS de alunos extraídos do Google Avaliações (5.0 ★ - 18 Avaliações) */
  depoimentos: [
    {
      id: "1",
      name: "Alanna Maisa Ph",
      role: "Aluna no Google (5.0 ★)",
      content: "Eu amo! A aula é dinâmica, alinhada aos nossos desejos e metas. Além disso o Mateus tem muita paciência e respeita nosso momento. Não apenas o momento do nosso corpo, mas nosso momento emocional também, é um atendimento empático. Recomendo muito.",
    },
    {
      id: "2",
      name: "Yuri Souza",
      role: "Aluno no Google (5.0 ★)",
      content: "Pilates fenomenal, diferente de todos que eu já fui. Profissionalismo e técnicas descrevem bem o atendimento no estúdio.",
    },
    {
      id: "3",
      name: "Pérola Lima",
      role: "Aluna no Google (5.0 ★)",
      content: "Depois da aula experimental descobri musculaturas que eu nem sabia que existiam! O acompanhamento é atencioso demais.",
    },
    {
      id: "4",
      name: "Isis Mesquita",
      role: "Aluna no Google (5.0 ★)",
      content: "Espaço muito organizado e acolhedor. Profissionais atenciosos e bem preparados. Recomendo demais!!",
    },
    {
      id: "5",
      name: "Gabriela Nascimento",
      role: "Aluna no Google (5.0 ★)",
      content: "Clínica excelente, com equipe muito qualificada. Sempre fui bem atendida. Super recomendo!",
    },
  ] as Testimonial[],

  // ──────────────────────────────────────────────────────────────────────────
  // COPY E PILARES DA MARCA (Identidade Institucional CabralMov)
  // ──────────────────────────────────────────────────────────────────────────
  taglines: {
    heroTitle: "Devolvemos a sua liberdade de movimento.",
    heroSubtitle: "Pilates clínico, treino funcional e reabilitação no Centro de Blumenau. Unimos a precisão da fisioterapia, o fortalecimento do pilates em aparelhos Kauffer e a dinâmica da mecânica humana para um corpo forte e sem dor.",
    manifestoQuote: "Os únicos remédios que eu prescrevo — e que você não encontra na farmácia.",
    manifestoSub: "Movimento intencional. Cada sessão é desenhada para reprogramar o seu corpo, alinhar a sua estrutura e restaurar a sua autonomia diária.",
    diferencialHandwriting: "Cada corpo tem uma história.",
    ctaFinalQuestion: "Você cuida do carro, da casa, do trabalho. Mas quando foi a última vez que cuidou do seu corpo?",
    longevidade: "Longevidade é o novo luxo.",
  },

  pilares: [
    {
      id: "pilates",
      title: "Pilates Clínico & Clássico",
      description: "Prática em aparelhos profissionais Kauffer (Reformer, Cadillac, Chair e Barrels). Fortalecimento do core, descompressão articular e reeducação postural baseada na Formação VOLL Pilates (120h).",
      icon: "reformer",
    },
    {
      id: "funcional",
      title: "Treino Funcional Integrado",
      description: "Construção de força consciente, estabilidade e capacidade motora respaldadas pela Fisiologia Clínica do Exercício (CCR).",
      icon: "activity",
    },
    {
      id: "reabilitacao",
      title: "Reabilitação & Fisioterapia",
      description: "Tratamento de hérnias de disco, dores crônicas e reabilitação cardiopulmonar e metabólica conduzidos pelo Dr. Mateus Cabral com Prática Baseada em Evidências (PBE).",
      icon: "shield",
    },
  ],

  publicoAlvo: [
    {
      title: "Dor Crônica & Postura",
      desc: "Alívio efetivo de dores na lombar, cervical, ciático e reabilitação postural especializada de hérnias de disco.",
    },
    {
      title: "Reabilitação de Lesão",
      desc: "Recuperação segura e progressiva de lesões musculares, articulares e pós-operatórios.",
    },
    {
      title: "Longevidade & Mobilidade",
      desc: "Manutenção da autonomia física, flexibilidade e densidade articular para um envelhecimento ativo.",
    },
    {
      title: "Gestantes & Pós-Parto",
      desc: "Preparação pélvica, estabilização do tronco e alívio de sobrecargas durante a gestação e pós-parto.",
    },
    {
      title: "Protocolo para Lipedema",
      desc: "Exercícios de baixo impacto e estímulo do retorno venoso e metabólico para alívio de dores e inchaço nas pernas.",
    },
    {
      title: "Performance & Autocuidado",
      desc: "Para quem busca otimizar a mecânica corporal, prevenir lesões e cultivar bem-estar diário.",
    },
  ],

  diferenciais: [
    {
      number: "01",
      title: "Avaliação & Atendimento Individualizado",
      desc: "Sem treinos genéricos. Cada sessão é adaptada às suas necessidades biológicas e restrições biomecânicas.",
    },
    {
      number: "02",
      title: "Turmas Reduzidas & Atenção Total",
      desc: "Grupos restritos de alunos para garantir supervisão constante de cada movimento e ajuste postural empático.",
    },
    {
      number: "03",
      title: "Aparelhos Profissionais Kauffer",
      desc: "Equipamentos de referência em madeira nobre e molas de alta precisão no Centro de Blumenau.",
    },
    {
      number: "04",
      title: "Dr. Mateus Cabral (CREFITO 10/333927-F)",
      desc: "Especialista em Reabilitação Cardiopulmonar e Metabólica, Formação VOLL Pilates (120h) e Prática Baseada em Evidências.",
    },
  ],

  getWhatsappLink(customText?: string) {
    const cleanNumber = this.whatsappNumber.replace(/\D/g, "");
    const text = encodeURIComponent(customText || this.whatsappDefaultMessage);
    return `https://wa.me/${cleanNumber}?text=${text}`;
  },
};
