/**
 * ============================================
 * FUNÇÕES UTILITÁRIAS
 * ============================================
 *
 * Funções auxiliares reutilizáveis em todo o projeto.
 * Ajudam a evitar repetição de código.
 */

import { clsx, type ClassValue } from "clsx";

/**
 * COMBINAR CLASSES CSS
 *
 * Combina múltiplas classes CSS do Tailwind de forma inteligente,
 * removendo duplicatas e resolvendo conflitos.
 *
 * USO:
 * cn("text-red-500", "bg-blue-500")  → "text-red-500 bg-blue-500"
 * cn("text-red-500", condition && "text-blue-500")  → Aplica text-blue-500 só se condition for true
 *
 * @param inputs - Classes CSS para combinar
 * @returns String com classes combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * FORMATAR DATA
 *
 * Formata uma data para exibição legível.
 *
 * USO:
 * formatDate(new Date())  → "Jan 22, 2024"
 *
 * @param date - Data a ser formatada
 * @param locale - Localização (padrão: "en-US")
 * @returns Data formatada como string
 */
export function formatDate(date: Date, locale: string = "en-US"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

/**
 * CRIAR SLUG A PARTIR DE TEXTO
 *
 * Converte texto em slug URL-friendly.
 * Ex: "My Project Name" → "my-project-name"
 *
 * USO:
 * slugify("Hello World!")  → "hello-world"
 *
 * @param text - Texto para converter
 * @returns Slug URL-friendly
 */
export function slugify(text: string): string {
  return text
    .toLowerCase() // Converte para minúsculas
    .trim() // Remove espaços das pontas
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/[^\w\-]+/g, "") // Remove caracteres especiais
    .replace(/\-\-+/g, "-") // Substitui múltiplos hífens por um único
    .replace(/^-+/, "") // Remove hífen do início
    .replace(/-+$/, ""); // Remove hífen do final
}

/**
 * TRUNCAR TEXTO
 *
 * Corta texto em um número máximo de caracteres, adicionando "..." no final.
 *
 * USO:
 * truncate("This is a long text", 10)  → "This is a..."
 *
 * @param text - Texto para truncar
 * @param maxLength - Tamanho máximo
 * @returns Texto truncado
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * OBTER INICIAIS DE UM NOME
 *
 * Extrai as iniciais de um nome completo.
 * Ex: "John Doe" → "JD"
 *
 * USO:
 * getInitials("Willian Cardoso")  → "WC"
 *
 * @param name - Nome completo
 * @returns Iniciais em maiúsculas
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2); // Pega apenas as 2 primeiras letras
}

/**
 * VERIFICAR SE É URL EXTERNA
 *
 * Verifica se uma URL é externa (não pertence ao site).
 *
 * USO:
 * isExternalUrl("https://google.com")  → true
 * isExternalUrl("/about")  → false
 *
 * @param url - URL para verificar
 * @returns true se for URL externa
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * DELAY (para animações e testes)
 *
 * Aguarda um tempo específico antes de continuar.
 * Útil para criar delays em animações ou simular loading.
 *
 * USO:
 * await delay(1000)  → Aguarda 1 segundo
 *
 * @param ms - Tempo em milissegundos
 * @returns Promise que resolve após o tempo especificado
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * SCROLL SUAVE PARA ELEMENTO
 *
 * Faz scroll suave até um elemento na página.
 *
 * USO:
 * scrollToElement("work")  → Scrolla até elemento com id="work"
 *
 * @param elementId - ID do elemento (sem #)
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

/**
 * COPIAR TEXTO PARA CLIPBOARD
 *
 * Copia texto para a área de transferência do usuário.
 *
 * USO:
 * await copyToClipboard("Texto para copiar")
 *
 * @param text - Texto para copiar
 * @returns Promise que resolve quando copiado com sucesso
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy text:", err);
    return false;
  }
}
