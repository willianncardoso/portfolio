/**
 * ============================================
 * INDEX DE CASES
 * ============================================
 *
 * Exporta todos os cases do portfólio em um único lugar.
 * Facilita importar e usar os cases em qualquer página.
 *
 * COMO ADICIONAR UM NOVO CASE:
 * 1. Crie o arquivo do case em content/cases/nome-do-case.ts
 * 2. Importe o case aqui: import { novoCaseCase } from "./nome-do-case"
 * 3. Adicione no array allCases
 * 4. Ajuste o nextCaseId do case anterior para apontar para o novo
 */

import { eswCase } from "./esw";
import { cortexCase } from "./cortex-s360";
import { econfigCase } from "./e-config";
import { iguaCase } from "./igua";
import { CaseStudy } from "@/types";

/**
 * TODOS OS CASES
 * Array com todos os cases, ordenados por ordem de exibição
 */
export const allCases: CaseStudy[] = [
  eswCase,
  cortexCase,
  econfigCase,
  iguaCase,
];

/**
 * BUSCAR CASE POR ID
 * Função auxiliar para encontrar um case pelo seu ID
 *
 * USO:
 * const case = getCaseById("esw")
 */
export function getCaseById(id: string): CaseStudy | undefined {
  return allCases.find((caseItem) => caseItem.id === id);
}

/**
 * OBTER TODOS OS IDS
 * Retorna array com os IDs de todos os cases
 * Útil para gerar rotas estáticas no Next.js
 */
export function getAllCaseIds(): string[] {
  return allCases.map((caseItem) => caseItem.id);
}

/**
 * OBTER CASES EM DESTAQUE
 * Retorna os cases que devem aparecer na home
 * Baseado nos IDs definidos em home-content.ts
 */
export function getFeaturedCases(featuredIds: string[]): CaseStudy[] {
  return featuredIds
    .map((id) => getCaseById(id))
    .filter((caseItem): caseItem is CaseStudy => caseItem !== undefined);
}
