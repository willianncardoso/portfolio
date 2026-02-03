/**
 * CASE STUDY: E-Config (Hardware Configuration Wizard)
 */

import { CaseStudy } from "@/types";

export const econfigCase: CaseStudy = {
  id: "e-config",
  order: 3,
  category: "Configuration Tool",
  title: "E-Config: Hardware Configuration Wizard",
  subtitle:
    "Transforming a complex, error-prone ordering process into a guided wizard that eliminated 60% of configuration mistakes",
  cardDescription:
    "Redesigned IBM's hardware configuration tool from a technical spreadsheet into an intuitive wizard, reducing errors by 60% and saving teams hours per configuration",

  metadata: {
    role: "Service Designer",
    timeline: "18 months (2021-2022)",
    team: "2 designers, 3 developers, 1 PM",
    company: "IBM",
  },

  images: {
    cover: "/images/e-config - thumb.png",
    hero: "/images/cases/econfig/e-config - design.png",
    heroAlt:
      "E-Config wizard interface showing step-by-step hardware configuration with validation and smart recommendations",
  },

  metrics: [
    { value: "60%", label: "Fewer configuration errors" },
    { value: "100K+", label: "Configurations processed per year" },
    { value: "30%", label: "Reduction in configuration time" },
  ],

  process: [
    {
      number: "01",
      title: "Map",
      duration: "4 weeks",
      bullets: ["Service blueprint", "End-to-end journey", "Backstage processes"],
    },
    {
      number: "02",
      title: "Research",
      duration: "3 weeks",
      bullets: ["12 shadowing sessions", "Tribal knowledge gaps", "Workaround analysis"],
    },
    {
      number: "03",
      title: "Design",
      duration: "6 weeks",
      bullets: ["Wizard pattern", "Real-time validation", "Template library"],
    },
    {
      number: "04",
      title: "Build",
      duration: "8 weeks",
      bullets: ["Recommendation engine", "Compatibility rules", "Smart defaults"],
    },
    {
      number: "05",
      title: "Measure",
      duration: "Ongoing",
      bullets: ["60% fewer errors", "30% faster config", "100K+ processed/year"],
    },
  ],

  content: {
    overview: [
      "E-Config is IBM's internal hardware configuration tool, used by sales engineers and technical teams worldwide to build custom server, storage, and networking configurations for enterprise clients. Every hardware deal at IBM flows through this tool—over 100,000 configurations per year—making it one of the most business-critical internal platforms.",
      "When I joined the project, the tool was essentially a glorified spreadsheet: rows of part numbers, manual compatibility checks, and no guidance for users navigating thousands of possible component combinations. Configuration errors were costing IBM millions in returns, delays, and customer dissatisfaction. My role was to redesign the entire experience using service design methodology—mapping the end-to-end configuration journey and transforming it into an intuitive, error-proof wizard.",
    ],

    challenge: {
      description:
        "The existing E-Config tool had grown organically over years without dedicated design input, resulting in a system that worked against its users rather than for them:",
      points: [
        "Thousands of product combinations with complex compatibility rules that users had to memorize or look up in separate documentation",
        "Configuration errors in ~25% of submissions—incompatible components, missing required parts, or incorrect quantities—causing costly rework and delayed deals",
        "Steep learning curve requiring weeks of training before new sales engineers could configure independently, creating a bottleneck in team onboarding",
        "No guardrails or guidance: users could submit invalid configurations that would only be caught downstream by manufacturing, wasting days of back-and-forth",
        "Fragmented workflow: users jumped between the configuration tool, PDF spec sheets, pricing spreadsheets, and email threads with technical specialists to complete a single order",
        "Regional teams had developed their own unofficial workarounds and cheat sheets, leading to inconsistent processes across geographies",
      ],
    },

    approach: [
      {
        title: "Service Blueprint & Journey Mapping",
        description:
          "Started by mapping the entire configuration-to-order journey, not just the tool interface. Documented every touchpoint, backstage process, and support interaction across the full service chain. This revealed that the tool was just one piece of a broken ecosystem—users were spending as much time outside the tool (checking specs, emailing experts, validating in spreadsheets) as inside it. The blueprint became our north star for deciding what to bring INTO the tool versus what to fix around it.",
      },
      {
        title: "User Research & Shadowing Sessions",
        description:
          "Conducted 12 shadowing sessions with sales engineers across 3 regions, watching them configure real deals in real time. The most striking finding: experienced users had developed elaborate mental models and shortcuts that new users couldn't access. One senior engineer said, 'I just know that if you pick this processor, you need at least 4 DIMMs—but there's nowhere in the tool that tells you that.' This insight drove the entire recommendation engine concept: we needed to externalize expert knowledge into the interface.",
      },
      {
        title: "Wizard Pattern Design",
        description:
          "Designed a step-by-step wizard that mirrors how experts actually think about configurations—not how the database organizes parts. Instead of showing all 500+ components at once, the wizard guides users through logical decision stages: (1) What's the use case? (2) Choose base platform, (3) Configure compute, (4) Configure storage, (5) Add networking, (6) Review & validate. Each step narrows subsequent options based on compatibility rules, making invalid configurations impossible by design.",
      },
      {
        title: "Smart Recommendation Engine",
        description:
          "Partnered with the development team to build a recommendation layer that suggests optimal configurations based on the selected use case, budget range, and performance requirements. The system surfaces 'most popular' configurations for common scenarios (e.g., 'Most clients running SAP choose this memory configuration') and warns about potential issues before they happen. This externalized the tribal knowledge that previously lived only in senior engineers' heads.",
      },
    ],

    solution: {
      description:
        "The redesigned E-Config replaced the flat, spreadsheet-like interface with an intelligent guided experience:",
      highlights: [
        {
          title: "Guided Configuration Wizard",
          description:
            "A step-by-step flow that walks users through configuration decisions in logical order. Each step shows only relevant options based on previous selections, with a persistent progress indicator and the ability to jump between completed steps. Smart defaults pre-fill the most common choices, so users only need to change what's different about their specific deal.",
        },
        {
          title: "Real-Time Validation Engine",
          description:
            "Every selection triggers instant compatibility checks against IBM's product rules database. Incompatible options are grayed out with clear explanations ('This memory module requires different slot type—see compatible options'). A persistent validation panel shows configuration health with green/yellow/red status, catching errors at the moment of decision rather than after submission.",
        },
        {
          title: "Configuration Templates Library",
          description:
            "Pre-built templates for the 20 most common use cases (database servers, web application clusters, AI/ML workstations, etc.) that users can start from and customize. Templates encode best practices and are maintained by senior engineers, effectively scaling their expertise to every user. New sales engineers could produce valid configurations on day one by starting from a template.",
        },
        {
          title: "Inline Specifications & Contextual Help",
          description:
            "Technical specifications, compatibility notes, and pricing details are embedded directly in the configuration flow—no more switching to PDF spec sheets or external documentation. Hovering over any component shows specs, and contextual tips explain trade-offs ('Adding a second power supply increases cost by $X but provides redundancy recommended for production workloads').",
        },
      ],
      mainImage: "/images/cases/econfig/e-config - design.png",
      mainImageAlt:
        "E-Config wizard interface showing guided step-by-step configuration with real-time validation and smart recommendations",
      mainImageCaption:
        "The redesigned wizard guides users through logical steps while preventing invalid configurations in real-time",
    },

    results: [
      "**60% reduction in configuration errors** — Real-time validation and guided flow prevented the most common mistakes that previously caused costly rework",
      "**30% faster configuration time** — Templates, smart defaults, and inline specs eliminated the need to context-switch between multiple tools and documents",
      "**100K+ configurations/year processed** — Platform handled IBM's full global hardware configuration volume with significantly higher accuracy",
      "**Onboarding time cut by weeks** — New sales engineers could produce valid configurations on their first day using templates, versus weeks of training previously required",
      "**Elimination of regional workarounds** — Standardized process replaced the patchwork of spreadsheets and cheat sheets that different teams had developed independently",
    ],

    learnings: [
      "Service design reveals what UI design can't. If I had only redesigned the interface, I would have made a prettier version of a broken process. The service blueprint showed that 40% of the pain was OUTSIDE the tool—in email threads, PDF lookups, and expert consultations. By bringing that context into the tool, we solved problems the original brief didn't even mention.",
      "Wizard patterns work exceptionally well for complex, rule-based workflows—but only when the steps match the user's mental model, not the system's data model. Our first prototype organized steps by component category (processors, memory, storage). Users hated it. When we reorganized by decision logic (use case → platform → compute → storage → network), completion rates jumped immediately.",
      "Preventing errors is exponentially more valuable than catching them. Every configuration error that made it to manufacturing cost IBM an average of 3-5 days in delays and rework. By making invalid configurations impossible to submit, we didn't just improve UX—we removed a significant source of operational cost.",
      "Templates are the ultimate onboarding tool. Instead of training new users on every possible configuration option, we gave them curated starting points that embodied best practices. This shifted the learning model from 'memorize everything' to 'understand how to customize from a known-good baseline.'",
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
      title: "About E-Config",
      description:
        "E-Config is IBM's internal hardware configuration tool used by sales engineers globally to build custom server, storage, and networking configurations. Every hardware deal at IBM flows through this tool.",
      stats: [
        { value: "100K+", label: "Configurations/year" },
        { value: "1000s", label: "Component options" },
        { value: "Global", label: "Sales teams" },
      ],
    },
    myRole: {
      title: "My Role",
      description:
        "I used service design methodology to map the end-to-end configuration journey and redesign the entire experience.",
      responsibilities: [
        "Service blueprint creation",
        "User shadowing (12 sessions)",
        "Wizard pattern design",
        "Validation engine UX",
        "Template library design",
      ],
      team: "2 designers + 3 developers + 1 PM",
      timeline: "18 months (2021-2022)",
    },
  },

  whyRedesign: {
    intro: "Configuration errors were costing IBM millions in returns, delays, and customer dissatisfaction. The existing tool worked against users instead of helping them.",
    problems: [
      {
        number: "01",
        title: "25% error rate",
        description:
          "Incompatible components, missing parts, incorrect quantities—all caught downstream by manufacturing.",
      },
      {
        number: "02",
        title: "Tribal knowledge dependency",
        description:
          "Expert users had mental models new users couldn't access. 'If you pick this processor, you need 4 DIMMs'—but nothing in the tool said that.",
      },
      {
        number: "03",
        title: "Fragmented workflow",
        description:
          "Users jumped between config tool, PDF specs, pricing spreadsheets, and email threads for a single order.",
      },
      {
        number: "04",
        title: "Regional workarounds",
        description:
          "Different teams had their own unofficial cheat sheets, leading to inconsistent processes.",
      },
    ],
  },

  designStrategy: {
    intro: "I started with service design—mapping the entire configuration-to-order journey, not just the tool interface.",
    insight:
      "The service blueprint revealed that 40% of user pain was OUTSIDE the tool—in email threads, PDF lookups, and expert consultations. By bringing that context into the tool, we solved problems the original brief didn't mention.",
  },

  keyDecisions: [
    {
      number: "01",
      title: "Decision-Based Wizard Steps",
      problem:
        "First prototype organized steps by component category (processors, memory, storage)—users hated it",
      solution:
        "Reorganized by decision logic: Use case → Platform → Compute → Storage → Network",
      tradeOff: "Required different data model than the database structure",
      outcome:
        "Completion rates jumped immediately when steps matched mental models",
    },
    {
      number: "02",
      title: "Real-Time Validation Engine",
      problem:
        "Errors only caught after submission, causing days of back-and-forth with manufacturing",
      solution:
        "Every selection triggers instant compatibility checks. Invalid options are grayed out with explanations.",
      tradeOff: "Required integration with complex product rules database",
      outcome:
        "60% reduction in configuration errors—problems caught at decision time, not downstream",
    },
    {
      number: "03",
      title: "Templates as Onboarding Tool",
      problem: "New users took weeks to configure independently",
      solution:
        "Pre-built templates for top 20 use cases, maintained by senior engineers",
      tradeOff: "Required governance process for template curation",
      outcome:
        "New sales engineers productive on day one by starting from templates",
    },
    {
      number: "04",
      title: "Inline Specifications",
      problem:
        "Users constantly switched to PDF spec sheets and external docs",
      solution:
        "Technical specs, compatibility notes, and pricing embedded directly in the flow",
      tradeOff: "More information density in the interface",
      outcome: "Eliminated context-switching, 30% faster configuration time",
    },
  ],

  impact: {
    headline: "Preventing errors is exponentially more valuable than catching them",
    metrics: [
      {
        value: "60%",
        label: "Fewer errors",
        description: "Real-time validation prevents mistakes at decision time",
      },
      {
        value: "30%",
        label: "Faster configuration",
        description:
          "Templates and inline specs eliminate context-switching",
      },
      {
        value: "100K+",
        label: "Configs/year",
        description: "Full global volume with higher accuracy",
      },
    ],
    ecosystemImpact: [
      {
        value: "0",
        label: "Regional workarounds",
        description:
          "Standardized process replaced patchwork of cheat sheets",
      },
    ],
  },

  reflection: {
    takeaways: [
      {
        title: "Service design reveals what UI design can't",
        description:
          "If I had only redesigned the interface, I would have made a prettier version of a broken process. The blueprint showed where to focus.",
      },
      {
        title: "Wizard steps must match mental models, not data models",
        description:
          "Organizing by component category failed. Organizing by decision logic succeeded.",
      },
      {
        title: "Preventing errors is cheaper than catching them",
        description:
          "Every error that reached manufacturing cost 3-5 days. Real-time validation removed that entirely.",
      },
    ],
    nextSteps: [
      "AI-suggested configurations based on deal history",
      "Integration with CRM for automated pricing",
      "Mobile review app for manager approvals",
    ],
  },

  nextCaseId: "igua",
};
