/**
 * CASE STUDY: Cortex S360 (Operational Dashboard)
 */

import { CaseStudy } from "@/types";

export const cortexCase: CaseStudy = {
  id: "cortex-s360",
  order: 2,
  category: "Data Visualization",
  title: "Cortex S360: Operational Intelligence Dashboard",
  subtitle: "Helping operations teams make data-driven decisions in real-time",
  cardDescription: "Real-time operational dashboard for 500+ daily users",

  metadata: {
    role: "Senior Product Designer",
    timeline: "2022 - 2023",
    team: "3 designers, 6 developers, 2 PMs",
    company: "IBM",
  },

  images: {
    cover: "/images/cases/cortex/cover.png",
    hero: "/images/cases/cortex/hero.png",
    heroAlt: "Cortex S360 dashboard interface",
  },

  metrics: [
    { value: "500+", label: "Daily active users" },
    { value: "35%", label: "Faster decision-making" },
    { value: "92%", label: "User satisfaction" },
  ],

  content: {
    overview: [
      "Cortex S360 is an operational intelligence platform used by IBM's support teams to monitor system health and respond to incidents.",
      "The challenge was visualizing complex, real-time data in a way that enabled quick decision-making under pressure.",
    ],
    challenge: {
      description: "The main challenges were:",
      points: [
        "Too much data, not enough insight",
        "Critical alerts getting lost in noise",
        "Inconsistent data visualization patterns",
        "Poor mobile experience for on-call engineers",
      ],
    },
    approach: [
      {
        title: "Research & Contextual inquiry",
        description:
          "Observed ops teams during real incidents to understand their information needs and decision-making process.",
      },
      {
        title: "Information architecture",
        description:
          "Restructured the dashboard to prioritize actionable insights over raw data.",
      },
      {
        title: "Visual design system",
        description:
          "Created consistent chart types and color-coding for different alert levels.",
      },
    ],
    solution: {
      description: "Key improvements included:",
      highlights: [
        {
          title: "Smart alerts",
          description:
            "Implemented an intelligent alert system that suppresses noise and surfaces critical issues.",
        },
        {
          title: "Customizable views",
          description:
            "Users can create personalized dashboard views based on their role and responsibilities.",
        },
        {
          title: "Mobile-first design",
          description:
            "Redesigned for mobile to support on-call engineers responding from anywhere.",
        },
      ],
    },
    results: [
      "**35% faster decisions** — Time to identify and respond to incidents decreased",
      "**50% reduction in false alerts** — Smart filtering reduced alert fatigue",
      "**92% satisfaction** — High user satisfaction in post-launch survey",
    ],
    learnings: [
      "Data visualization isn't about showing all the data — it's about showing the right insights at the right time.",
      "Working with on-call teams taught me the importance of mobile-first design for operational tools.",
    ],
  },

  nextCaseId: "e-config",
};
