/**
 * CASE STUDY: E-Config (Configuration Tool)
 */

import { CaseStudy } from "@/types";

export const econfigCase: CaseStudy = {
  id: "e-config",
  order: 3,
  category: "Configuration Tool",
  title: "E-Config: Hardware Configuration Wizard",
  subtitle: "Streamlining complex hardware ordering for enterprise clients",
  cardDescription:
    "Wizard-based configuration tool reducing errors by 60%",

  metadata: {
    role: "Service Designer",
    timeline: "2021 - 2022",
    team: "2 designers, 3 developers",
    company: "IBM",
  },

  images: {
    cover: "/images/e-config - thumb.png",
    hero: "/images/cases/econfig/e-config - design.png",
    heroAlt: "E-Config wizard interface",
  },

  metrics: [
    { value: "60%", label: "Fewer configuration errors" },
    { value: "100K+", label: "Configurations per year" },
    { value: "30%", label: "Time savings" },
  ],

  content: {
    overview: [
      "E-Config is a configuration tool for IBM's hardware products, used by sales and technical teams to build custom server configurations for clients.",
      "The tool needed to handle thousands of product combinations while preventing incompatible configurations.",
    ],
    challenge: {
      description: "Main challenges:",
      points: [
        "Complex product compatibility rules",
        "Frequent configuration errors costing time and money",
        "Steep learning curve for new users",
        "No guidance on best practices",
      ],
    },
    approach: [
      {
        title: "Process mapping",
        description:
          "Mapped the entire configuration workflow to identify pain points and decision trees.",
      },
      {
        title: "Wizard pattern",
        description:
          "Designed a step-by-step wizard that guides users through configuration logic.",
      },
      {
        title: "Smart recommendations",
        description:
          "Built an AI-powered recommendation engine suggesting optimal configurations.",
      },
    ],
    solution: {
      description: "The solution included:",
      highlights: [
        {
          title: "Guided workflow",
          description:
            "Step-by-step wizard preventing invalid configurations before they happen.",
        },
        {
          title: "Smart validation",
          description:
            "Real-time checks ensuring all components are compatible.",
        },
        {
          title: "Configuration templates",
          description:
            "Pre-built templates for common use cases to speed up the process.",
        },
      ],
    },
    results: [
      "**60% fewer errors** — Validation prevented most common mistakes",
      "**30% time savings** — Average configuration time reduced significantly",
      "**100K+ configs/year** — Supporting high volume with high accuracy",
    ],
    learnings: [
      "Wizard patterns work exceptionally well for complex, rule-based workflows where users need guidance.",
      "Preventing errors is better than catching them — invest in smart validation upfront.",
    ],
  },

  nextCaseId: "igua",
};
