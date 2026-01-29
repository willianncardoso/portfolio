/**
 * CASE STUDY: Cortex S360 (Smart Field Service Dispatch Platform)
 */

import { CaseStudy } from "@/types";

export const cortexCase: CaseStudy = {
  id: "cortex-s360",
  order: 2,
  category: "Enterprise UX",
  title: "Cortex S360: Smart Field Service Dispatch Platform",
  subtitle: "Transforming manual dispatch into an intelligent recommendation system for IBM's Technical Services Command Center",
  cardDescription:
    "Led complete UX transformation of IBM's field service platform, reducing operator stress and improving decision-making speed",

  metadata: {
    role: "Lead UX/UI Designer",
    timeline: "12 months (2019-2020)",
    team: "Solo designer working with 5+ developers",
    company: "IBM",
  },

  images: {
    cover: "/images/S360 - thumb.png",
    hero: "/images/cases/cortex/Cortex - design.png",
    heroAlt: "Cortex S360 dashboard showing technician dispatch recommendations with pastel color palette",
  },

  metrics: [
    { value: "~BRL 3M", label: "Annual cost savings for IBM" },
    { value: "100+", label: "Command center dispatchers" },
    { value: "15", label: "User interviews conducted" },
  ],

  content: {
    overview: [
      "Cortex S360 is IBM's field service dispatch platform used by command center operators to assign technical service calls to field technicians across Brazil and LATAM. I led the complete visual and UX transformation as the platform evolved from a fully manual system to an intelligent, data-driven recommendation engine.",
      "The platform processes hundreds of service calls daily, where operators must quickly assign the right technician based on location, expertise, parts availability, and current workload—all while avoiding costly SLA violations.",
    ],

    challenge: {
      description:
        "Before the redesign, command center operators manually assigned every single service call to technicians based on limited information. This created several critical problems:",
      points: [
        "Time-consuming decisions: Operators spent minutes per call manually evaluating which technician to assign",
        "Suboptimal assignments: Without complete data, operators made best-guess decisions that often weren't optimal",
        "High-stakes environment: Missing SLA deadlines meant financial penalties for IBM",
        "Scalability issues: As call volume grew, manual processes couldn't keep up",
        "Operator burnout: Constant high-pressure decisions with limited data led to stress and fatigue",
      ],
    },

    approach: [
      {
        title: "Understanding the Users (2 months of research)",
        description:
          "Conducted 15 in-depth interviews with command center operators and observed real dispatch sessions. Mapped current manual workflows and ran stakeholder workshops with operations managers and technical leads. Key insight: Operators didn't resist automation—they resisted opaque automation. They needed to understand WHY the system recommended each technician.",
      },
      {
        title: "Design Principles",
        description:
          "Established 4 core principles: (1) Trust through Transparency—show reasoning behind recommendations, (2) Efficient Defaults, Easy Overrides—one-click to accept, simple drag-and-drop to reassign, (3) Joyful Interactions—use color and motion to reduce stress, (4) Clean Visual Hierarchy—strategic placement, clear typography, calming colors.",
      },
      {
        title: "Visual Transformation Strategy",
        description:
          "Completely reimagined the visual language using pastel tones (soft blues, pinks, yellows, greens) intentionally chosen to feel playful and reduce stress. The goal: if this feels more like a game than work, operators will be less anxious. Implemented clear typography hierarchy with ample whitespace for breathing room during stressful situations.",
      },
    ],

    solution: {
      description:
        "The redesigned platform surfaces intelligent recommendations while empowering operators to maintain control:",
      highlights: [
        {
          title: "Recommendation Queue",
          description:
            "Left sidebar shows prioritized backlog of calls waiting for assignment. Color-coded by urgency (red = SLA risk, yellow = attention needed, green = on track) with key details at a glance and drag-and-drop to reorder priorities.",
        },
        {
          title: "Accept/Decline Recommendation",
          description:
            "Prominent 'Accept Recommendation' button shows top recommended technician with reasoning badges: Closest (distance), Has required parts, Expert in this issue type, Available now. Secondary 'See Alternatives' reveals 3-5 other options with trade-offs.",
        },
        {
          title: "Quick Reassignment",
          description:
            "If operator disagrees with recommendation, they can drag technician card from alternatives panel and drop onto assignment area. System shows impact (e.g., 'This will delay by 15 minutes but matches expertise better').",
        },
        {
          title: "Manual Override",
          description:
            "For edge cases, 'Assign Manually' button opens technician search with filters by distance, expertise, availability. System still shows trade-offs of manual choice to maintain transparency.",
        },
      ],
      mainImage: "/images/cases/cortex/Cortex - design.png",
      mainImageAlt:
        "Cortex S360 interface showing recommendation queue, technician cards with status badges, and clean pastel color palette",
      mainImageCaption:
        "The redesigned interface uses pastel colors and clear visual hierarchy to reduce cognitive load in high-pressure situations",
    },

    results: [
      "**~BRL 3M/year cost savings** — Improved efficiency and reduced SLA violations resulted in significant annual savings for IBM",
      "**Reduced operator stress** — Qualitative feedback confirmed the playful color palette and clear hierarchy made the job 'less heavy' during 8-hour shifts",
      "**Faster training** — New operators required less onboarding time due to intuitive interface and transparent recommendations",
      "**High user satisfaction** — Operators reported the system felt 'easier' and praised features born from their feedback (quick-swap function, SLA countdown timer, expertise badges)",
    ],

    learnings: [
      "Trust is the hardest UX problem in automation. Operators didn't resist automation itself—they resisted opaque automation. By making recommendations transparent (showing WHY), adoption went smoothly.",
      "'Serious' doesn't mean 'boring'. I took a risk with playful colors in an enterprise tool. It paid off. Visual design can change how people feel about their work, not just how they perform it.",
      "Former developers make better designers (for technical products). My engineering background was invaluable—I could design within technical constraints, speak the dev team's language, and prototype with realistic data.",
      "User involvement = user adoption. By interviewing 15% of all users and incorporating their feedback directly into features, we created champions who advocated for the redesign to their peers.",
      "Small details create delight. Smooth animations, subtle color transitions, and micro-interactions weren't 'required' but they made the product feel crafted, not just functional.",
    ],
  },

  nextCaseId: "e-config",
};
