/**
 * ============================================
 * CONTEÚDO DA PÁGINA INICIAL (HOME)
 * ============================================
 *
 * Todos os textos e configurações da home page estão aqui.
 * Edite este arquivo para mudar o que aparece na página principal.
 *
 * ESTRUTURA DA HOME:
 * 1. Hero Section - Primeira seção grande com headline
 * 2. Differentiators - Cards "What I Bring"
 * 3. Featured Work - Grid de cases em destaque
 * 4. About Preview - Resumo sobre você
 * 5. Contact Section - CTA de contato
 */

export const homeContent = {
  // ============================================
  // HERO SECTION
  // ============================================
  // A primeira coisa que as pessoas veem ao entrar no site
  // Deve ser impactante e específico sobre o que você faz

  hero: {
    /** Headline principal
     * Dica: Use uma afirmação específica sobre seu valor, não genérica
     * Bom: "I design complex enterprise software that people actually want to use"
     * Ruim: "Product Designer creating beautiful experiences"
     */
    headline:
      "I design complex enterprise software that people actually want to use.",

    /** Descrição abaixo do headline (2-3 linhas)
     * Expanda o headline com contexto específico:
     * - Anos de experiência e onde
     * - Especialização
     * - Diferencial único
     */
    description:
      "8 years at IBM designing B2B SaaS products, design systems, and data-heavy dashboards. I code (Python, JS, Vue) and think in systems.",

    /** Texto do botão principal (leva para seção de cases) */
    primaryCTA: "View Work",

    /** Texto do botão secundário (leva para LinkedIn) */
    secondaryCTA: "LinkedIn",
  },

  // ============================================
  // DIFFERENTIATORS SECTION
  // ============================================
  // Cards destacando seus diferenciais profissionais
  // Mostre o que te torna único, não apenas skills genéricas

  differentiators: {
    /** Título da seção */
    sectionTitle: "What I Bring",

    /** Subtítulo opcional (deixe vazio "" se não quiser usar) */
    sectionSubtitle:
      "More than just design — a unique combination of skills that bridges design, code, and research.",

    /** Lista de diferenciais (4 cards recomendado, máximo 6)
     *
     * DICA: Cada card deve ter:
     * - Title: Específico e memorável
     * - Description: Concreto, com exemplos
     * - Icon: Nome do ícone do Lucide React (https://lucide.dev/icons)
     */
    items: [
      {
        title: "Enterprise SaaS Expertise",
        description:
          "Configuration tools, operational dashboards, complex multi-step workflows. 8 years solving problems at IBM scale.",
        icon: "Building2",
      },
      {
        title: "Design-to-Code",
        description:
          "I prototype in code, speak engineering, and understand technical constraints. Python, JavaScript, Vue.",
        icon: "Code2",
      },
      {
        title: "Research Depth",
        description:
          "Neuroscience background + data analytics training. I understand both user behavior and business metrics.",
        icon: "Brain",
      },
      {
        title: "Global Collaboration",
        description:
          "Worked with distributed teams across US, LATAM, and Europe. Fluent in async communication.",
        icon: "Globe",
      },
    ],
  },

  // ============================================
  // FEATURED WORK SECTION
  // ============================================
  // Grid de cases em destaque na home

  featuredWork: {
    /** Título da seção */
    sectionTitle: "Featured Work",

    /** Subtítulo opcional */
    sectionSubtitle:
      "Selected projects showcasing my approach to enterprise product design.",

    /** IDs dos cases para mostrar (na ordem desejada)
     *
     * IMPORTANTE: Estes IDs devem corresponder aos arquivos em /content/cases/
     * Exemplo: "esw" corresponde ao arquivo /content/cases/esw.ts
     *
     * Para mudar a ordem: simplesmente reorganize os IDs no array
     * Para remover um case: delete o ID da lista
     * Para adicionar um case: adicione o ID (e crie o arquivo correspondente)
     */
    caseIds: ["esw", "cortex-s360", "e-config", "igua"],

    /** Texto do link "Ver todos os projetos" (deixe vazio "" para não mostrar) */
    viewAllText: "",
  },

  // ============================================
  // ABOUT PREVIEW SECTION
  // ============================================
  // Resumo sobre você com link para página About completa

  aboutPreview: {
    /** Badge/tag acima do título (opcional) */
    badge: "About",

    /** Título da seção */
    title: "A designer who thinks in systems",

    /** Parágrafos de texto (array de strings)
     * Cada string é um parágrafo
     * Recomendado: 2-3 parágrafos curtos
     */
    paragraphs: [
      "I spent 8 years at IBM Brasil designing enterprise software — from complex configuration tools to operational dashboards. My background in neuroscience and data analytics helps me understand both user behavior and business metrics.",
      "I'm not just a pixel-pusher. I code, I facilitate workshops, I translate between design and engineering. I'm looking for a team that values this interdisciplinary approach.",
    ],

    /** Texto do link para página About completa */
    linkText: "More about me",

    /** Caminho da imagem de preview (opcional)
     * Deixe vazio "" se não quiser mostrar imagem
     */
    image: "/images/profile.jpg",

    /** Alt text da imagem (importante para acessibilidade) */
    imageAlt: "Willian Cardoso working on design",
  },

  // ============================================
  // CONTACT SECTION
  // ============================================
  // Seção final com CTA de contato

  contact: {
    /** Badge/tag acima do título (opcional) */
    badge: "Get in Touch",

    /** Título da seção */
    title: "Let's build something great together",

    /** Descrição (1-2 linhas) */
    description:
      "I'm currently open to remote opportunities. Feel free to reach out via email or LinkedIn.",

    /** Texto do botão de email */
    emailButtonText: "Email Me",

    /** Texto do botão do LinkedIn */
    linkedinButtonText: "Connect on LinkedIn",

    /** Mensagem adicional (opcional)
     * Deixe vazio "" se não quiser usar
     */
    additionalInfo: "Usually respond within 24 hours.",
  },
};

/**
 * ============================================
 * TIPO TYPESCRIPT (não precisa editar)
 * ============================================
 */
export type HomeContent = typeof homeContent;
