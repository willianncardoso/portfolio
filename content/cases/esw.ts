/**
 * CASE STUDY: ESW/CESW (IBM's Software Licensing Configurator)
 */

import { CaseStudy } from "@/types";

export const eswCase: CaseStudy = {
  id: "esw",
  order: 1,
  category: "Enterprise SaaS",
  title: "ESW/CESW: Redesigning IBM's Software Licensing Configurator",
  subtitle:
    "Transforming a 30-year-old system from documentation nightmare into an intuitive, self-service platform",
  cardDescription:
    "Reduced support tickets by 40% and onboarding time from 1 week to hours through comprehensive UX transformation",

  metadata: {
    role: "Lead UX/UI Designer (first dedicated designer)",
    timeline: "3 years (2022-2025)",
    team: "Led design, hired and mentored 1 Junior Designer",
    company: "IBM",
  },

  images: {
    cover: "/images/CESW Danube thumb.png",
    hero: "/images/cases/esw/ESW zPricer - Highlights.png",
    heroAlt:
      "ESW/CESW redesigned interface showing step-by-step wizard and contextual help",
  },

  metrics: [
    { value: "40%", label: "Fewer support tickets" },
    { value: "1 week → hours", label: "Onboarding time" },
    { value: "500", label: "Global users migrated" },
  ],

  process: [
    {
      number: "01",
      title: "Discovery",
      duration: "3 months",
      bullets: ["Read 100+ pages docs", "30 user interviews", "4 continents research"],
    },
    {
      number: "02",
      title: "Define",
      duration: "1 month",
      bullets: ["Pain point synthesis", "Regional differences", "Opportunity mapping"],
    },
    {
      number: "03",
      title: "Design",
      duration: "Ongoing",
      bullets: ["PAL design system", "High-fidelity prototypes", "Component library"],
    },
    {
      number: "04",
      title: "Test",
      duration: "Per release",
      bullets: ["Usability testing", "Techliner feedback", "Iterative refinement"],
    },
    {
      number: "05",
      title: "Deliver",
      duration: "3 years",
      bullets: ["Phased rollout", "500 users migrated", "Continuous support"],
    },
  ],

  content: {
    overview: [
      "The Danube/CESW project was my most challenging and rewarding experience at IBM: taking over a failed project that had been passed through multiple teams without ever launching, and transforming a 30-year-old legacy system into a modern, user-friendly configurator.",
      "This was also a leadership challenge—I was the first designer to own this project end-to-end, and I simultaneously hired and mentored a junior designer while navigating complex stakeholder dynamics and global user needs. The platform serves ~500 technical sales specialists ('techliners') globally.",
    ],

    challenge: {
      description:
        "Danube was IBM's software licensing configurator, originally built in the late 1980s. By 2022, it had become a notorious bottleneck with severe UX and business problems:",
      points: [
        "Blog-like interface with no clear navigation or user guidance—users had to manually explore and fill dozens of fields with zero context",
        "Onboarding took ~1 week of intensive training, and new employees struggled for months to become productive",
        "Users created manual workarounds: Excel macros to transform data, custom scripts to convert file formats, manual unit conversions",
        "High volume of support tickets (especially from new users), slow deal configuration impacting sales velocity",
        "Project had been passed through multiple design teams without success, never making it past prototypes to actual implementation",
        "Stakeholders (Product Owner and Architect) were initially resistant to user research, worried about changes they couldn't control",
      ],
      image: "/images/cases/esw/old Danube configuration page",
      imageAlt:
        "Visual representation of the challenge: 30-year-old system complexity",
    },

    approach: [
      {
        title: "Earning Stakeholder Trust (Months 1-3)",
        description:
          "Before I could design, I had to navigate complex politics. Multiple alignment sessions to understand concerns, read ALL existing documentation (hundreds of pages), created a roadmap draft showing how design would support their goals. It took weeks of relationship-building before they trusted me enough to talk to users. Outcome: Earned stakeholder trust and got green light for user research.",
      },
      {
        title: "Global User Research (Months 3-5)",
        description:
          "Conducted 30 in-depth interviews with techliners across North America, Latin America, Europe, and Asia-Pacific. Observed 10+ real configuration sessions. Key insights: 'We work around the system, not with it'—users had built an entire ecosystem of Excel macros because the system was inflexible. 'Training new people is a nightmare'—onboarding took a full week. Regional differences matter—what worked for North America didn't work for Asia-Pacific.",
        image: "/images/cases/esw/CESW initial discoveries + personas",
        imageAlt: "Global research insights and pain points",
        imageCaption:
          "Research across 4 continents revealed critical pain patterns",
      },
      {
        title: "Design System Foundation: PAL (Ongoing)",
        description:
          "Created PAL (Products and Assets Library), a custom design system layer on top of Carbon Design System. Included reusable components specific to configuration workflows, documented patterns for complex interactions (nested configuration, conditional fields), style guide for ESW-specific decisions. This enabled speed (junior designer could build quickly), consistency (cohesive experience across 3 years), and effective mentorship.",
        image: "/images/cases/esw/ESW suite agendas",
        imageAlt: "PAL design system components and patterns",
        imageCaption:
          "PAL design system enabled consistency across 3 years of releases",
      },
      {
        title: "Incremental Redesign Strategy (2022-2025)",
        description:
          "Rather than 'big bang' redesign, we delivered 1-2 major pages/integrations per year. Year 1: Core configuration flow + navigation. Year 2: Advanced features + integrations. Year 3: Final migrations + edge cases. This reduced risk, allowed for real-world feedback, kept stakeholders confident, and gave junior designer time to ramp up.",
        image: "/images/cases/esw/old zPricer on excel spreadsheets",
        imageAlt: "Phased rollout timeline and milestones",
        imageCaption: "3-year phased rollout strategy",
      },
    ],

    solution: {
      description:
        "The redesigned CESW platform transformed the user experience through four major improvements:",
      highlights: [
        {
          title: "From Chaos to Guided Wizard",
          description:
            "Replaced blog-like page with 50+ fields with a step-by-step wizard that guides users through configuration. Added progress indicator, contextual inline help, smart defaults that pre-fill common values, and validation that catches errors before submission.",
          image: "/images/cases/esw/CESW Danube - Final solution configuration step 1",
          imageAlt: "Step-by-step wizard interface with progress tracking",
        },
        {
          title: "Eliminating Manual Workarounds",
          description:
            "Built-in features that replaced user hacks: unit conversion (no more Excel macros), automatic data transformation, business rules engine for complex pricing/eligibility, and template library for reusable configurations.",
          image: "/images/cases/esw/zPricer final solution - matrix",
          imageAlt: "Built-in tools replacing manual workarounds",
        },
        {
          title: "Embedded Documentation",
          description:
            "Inline tooltips explain technical details on-demand, contract type guides built into relevant pages, equipment specs accessible with one click, and proactive alerts warn about common mistakes. Example: 'You selected a 3-year contract, but this software requires minimum 5-year terms. Would you like to adjust?'",
        },
        {
          title: "Regional Customization",
          description:
            "Different regions see different contract types, regulatory warnings, default configurations, and terminology. Built flexibility so North America ≠ Asia-Pacific ≠ Europe, addressing the global user needs discovered in research.",
        },
      ],
      mainImage: "/images/cases/esw/ESW zPricer - Highlights.png",
      mainImageAlt:
        "Complete redesigned interface showing all major improvements",
      mainImageCaption:
        "The redesigned CESW platform with guided wizard, embedded help, and regional customization",
    },

    results: [
      "**40% reduction in daily support tickets** — From constant interruptions to manageable volume, representing significant cost savings",
      "**Onboarding time: 1 week → hours** — New techliners productive in their first day instead of their first month",
      "**100% user migration before mandate** — Migrated all 500 users from Danube to CESW ahead of the forced retirement deadline",
      "**Elimination of manual workarounds** — No more Excel macros, scripts, or manual data transformations",
      "**Sales velocity increased** — Deals configured faster = faster time to revenue. Error rate decreased through built-in validation",
      "**Employee satisfaction up** — Tool went from 'most hated' to 'actually useful' according to user feedback",
    ],

    learnings: [
      "Stakeholder trust is earned, not given. I couldn't just show up and demand user research. I had to prove I understood the domain, the constraints, and their concerns first through deep documentation reading and empathy for stakeholder anxieties.",
      "Design systems aren't optional for long projects. Without PAL, we would've had inconsistency chaos by year 2. The investment in design system infrastructure paid off 10x.",
      "Incremental delivery requires extra communication. Users were confused when only 'part' of the redesign shipped. We had to over-communicate roadmap, what was coming, why, and when to build user patience and trust.",
      "Mentorship scales your impact. By investing in the junior designer, I effectively doubled our design capacity by year 2. Great leads multiply themselves through others.",
      "'Working around' is a design smell. When users build Excel macros to supplement your tool, that's not 'power users being clever'—that's your tool failing them. Workarounds are requirements in disguise.",
      "Naming matters. The 'dashboard vs. configurator' confusion wasn't semantic—it shaped expectations, prioritization, and architecture decisions. Fight for correct terminology early because it ripples everywhere.",
    ],
  },

  // ============================================
  // RESTRUCTURED SECTIONS
  // ============================================

  sections: [
    { id: "background", number: "01", title: "Background" },
    { id: "why-redesign", number: "02", title: "Why Redesign" },
    { id: "design-strategy", number: "03", title: "Design Strategy" },
    { id: "key-decisions", number: "04", title: "Key Decisions" },
    { id: "impact", number: "05", title: "Impact" },
    { id: "reflection", number: "06", title: "Reflection" },
  ],

  background: {
    aboutProject: {
      title: "About ESW/CESW",
      description:
        "ESW (Enterprise Software Wizard) is IBM's internal software licensing configurator used by ~500 technical sales specialists ('techliners') globally. The tool handles complex software pricing, licensing terms, and configuration for enterprise deals.",
      stats: [
        { value: "500", label: "Global users" },
        { value: "30+", label: "Years old (original)" },
        { value: "4", label: "Continents served" },
      ],
    },
    myRole: {
      title: "My Role",
      description:
        "I was the first designer to own this project end-to-end. I joined after multiple previous teams had failed to ship, and simultaneously hired and mentored a junior designer while navigating complex stakeholder dynamics.",
      responsibilities: [
        "UX Research (30 interviews across 4 continents)",
        "UI Design & high-fidelity prototypes",
        "PAL Design System creation",
        "Stakeholder management",
        "Junior designer mentorship",
        "Developer handoff and QA",
      ],
      team: "1 Product Designer (me) + 1 Junior Designer + 2 Developers + 1 PO + 1 Architect",
      timeline: "3 years (2022-2025)",
    },
  },

  whyRedesign: {
    intro: "Designed in the late 1980s, the original Danube system had become a notorious bottleneck. Before diving into the redesign, it's important to understand why the old system could no longer support IBM's needs.",
    problems: [
      {
        number: "01",
        title: "No clear navigation or guidance",
        description:
          "Blog-like interface with 50+ fields. Users had to manually explore and fill fields with zero context.",
      },
      {
        number: "02",
        title: "Onboarding took 1 week minimum",
        description:
          "New employees struggled for months to become productive. Training was intensive and retention was low.",
      },
      {
        number: "03",
        title: "Users built workarounds",
        description:
          "Excel macros, custom scripts, manual unit conversions. An entire shadow ecosystem existed around the tool.",
      },
      {
        number: "04",
        title: "High support ticket volume",
        description:
          "Especially from new users. Slow deal configuration was impacting sales velocity.",
      },
      {
        number: "05",
        title: "Project had failed multiple times",
        description:
          "Passed through multiple design teams without ever making it past prototypes to actual implementation.",
      },
    ],
    conclusion:
      "We needed a system that could scale—not just another redesign that would fail to ship.",
  },

  designStrategy: {
    intro: "In a complex enterprise environment with resistant stakeholders, I couldn't just start designing. I had to earn trust first.",
    phases: [
      {
        title: "Earn Trust Before Research",
        description:
          "Spent 3 months reading all documentation, understanding constraints, and aligning with stakeholders before they allowed me to talk to users.",
      },
      {
        title: "Global Research, Local Insights",
        description:
          "Conducted research across 4 continents to understand regional differences in workflows and needs.",
      },
      {
        title: "Build the System, Not Just Screens",
        description:
          "Created PAL design system to enable consistency across 3 years of incremental releases.",
      },
      {
        title: "Ship Incrementally, Reduce Risk",
        description:
          "Phased rollout (1-2 features per year) instead of big-bang redesign to maintain stakeholder confidence.",
      },
    ],
  },

  keyDecisions: [
    {
      number: "01",
      title: "From Chaos to Guided Wizard",
      problem: "Blog-like page with 50+ fields overwhelmed users",
      solution:
        "Step-by-step wizard with progress indicator, smart defaults, and inline validation",
      tradeOff: "Required significant engineering refactoring of the data model",
      outcome: "Onboarding time reduced from 1 week to hours",
    },
    {
      number: "02",
      title: "Eliminating Manual Workarounds",
      problem:
        "Users had built Excel macros and custom scripts to work around tool limitations",
      solution:
        "Built-in unit conversion, automatic data transformation, and template library",
      tradeOff: "Feature scope increased significantly, requiring prioritization",
      outcome: "Eliminated the need for external tools entirely",
    },
    {
      number: "03",
      title: "PAL Design System",
      problem: "3-year project needed consistency across incremental releases",
      solution:
        "Custom design system layer on top of Carbon with reusable configuration-specific components",
      tradeOff: "Upfront investment in documentation and component building",
      outcome:
        "Enabled junior designer to build quickly, maintained consistency, reduced design debt",
    },
    {
      number: "04",
      title: "Regional Customization",
      problem: "What worked for North America didn't work for Asia-Pacific",
      solution:
        "Region-aware defaults, terminology, and regulatory warnings",
      tradeOff: "Increased complexity in configuration management",
      outcome:
        "Higher adoption across all regions, fewer support tickets from non-US users",
    },
  ],

  impact: {
    headline: "The tool went from 'most hated' to 'actually useful'",
    metrics: [
      {
        value: "40%",
        label: "Reduction in support tickets",
        description: "From constant interruptions to manageable volume",
      },
      {
        value: "1 week → hours",
        label: "Onboarding time",
        description: "New techliners productive on day one",
      },
      {
        value: "500",
        label: "Users migrated",
        description: "100% migration before mandate deadline",
      },
    ],
    ecosystemImpact: [
      {
        value: "0",
        label: "Excel workarounds needed",
        description: "Built-in features replaced all shadow tools",
      },
      {
        value: "3",
        label: "Years of consistent delivery",
        description: "Phased rollout maintained stakeholder trust",
      },
    ],
    quote: {
      text: "This is the first time the configurator actually helps me instead of fighting me.",
      author: "Senior Techliner, North America",
    },
  },

  reflection: {
    takeaways: [
      {
        title: "Stakeholder trust is earned, not given",
        description:
          "I had to prove I understood the domain before being allowed to do research. Deep documentation reading and empathy for stakeholder concerns opened doors.",
      },
      {
        title: "Design systems aren't optional for long projects",
        description:
          "Without PAL, we would have had inconsistency chaos by year 2. The investment paid off 10x.",
      },
      {
        title: "Workarounds are requirements in disguise",
        description:
          "When users build Excel macros, that's not 'power users being clever'—that's your tool failing them.",
      },
      {
        title: "Mentorship scales impact",
        description:
          "By investing in the junior designer, I effectively doubled our design capacity by year 2.",
      },
    ],
    nextSteps: [
      "A/B testing of wizard vs. power-user mode for experienced users",
      "AI-assisted configuration suggestions based on deal history",
      "Mobile companion app for on-the-go deal reviews",
    ],
  },

  nextCaseId: "cortex-s360",
};
