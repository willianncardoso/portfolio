/**
 * ============================================
 * CASE STUDY: ESW (Entitled Software)
 * ============================================
 *
 * Redesign da plataforma de licenciamento de software da IBM.
 * Principal case do portfólio - mostra trabalho em enterprise SaaS.
 */

import { CaseStudy } from "@/types";

export const eswCase: CaseStudy = {
  // ============================================
  // IDENTIFICAÇÃO
  // ============================================

  id: "esw",
  order: 1,

  // ============================================
  // HEADER
  // ============================================

  category: "Enterprise SaaS",
  title: "ESW: Redesigning IBM's Software Licensing Platform",
  subtitle:
    "Simplifying enterprise software configuration for global sales teams",
  cardDescription: "Reduced configuration time by 40% for global sales teams",

  // ============================================
  // METADADOS
  // ============================================

  metadata: {
    role: "Lead Product Designer",
    timeline: "2023 - 2024",
    team: "2 designers, 4 developers, 1 PM",
    company: "IBM",
  },

  // ============================================
  // IMAGENS
  // ============================================

  images: {
    cover: "/images/cases/esw/cover.png",
    hero: "/images/cases/esw/hero.png",
    heroAlt: "ESW platform interface showing the redesigned configuration flow",
  },

  // ============================================
  // MÉTRICAS DE IMPACTO
  // ============================================

  metrics: [
    {
      value: "40%",
      label: "Reduction in configuration time",
    },
    {
      value: "$2B+",
      label: "Annual transactions supported",
    },
    {
      value: "+25",
      label: "NPS improvement",
    },
  ],

  // ============================================
  // CONTEÚDO COMPLETO
  // ============================================

  content: {
    // OVERVIEW
    overview: [
      "IBM's Entitled Software (ESW) platform is the backbone of how the company manages software licensing for enterprise clients worldwide. Thousands of sales representatives use it daily to configure complex software bundles worth millions of dollars.",
      "When I joined the project, the platform was showing its age. Users complained about slow workflows, confusing terminology, and frequent errors that delayed sales cycles.",
    ],

    // CHALLENGE
    challenge: {
      description:
        "The existing interface had grown organically over 15 years, accumulating features without a coherent design strategy. Key problems included:",
      points: [
        "Configuration flows had 47 steps — many unnecessary",
        "Error messages were cryptic, written by engineers for engineers",
        "No visual hierarchy — everything looked equally important",
        "Training new sales reps took 3+ weeks",
      ],
      image: "/images/cases/esw/problem.png",
      imageAlt: "Old ESW interface showing complexity",
    },

    // APPROACH
    approach: [
      {
        title: "Understanding the users",
        description:
          "I shadowed 8 sales representatives across 3 regions (US, Brazil, Germany) to understand their real workflows — not the documented ones, but how they actually got things done.",
        image: "/images/cases/esw/research.png",
        imageAlt: "Affinity mapping from user interviews",
        imageCaption: "Affinity mapping from user interviews",
      },
      {
        title: "Mapping the complexity",
        description:
          "I created a comprehensive flow diagram of the entire configuration process, identifying redundant steps, decision points, and error-prone areas.",
        image: "/images/cases/esw/flow.png",
        imageAlt: "Configuration flow diagram",
        imageCaption: "Mapping the 47-step configuration process",
      },
      {
        title: "Iterative design",
        description:
          "Rather than a big-bang redesign, I proposed incremental improvements that could be tested and deployed quickly. Each sprint delivered measurable value.",
        image: "/images/cases/esw/iterations.png",
        imageAlt: "Design iterations from wireframes to final UI",
        imageCaption: "Evolution from wireframes to final UI",
      },
    ],

    // SOLUTION
    solution: {
      description:
        "The redesigned platform introduced several key improvements:",
      highlights: [
        {
          title: "Simplified flow",
          description:
            "Reduced configuration from 47 steps to 12 by eliminating redundancies and using smart defaults based on client history.",
          image: "/images/cases/esw/new-flow.png",
          imageAlt: "Simplified 12-step flow",
        },
        {
          title: "Real-time validation",
          description:
            "Instead of showing errors at the end, the system now validates each step in real-time with clear, actionable messages.",
          image: "/images/cases/esw/validation.png",
          imageAlt: "Real-time validation interface",
        },
        {
          title: "Component library",
          description:
            "Created a shared component library that reduced design-dev handoff time by 60% and ensured consistency across the platform.",
          image: "/images/cases/esw/components.png",
          imageAlt: "Design system components",
        },
      ],
      mainImage: "/images/cases/esw/final-ui.png",
      mainImageAlt: "The redesigned configuration interface",
      mainImageCaption: "The redesigned configuration interface",
    },

    // RESULTS
    results: [
      "**40% faster** — Average configuration time dropped from 25 to 15 minutes",
      "**70% fewer errors** — Real-time validation caught issues early",
      "**Training time halved** — New reps productive in 1.5 weeks instead of 3",
      "**NPS +25 points** — User satisfaction improved significantly",
    ],

    // LEARNINGS
    learnings: [
      "Enterprise software doesn't have to feel 'enterprise.' Users appreciate when you respect their time and cognitive load, even in complex B2B tools.",
      "Incremental delivery was key — shipping small improvements every sprint built trust with stakeholders and allowed us to course-correct based on real usage data.",
    ],
  },

  // ============================================
  // NAVEGAÇÃO
  // ============================================

  nextCaseId: "cortex-s360",
};
