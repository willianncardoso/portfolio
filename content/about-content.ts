/**
 * ============================================
 * CONTEÚDO DA PÁGINA ABOUT (SOBRE MIM)
 * ============================================
 *
 * Todos os textos da página "About" estão aqui.
 * Esta é a página onde você conta sua história profissional em mais detalhes.
 *
 * ESTRUTURA DA PÁGINA ABOUT:
 * 1. Hero - Introdução pessoal
 * 2. Story - Sua trajetória profissional
 * 3. Skills - Competências técnicas e soft skills
 * 4. Experience - Timeline de experiência profissional
 * 5. Education - Formação acadêmica
 * 6. Currently - O que você está fazendo/buscando agora
 */

export const aboutContent = {
  // ============================================
  // HERO (Introdução)
  // ============================================

  hero: {
    /** Título principal da página */
    title: "Designing at the intersection of research, code, and systems thinking",

    /** Subtítulo/descrição (2-3 linhas) */
    description:
      "I'm a product designer who doesn't just design — I code, research, and think in systems. My background in neuroscience and data analytics gives me a unique lens on how people interact with complex software.",

    /** Caminho da imagem (foto maior, mais elaborada que a da home) */
    image: "/images/profile-large.jpg",

    /** Alt text da imagem */
    imageAlt: "Willian Cardoso - Senior Product Designer",
  },

  // ============================================
  // STORY (Sua História)
  // ============================================
  // Conte sua trajetória de forma narrativa

  story: {
    /** Título da seção */
    sectionTitle: "My Journey",

    /** Parágrafos contando sua história
     * Seja pessoal, mas profissional
     * Mostre evolução, não só fatos
     */
    paragraphs: [
      "I didn't start as a designer. My academic path took me through neuroscience, aerospace engineering, and data analytics. Each detour taught me something valuable: how to think systematically, how to work with complex data, and how to ask the right questions.",
      "When I joined IBM Brasil in 2017, I found the perfect intersection of these interests. Enterprise software needs designers who can handle complexity — not just visual complexity, but conceptual and technical complexity. I thrived in that environment.",
      "Over 8 years, I evolved from UX/UI Designer to Service Designer to Senior Product Designer. I worked on everything from customer-facing configuration tools to internal operational dashboards. The common thread? Making complex systems feel intuitive.",
      "What makes me different is that I don't stop at Figma. I code prototypes, I dig into technical constraints, I facilitate cross-functional workshops. I speak the language of engineers, PMs, and users equally well.",
    ],
  },

  // ============================================
  // SKILLS
  // ============================================
  // Organize suas competências em categorias

  skills: {
    /** Título da seção */
    sectionTitle: "Skills & Tools",

    /** Categorias de skills
     * Cada categoria tem um título e uma lista de skills
     */
    categories: [
      {
        title: "Design",
        items: [
          "Product Design",
          "Design Systems",
          "Service Design",
          "User Research",
          "Prototyping",
          "Information Architecture",
          "Interaction Design",
          "Visual Design",
        ],
      },
      {
        title: "Tools",
        items: [
          "Figma (Advanced)",
          "Adobe Creative Suite",
          "Sketch",
          "Figjam",
          "Miro",
          "Notion",
          "Jira",
          "Confluence",
        ],
      },
      {
        title: "Code",
        items: [
          "Python (Intermediate)",
          "JavaScript (Basic)",
          "Vue.js (Basic)",
          "HTML/CSS",
          "Git",
          "React (Learning)",
        ],
      },
      {
        title: "Methods",
        items: [
          "Design Thinking",
          "Jobs-to-be-Done",
          "User Story Mapping",
          "Lean UX",
          "Atomic Design",
          "Design Sprints",
          "Usability Testing",
          "A/B Testing",
        ],
      },
    ],
  },

  // ============================================
  // EXPERIENCE (Experiência Profissional)
  // ============================================
  // Timeline da sua carreira

  experience: {
    /** Título da seção */
    sectionTitle: "Experience",

    /** Lista de experiências (da mais recente para a mais antiga) */
    items: [
      {
        /** Cargo/posição */
        role: "Senior Product Designer",

        /** Empresa */
        company: "IBM Brasil",

        /** Período (texto livre) */
        period: "2022 - 2024",

        /** Descrição e achievements (array de strings) */
        description: [
          "Led redesign of enterprise software licensing platform (ESW), reducing configuration time by 40% and improving NPS by 25 points.",
          "Created and maintained design system serving 10+ products across IBM's B2B portfolio.",
          "Collaborated with global teams across US, LATAM, and Europe on distributed product development.",
          "Mentored junior designers and facilitated design reviews and workshops.",
        ],

        /** Localização */
        location: "São Paulo, Brazil (Remote)",
      },
      {
        role: "Service Designer",
        company: "IBM Brasil",
        period: "2020 - 2022",
        description: [
          "Designed end-to-end service experiences for IBM's enterprise clients, mapping complex user journeys across multiple touchpoints.",
          "Led discovery workshops with stakeholders to identify pain points and opportunities.",
          "Created service blueprints and customer journey maps for internal operational tools.",
          "Worked closely with product teams to translate service design insights into product features.",
        ],
        location: "São Paulo, Brazil",
      },
      {
        role: "UX/UI Designer",
        company: "IBM Brasil",
        period: "2017 - 2020",
        description: [
          "Designed interfaces for B2B SaaS applications, focusing on data visualization and complex workflows.",
          "Conducted user research and usability testing to validate design decisions.",
          "Collaborated with engineering teams to ensure design feasibility and quality implementation.",
          "Contributed to IBM's Carbon Design System adaptation for regional products.",
        ],
        location: "São Paulo, Brazil",
      },
    ],
  },

  // ============================================
  // EDUCATION (Formação Acadêmica)
  // ============================================

  education: {
    /** Título da seção */
    sectionTitle: "Education",

    /** Lista de formações (da mais recente para a mais antiga) */
    items: [
      {
        /** Grau/certificação */
        degree: "Postgraduate Degree in Data Analytics",

        /** Instituição */
        institution: "FIAP",

        /** Período */
        period: "2023 - 2024",

        /** Descrição (opcional) */
        description:
          "Advanced training in data analysis, business intelligence, and metrics-driven decision making.",

        /** Localização */
        location: "São Paulo, Brazil",
      },
      {
        degree: "Bachelor's in Neuroscience",
        institution: "Federal University of ABC (UFABC)",
        period: "2015 - 2025 (Expected)",
        description:
          "Interdisciplinary program covering cognitive science, behavioral psychology, and research methodology. Currently finishing final thesis.",
        location: "São Paulo, Brazil",
      },
      {
        degree: "Exchange Program - Science & Technology",
        institution: "University of Edinburgh",
        period: "2018",
        description:
          "One-semester exchange program focusing on human-computer interaction and cognitive ergonomics.",
        location: "Edinburgh, Scotland",
      },
      {
        degree: "Coursework in Aerospace Engineering",
        institution: "Federal University of ABC (UFABC)",
        period: "2013 - 2015",
        description:
          "Initial studies in systems engineering and computational modeling before transitioning to neuroscience.",
        location: "São Paulo, Brazil",
      },
    ],
  },

  // ============================================
  // CURRENTLY (O que você está fazendo agora)
  // ============================================

  currently: {
    /** Título da seção */
    sectionTitle: "Currently",

    /** O que você está fazendo/aprendendo agora */
    activities: [
      "🔍 Seeking remote opportunities with product teams that value design-engineering collaboration",
      "📚 Deepening my frontend development skills (React, TypeScript, Next.js)",
      "🧠 Finishing my bachelor's thesis in neuroscience on decision-making patterns",
      "🌍 Open to relocating to: UK, US, Germany, Portugal, or Netherlands",
    ],

    /** Call to action */
    cta: {
      text: "If you're building a product that needs someone who can bridge design, code, and research — let's talk.",
      buttonText: "Get in Touch",
    },
  },

  // ============================================
  // VALORES E PRINCÍPIOS (opcional)
  // ============================================

  values: {
    /** Título da seção */
    sectionTitle: "How I Work",

    /** Lista de valores/princípios */
    items: [
      {
        title: "Systems over pixels",
        description:
          "Great design isn't just beautiful screens — it's coherent systems that scale.",
      },
      {
        title: "Outcomes over outputs",
        description:
          "I measure success by user and business impact, not number of mockups delivered.",
      },
      {
        title: "Collaboration over ego",
        description:
          "The best ideas come from diverse perspectives. I facilitate, not dictate.",
      },
      {
        title: "Pragmatism over perfection",
        description:
          "Ship iteratively. Learn from real users. Perfect is the enemy of done.",
      },
    ],
  },
};

/**
 * ============================================
 * TIPO TYPESCRIPT (não precisa editar)
 * ============================================
 */
export type AboutContent = typeof aboutContent;
