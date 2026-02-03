/**
 * ============================================
 * INDEX DE TIPOS TYPESCRIPT
 * ============================================
 *
 * Este arquivo exporta todos os tipos TypeScript do projeto.
 * Permite importar tipos de um único lugar.
 *
 * USO:
 * import { CaseStudy, CaseMetric } from "@/types"
 *
 * Em vez de:
 * import { CaseStudy } from "@/types/case"
 * import { CaseMetric } from "@/types/case"
 */

// Exporta todos os tipos de case studies
export type {
  CaseStudy,
  CaseMetadata,
  CaseMetric,
  CaseImages,
  CaseChallenge,
  CaseApproachStep,
  CaseSolutionHighlight,
  CaseSolution,
  CaseContent,
  CasePreview,
  ProcessStep,
  CaseSidebarSection,
  CaseBackground,
  CaseWhyRedesign,
  CaseDesignStrategy,
  CaseKeyDecision,
  CaseImpact,
  CaseReflection,
} from "./case";

// Se adicionar mais arquivos de tipos no futuro, exporte aqui também
// Exemplo:
// export type { User, UserProfile } from "./user"
// export type { BlogPost, BlogCategory } from "./blog"
