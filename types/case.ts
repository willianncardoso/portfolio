/**
 * ============================================
 * TIPOS TYPESCRIPT PARA CASE STUDIES
 * ============================================
 *
 * Este arquivo define a estrutura de dados para um case study.
 * Todos os arquivos de cases devem seguir esta estrutura.
 *
 * O QUE SÃO TIPOS TYPESCRIPT?
 * São como "contratos" que garantem que os dados têm a estrutura correta.
 * Se você tentar criar um case sem algum campo obrigatório, o TypeScript
 * vai avisar com erro antes mesmo de rodar o código.
 *
 * VOCÊ NÃO PRECISA EDITAR ESTE ARQUIVO (a menos que queira adicionar novos campos)
 */

/**
 * METADADOS DO PROJETO
 * Informações básicas sobre o projeto
 */
export interface CaseMetadata {
  /** Seu papel no projeto (ex: "Lead Product Designer") */
  role: string;

  /** Duração do projeto (ex: "2023 - 2024", "6 months") */
  timeline: string;

  /** Tamanho e composição do time (ex: "2 designers, 4 developers, 1 PM") */
  team: string;

  /** Empresa onde o projeto foi realizado */
  company: string;

  /** Cliente (se aplicável, opcional) */
  client?: string;
}

/**
 * MÉTRICAS DE IMPACTO
 * Resultados quantitativos do projeto
 */
export interface CaseMetric {
  /** Valor da métrica (ex: "40%", "$2B+", "10x") */
  value: string;

  /** Descrição da métrica (ex: "Reduction in configuration time") */
  label: string;

  /** Ícone (opcional) - nome do ícone do Lucide React */
  icon?: string;
}

/**
 * IMAGENS DO CASE
 * Caminhos para as imagens usadas no case
 */
export interface CaseImages {
  /** Imagem do card na home (aspect ratio 16:10 recomendado) */
  cover: string;

  /** Imagem hero da página do case (widescreen recomendado) */
  hero: string;

  /** Alt text da imagem hero (importante para acessibilidade) */
  heroAlt: string;
}

/**
 * SEÇÃO DE DESAFIO
 * Descreve o problema que foi resolvido
 */
export interface CaseChallenge {
  /** Descrição geral do desafio */
  description: string;

  /** Lista de pontos específicos do problema */
  points: string[];

  /** Imagem ilustrando o problema (opcional) */
  image?: string;

  /** Alt text da imagem */
  imageAlt?: string;
}

/**
 * ETAPA DO PROCESSO
 * Uma fase do seu approach/processo de design
 */
export interface CaseApproachStep {
  /** Título da etapa (ex: "Understanding the users") */
  title: string;

  /** Descrição do que foi feito nesta etapa */
  description: string;

  /** Imagem ilustrando esta etapa (opcional) */
  image?: string;

  /** Alt text da imagem */
  imageAlt?: string;

  /** Caption/legenda da imagem (opcional) */
  imageCaption?: string;
}

/**
 * HIGHLIGHT DA SOLUÇÃO
 * Destaca uma parte importante da solução
 */
export interface CaseSolutionHighlight {
  /** Título do highlight */
  title: string;

  /** Descrição do que foi feito */
  description: string;

  /** Imagem (opcional) */
  image?: string;

  /** Alt text da imagem */
  imageAlt?: string;
}

/**
 * SEÇÃO DE SOLUÇÃO
 * Descreve a solução implementada
 */
export interface CaseSolution {
  /** Descrição geral da solução */
  description: string;

  /** Lista de highlights (melhorias principais) */
  highlights: CaseSolutionHighlight[];

  /** Imagem principal da solução */
  mainImage?: string;

  /** Alt text da imagem principal */
  mainImageAlt?: string;

  /** Caption da imagem principal */
  mainImageCaption?: string;
}

/**
 * CONTEÚDO COMPLETO DO CASE
 * Todo o conteúdo textual e visual do case study
 */
export interface CaseContent {
  /** Overview - Introdução ao projeto (1-2 parágrafos) */
  overview: string[];

  /** Challenge - O problema a ser resolvido */
  challenge: CaseChallenge;

  /** Approach - Processo de design (etapas) */
  approach: CaseApproachStep[];

  /** Solution - O que foi criado */
  solution: CaseSolution;

  /** Results - Resultados e impacto (array de strings com markdown) */
  results: string[];

  /** Learnings - Aprendizados do projeto (array de strings) */
  learnings: string[];

  /** Imagens adicionais (opcional) */
  additionalImages?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

/**
 * CASE STUDY COMPLETO
 * Estrutura completa de um case study
 */
export interface CaseStudy {
  // ============================================
  // IDENTIFICAÇÃO
  // ============================================

  /** ID único do case (usado na URL, ex: "esw" → /cases/esw) */
  id: string;

  /** Ordem de exibição (1 = primeiro) */
  order: number;

  // ============================================
  // HEADER
  // ============================================

  /** Categoria/tag do projeto (ex: "Enterprise SaaS", "Mobile App") */
  category: string;

  /** Título principal do case */
  title: string;

  /** Subtítulo/descrição curta (1 linha) */
  subtitle: string;

  /** Descrição para o card na home (mais curta, ~100 caracteres) */
  cardDescription: string;

  // ============================================
  // DADOS DO PROJETO
  // ============================================

  /** Metadados (role, timeline, team, company) */
  metadata: CaseMetadata;

  /** Imagens (cover, hero) */
  images: CaseImages;

  /** Métricas de impacto (aparecem em destaque) */
  metrics: CaseMetric[];

  /** Conteúdo completo do case */
  content: CaseContent;

  // ============================================
  // NAVEGAÇÃO
  // ============================================

  /** ID do próximo case (para link "Next project")
   * Deixe como null se for o último case
   */
  nextCaseId: string | null;

  /** ID do case anterior (opcional, calculado automaticamente) */
  previousCaseId?: string | null;

  // ============================================
  // SEO (opcional)
  // ============================================

  /** Palavras-chave específicas deste case (para SEO) */
  keywords?: string[];

  /** Descrição customizada para SEO (se não fornecida, usa cardDescription) */
  seoDescription?: string;
}

/**
 * ============================================
 * TIPO HELPER: RESUMO DE CASE
 * ============================================
 * Versão simplificada para exibir cards de cases
 */
export interface CasePreview {
  id: string;
  title: string;
  category: string;
  cardDescription: string;
  coverImage: string;
  order: number;
}
