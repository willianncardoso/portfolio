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
    title: "Lead Product Designer with 7+ years at IBM, an engineering background, and an unusual path into design.",

    /** Subtítulo/descrição (2-3 linhas) */
    description:
      "I make complex enterprise software feel simple. I didn't start in design — I started in science.",

    /** Caminho da imagem (foto maior, mais elaborada que a da home) */
    image: "/images/IMG_4252 Medium.jpeg",

    /** Alt text da imagem */
    imageAlt: "Willian Cardoso - Lead Product Designer",
  },

  // ============================================
  // STORY (Sua História)
  // ============================================
  // Conte sua trajetória de forma narrativa

  story: {
    /** Título da seção */
    sectionTitle: "The Longer Version",

    /** Parágrafos contando sua história
     * Seja pessoal, mas profissional
     * Mostre evolução, não só fatos
     */
    paragraphs: [
      "At UFABC, I studied Science & Technology, then moved into Aerospace Engineering — including an exchange year at University of Strathclyde in Scotland. My first role at IBM was actually as a developer intern, building features in JavaScript/Vue and working with MongoDB.",
      "That technical foundation changed how I approach design. I understand engineering constraints because I've lived them. I can read a codebase, prototype with real data, and have meaningful conversations with developers without a translator.",
      "Over 7 years at IBM, I progressed from UX/UI Designer to Senior Product Designer to Service Designer — always focused on enterprise tools that thousands of people rely on daily. Configuration systems, operational dashboards, internal platforms built from scratch.",
      "I'm not done learning. Currently, I'm pursuing a Neuroscience degree (UFABC) — because I want to understand user behavior at a deeper level, not just observe it. I'm completing a post-grad in Data Analytics (FIAP) — to back design decisions with real metrics. And I'm researching Computational Neuroscience — applying NLP and neural networks to preserve indigenous languages.",
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
        role: "Lead Product Designer",

        /** Empresa */
        company: "IBM Brasil",

        /** Período (texto livre) */
        period: "2023 - 2024",

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
        role: "Senior Product Designer",
        company: "IBM Brasil",
        period: "2020 - 2023",
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
        institution: "University of Strathclyde",
        period: "2018",
        description:
          "One-year exchange program focusing on engineering and systems design.",
        location: "Glasgow, Scotland",
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
    sectionTitle: "What I'm Looking For",

    /** O que você está fazendo/aprendendo agora */
    activities: [
      "I'm open to remote opportunities with international teams (US, UK, Germany, Portugal, Netherlands) as well as well-structured CLT positions in Brazil.",
      "I thrive in async-first environments, overlap comfortably with US East and EU timezones (GMT-3), and bring the rigor of enterprise design to fast-moving product teams.",
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
    sectionTitle: "What Makes Me Different",

    /** Lista de valores/princípios */
    items: [
      {
        title: "Engineering roots",
        description:
          "Science & Technology degree, almost-completed Aerospace Engineering, started as a dev. I think like an engineer and design like a human.",
      },
      {
        title: "Python + Data",
        description:
          "I prototype with real data, automate repetitive tasks, and validate with metrics. Not just pixels.",
      },
      {
        title: "Neuroscience lens",
        description:
          "A scientific approach to how users perceive, decide, and act. Research-backed, not assumption-based.",
      },
      {
        title: "Global experience",
        description:
          "Exchange year in Scotland, 7 years collaborating with international teams across US, LATAM, and Europe.",
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
