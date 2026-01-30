/**
 * Helper para resolver paths de imagens com basePath
 * Necessário porque Next.js Image com unoptimized não aplica basePath automaticamente
 */
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

/**
 * Resolve o path da imagem adicionando o basePath em produção
 * @param path - Caminho da imagem (ex: "/images/thumb.png")
 * @returns Caminho com basePath em produção (ex: "/portfolio/images/thumb.png")
 */
export function getImagePath(path: string): string {
  if (!path) return path;
  
  // Se já tem basePath, não adiciona novamente
  if (path.startsWith(BASE_PATH) && BASE_PATH) return path;
  
  return `${BASE_PATH}${path}`;
}

export { BASE_PATH };
