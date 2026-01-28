/**
 * ============================================
 * CONFIGURAÇÕES GERAIS DO SITE
 * ============================================
 *
 * Este arquivo contém todas as informações pessoais, links e metadados do site.
 * É o PRIMEIRO lugar para editar quando quiser atualizar seus dados.
 *
 * COMO USAR:
 * - Mude os valores entre aspas
 * - Salve o arquivo
 * - O site atualiza automaticamente
 *
 * ATENÇÃO: Não mude os nomes das propriedades (ex: "name", "email"),
 * apenas os valores (ex: "Willian Cardoso")
 */

export const siteConfig = {
  // ============================================
  // INFORMAÇÕES PESSOAIS
  // ============================================

  /** Seu nome completo - aparece no header, hero e metadados */
  name: "Willian Cardoso",

  /** Seu título profissional - aparece logo abaixo do nome */
  title: "Lead Product Designer",

  /** Sua localização atual */
  location: "São Paulo, Brazil",

  /** Seu email de contato profissional */
  email: "willian.cardoso@icloud.com",

  /** Breve descrição profissional (1-2 linhas) */
  bio: "7+ years at IBM designing B2B SaaS products, design systems, and data-heavy dashboards. I code in Python, read JavaScript/Vue fluently, and think in systems.",

  // ============================================
  // REDES SOCIAIS E LINKS EXTERNOS
  // ============================================

  links: {
    /** URL completa do seu LinkedIn */
    linkedin: "https://linkedin.com/in/willian-cardoso",

    /** URL completa do seu GitHub (deixe vazio "" se não quiser mostrar) */
    github: "",

    /** Caminho para o arquivo de currículo (deve estar em /public) */
    resume: "/resume.pdf",

    /** Outros links opcionais (deixe vazio "" se não usar) */
    behance: "",
    dribbble: "",
    medium: "",
    twitter: "",
  },

  // ============================================
  // SEO E COMPARTILHAMENTO SOCIAL
  // ============================================
  // Estes dados aparecem quando alguém busca seu site no Google
  // ou compartilha seu link em redes sociais

  seo: {
    /** Título que aparece na aba do navegador e no Google */
    title: "Willian Cardoso — Lead Product Designer",

    /** Descrição para motores de busca e compartilhamentos
     * Máximo recomendado: 155 caracteres
     * Seja específico e use palavras-chave relevantes
     */
    description:
      "Lead Product Designer with 7+ years at IBM. Specializing in enterprise SaaS, design systems, and complex B2B applications. Engineering background, Python skills, neuroscience lens.",

    /** URL do seu site (quando tiver domínio próprio)
     * Durante desenvolvimento local, pode deixar como localhost
     */
    url: "https://williancardoso.com",

    /** Caminho para imagem de compartilhamento social (Open Graph)
     * Tamanho ideal: 1200x630px
     * Formato: PNG ou JPG
     * Deve estar na pasta /public
     */
    ogImage: "/og-image.png",

    /** Palavras-chave para SEO (separadas por vírgula) */
    keywords:
      "product designer, UX designer, UI designer, enterprise design, design systems, B2B design, SaaS design, IBM, portfolio",
  },

  // ============================================
  // DISPONIBILIDADE PARA OPORTUNIDADES
  // ============================================

  availability: {
    /** true = mostra badge verde "Open to opportunities" no hero
     * false = não mostra o badge
     */
    isAvailable: true,

    /** Texto do badge de disponibilidade
     * Seja específico sobre tipo de trabalho e localização
     */
    badgeText: "Open to remote roles — US, UK, Germany, Portugal, NL | Also open to CLT in Brazil",

    /** Status detalhado (opcional - aparece na página About) */
    statusDetails:
      "Currently seeking remote opportunities with product teams that value design-engineering collaboration. Interested in roles: Senior Product Designer, Design Systems Lead, Service Designer.",
  },

  // ============================================
  // CONFIGURAÇÕES DE NAVEGAÇÃO
  // ============================================

  navigation: {
    /** Links do menu principal (header) */
    mainMenu: [
      { label: "Work", href: "/#work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
    ],

    /** Links do rodapé (footer) */
    footerMenu: [
      { label: "LinkedIn", href: "https://linkedin.com/in/willian-cardoso" },
      { label: "Resume", href: "/resume.pdf" },
    ],
  },

  // ============================================
  // CONFIGURAÇÕES TÉCNICAS
  // ============================================

  /** Idioma principal do site (para metadados HTML) */
  language: "en",

  /** Timezone (para datas e horários) */
  timezone: "America/Sao_Paulo",
};

/**
 * ============================================
 * TIPO TYPESCRIPT (não precisa editar)
 * ============================================
 * Define a estrutura do objeto de configuração para autocomplete
 */
export type SiteConfig = typeof siteConfig;
