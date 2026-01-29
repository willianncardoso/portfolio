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
    cover: "/images/p1 - ESW thumb.png",
    hero: "/images/cases/esw/ESW zPricer - Highlights.png",
    heroAlt:
      "ESW/CESW redesigned interface showing step-by-step wizard and contextual help",
  },

  metrics: [
    { value: "40%", label: "Reduction in support tickets" },
    { value: "1 week → hours", label: "Onboarding time improvement" },
    { value: "500", label: "Global users migrated successfully" },
    { value: "30", label: "In-depth user interviews conducted" },
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
      image: "/images/cases/esw/p1 - brackground project 1.png",
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
        image: "/images/cases/esw/p1 - oportunity project 1.png",
        imageAlt: "Global research insights and pain points",
        imageCaption:
          "Research across 4 continents revealed critical pain patterns",
      },
      {
        title: "Design System Foundation: PAL (Ongoing)",
        description:
          "Created PAL (Products and Assets Library), a custom design system layer on top of Carbon Design System. Included reusable components specific to configuration workflows, documented patterns for complex interactions (nested configuration, conditional fields), style guide for ESW-specific decisions. This enabled speed (junior designer could build quickly), consistency (cohesive experience across 3 years), and effective mentorship.",
        image: "/images/cases/esw/p1 - process.png",
        imageAlt: "PAL design system components and patterns",
        imageCaption:
          "PAL design system enabled consistency across 3 years of releases",
      },
      {
        title: "Incremental Redesign Strategy (2022-2025)",
        description:
          "Rather than 'big bang' redesign, we delivered 1-2 major pages/integrations per year. Year 1: Core configuration flow + navigation. Year 2: Advanced features + integrations. Year 3: Final migrations + edge cases. This reduced risk, allowed for real-world feedback, kept stakeholders confident, and gave junior designer time to ramp up.",
        image: "/images/cases/esw/p1 - process 2.png",
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
          image: "/images/cases/esw/p1 - highlights and solution 1.png",
          imageAlt: "Step-by-step wizard interface with progress tracking",
        },
        {
          title: "Eliminating Manual Workarounds",
          description:
            "Built-in features that replaced user hacks: unit conversion (no more Excel macros), automatic data transformation, business rules engine for complex pricing/eligibility, and template library for reusable configurations.",
          image: "/images/cases/esw/p1 - highlights and solution 2.png",
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

  nextCaseId: "cortex-s360",
};
