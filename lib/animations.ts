/**
 * ============================================
 * BIBLIOTECA DE ANIMAÇÕES
 * ============================================
 *
 * Presets de animação para usar com Framer Motion.
 * Mantém as animações consistentes em todo o site.
 *
 * O QUE É FRAMER MOTION?
 * É uma biblioteca que facilita criar animações suaves em React.
 * Em vez de escrever CSS complexo, você usa estes presets.
 *
 * COMO USAR:
 * import { fadeInUp } from "@/lib/animations"
 * import { motion } from "framer-motion"
 *
 * <motion.div {...fadeInUp}>
 *   Conteúdo que vai animar
 * </motion.div>
 *
 * ESTRUTURA DAS ANIMAÇÕES:
 * - initial: Estado inicial (antes da animação)
 * - whileInView: Estado final (depois da animação)
 * - transition: Como a animação acontece (duração, easing)
 * - viewport: Quando a animação é ativada
 */

// Animations library for Framer Motion

/**
 * ============================================
 * VARIANTES COMUNS DE TRANSIÇÃO
 * ============================================
 */

/** Duração padrão das animações (em segundos) */
export const ANIMATION_DURATION = 0.3;

/** Delay entre animações em sequência (stagger) */
export const STAGGER_DELAY = 0.05;

/** Curva de easing (aceleração) padrão */
export const DEFAULT_EASE = "easeOut" as const;

/**
 * ============================================
 * FADE IN UP
 * ============================================
 * Elemento aparece subindo de baixo para cima.
 * Bom para: títulos, parágrafos, cards
 *
 * COMPORTAMENTO:
 * - Começa invisível (opacity: 0) e 20px abaixo (y: 20)
 * - Anima para visível (opacity: 1) na posição normal (y: 0)
 * - Leva 0.5 segundos para completar
 * - Só anima uma vez (não repete ao scrollar de volta)
 */
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: ANIMATION_DURATION,
    ease: DEFAULT_EASE,
  },
  viewport: {
    once: true, // Anima só uma vez
    margin: "0px 0px -100px 0px", // Começa a animar um pouco antes de entrar na tela
  },
};

/**
 * ============================================
 * FADE IN (sem movimento)
 * ============================================
 * Elemento só aparece suavemente, sem movimento.
 * Bom para: imagens, backgrounds, elementos grandes
 */
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  transition: {
    duration: ANIMATION_DURATION,
    ease: DEFAULT_EASE,
  },
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px",
  },
};

/**
 * ============================================
 * FADE IN DOWN
 * ============================================
 * Elemento aparece descendo de cima para baixo.
 * Bom para: headers, navegação, alerts
 */
export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: ANIMATION_DURATION,
    ease: DEFAULT_EASE,
  },
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px",
  },
};

/**
 * ============================================
 * FADE IN LEFT
 * ============================================
 * Elemento aparece vindo da esquerda.
 * Bom para: imagens alternadas, conteúdo lateral
 */
export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -20,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: ANIMATION_DURATION,
    ease: DEFAULT_EASE,
  },
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px",
  },
};

/**
 * ============================================
 * FADE IN RIGHT
 * ============================================
 * Elemento aparece vindo da direita.
 * Bom para: imagens alternadas, conteúdo lateral
 */
export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 20,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: ANIMATION_DURATION,
    ease: DEFAULT_EASE,
  },
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px",
  },
};

/**
 * ============================================
 * SCALE IN
 * ============================================
 * Elemento aparece crescendo (de 95% para 100%).
 * Bom para: modais, popups, cards especiais
 */
export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: ANIMATION_DURATION,
    ease: DEFAULT_EASE,
  },
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px",
  },
};

/**
 * ============================================
 * STAGGER CONTAINER
 * ============================================
 * Usado no elemento PAI quando você quer que os FILHOS
 * apareçam em sequência (um depois do outro).
 *
 * COMO USAR:
 * <motion.div {...staggerContainer}>
 *   <motion.div {...staggerItem}>Item 1</motion.div>
 *   <motion.div {...staggerItem}>Item 2</motion.div>
 *   <motion.div {...staggerItem}>Item 3</motion.div>
 * </motion.div>
 *
 * RESULTADO: Item 1 aparece, depois Item 2, depois Item 3
 */
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: STAGGER_DELAY, // 0.1s de delay entre cada filho
      delayChildren: 0, // Começa imediatamente
    },
  },
  viewport: {
    once: true,
    margin: "0px 0px -50px 0px",
  },
};

/**
 * STAGGER ITEM
 * Usado nos elementos FILHOS do staggerContainer.
 * Combina com fadeInUp para criar efeito cascata.
 */
export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: ANIMATION_DURATION,
    ease: DEFAULT_EASE,
  },
};

/**
 * ============================================
 * HOVER EFFECTS (para interações)
 * ============================================
 */

/**
 * LIFT ON HOVER
 * Levanta o elemento ao passar o mouse.
 * Bom para: cards, botões, links
 *
 * USO:
 * <motion.div whileHover={liftOnHover}>
 *   Conteúdo
 * </motion.div>
 */
export const liftOnHover = {
  y: -5,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

/**
 * SCALE ON HOVER
 * Aumenta levemente o tamanho ao passar o mouse.
 * Bom para: imagens, ícones, botões
 */
export const scaleOnHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

/**
 * ============================================
 * VARIANTES CUSTOMIZADAS
 * ============================================
 * Para casos mais específicos onde você precisa de mais controle
 */

/**
 * Cria uma animação fadeInUp com delay customizado.
 *
 * USO:
 * <motion.div {...fadeInUpWithDelay(0.2)}>
 *   Vai animar 0.2s depois dos outros
 * </motion.div>
 */
export function fadeInUpWithDelay(delay: number) {
  return {
    ...fadeInUp,
    transition: {
      ...fadeInUp.transition,
      delay,
    },
  };
}

/**
 * Cria uma animação fadeIn com duração customizada.
 *
 * USO:
 * <motion.div {...fadeInWithDuration(1)}>
 *   Vai animar por 1 segundo
 * </motion.div>
 */
export function fadeInWithDuration(duration: number) {
  return {
    ...fadeIn,
    transition: {
      ...fadeIn.transition,
      duration,
    },
  };
}

/**
 * ============================================
 * PÁGINA TRANSITION
 * ============================================
 * Para transições entre páginas
 */
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
  transition: {
    duration: 0.3,
    ease: DEFAULT_EASE,
  },
};
