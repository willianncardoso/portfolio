/**
 * CASE STUDY: Iguá Saneamento (Service Design)
 */

import { CaseStudy } from "@/types";

export const iguaCase: CaseStudy = {
  id: "igua",
  order: 4,
  category: "Service Design",
  title: "Iguá Saneamento: Digital Transformation",
  subtitle: "Redesigning customer service for a water utility company",
  cardDescription:
    "Service design project improving customer satisfaction by 40%",

  metadata: {
    role: "UX/UI Designer",
    timeline: "2019 - 2020",
    team: "3 designers, 1 PM",
    company: "IBM (consulting for Iguá)",
    client: "Iguá Saneamento",
  },

  images: {
    cover: "/images/cases/igua/Iguá - thumb.png",
    hero: "/images/cases/igua/Iguá - design.png",
    heroAlt: "Iguá customer service journey map",
  },

  metrics: [
    { value: "40%", label: "Increase in customer satisfaction" },
    { value: "50%", label: "Reduction in call center volume" },
    { value: "200K+", label: "App downloads" },
  ],

  content: {
    overview: [
      "Iguá Saneamento is a Brazilian water utility company serving millions of customers. They needed to digitalize their customer service operations.",
      "The project involved mapping the entire customer journey and designing digital touchpoints to reduce call center dependency.",
    ],
    challenge: {
      description: "Key challenges:",
      points: [
        "High call center volume for simple tasks",
        "Lack of digital self-service options",
        "Fragmented customer experience across channels",
        "Low digital literacy among customer base",
      ],
    },
    approach: [
      {
        title: "Service blueprint",
        description:
          "Created detailed service blueprints mapping all customer touchpoints and backend processes.",
      },
      {
        title: "User research",
        description:
          "Conducted interviews and usability tests with diverse customer segments.",
      },
      {
        title: "Phased rollout",
        description:
          "Designed a phased approach starting with highest-volume use cases.",
      },
    ],
    solution: {
      description: "Delivered:",
      highlights: [
        {
          title: "Self-service app",
          description:
            "Mobile app for bill payment, consumption tracking, and service requests.",
        },
        {
          title: "Simplified flows",
          description:
            "Streamlined processes accounting for low digital literacy.",
        },
        {
          title: "Omnichannel experience",
          description:
            "Consistent experience across app, website, and call center.",
        },
      ],
    },
    results: [
      "**40% satisfaction increase** — Post-launch customer satisfaction survey",
      "**50% call reduction** — Significant decrease in call center volume",
      "**200K+ downloads** — High adoption in first 6 months",
    ],
    learnings: [
      "Service design requires understanding the entire ecosystem, not just the digital interface.",
      "Designing for low digital literacy taught me the value of progressive disclosure and simple language.",
    ],
  },

  nextCaseId: null,
};
