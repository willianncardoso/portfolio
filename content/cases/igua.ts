/**
 * CASE STUDY: Iguá Saneamento (Service Design & Digital Transformation)
 */

import { CaseStudy } from "@/types";

export const iguaCase: CaseStudy = {
  id: "igua",
  order: 4,
  category: "Service Design",
  title: "Iguá Saneamento: Digital Transformation of Customer Service",
  subtitle:
    "Redesigning the entire customer journey for a water utility company, from service blueprints to a self-service app that cut call center volume by 50%",
  cardDescription:
    "Led service design for Iguá's digital transformation, mapping end-to-end customer journeys and delivering a self-service platform that improved satisfaction by 40%",

  metadata: {
    role: "UX/UI Designer",
    timeline: "14 months (2019-2020)",
    team: "3 designers, 1 PM, 2 developers",
    company: "IBM (consulting for Iguá)",
    client: "Iguá Saneamento",
  },

  images: {
    cover: "/images/cases/igua/Iguá - thumb.png",
    hero: "/images/cases/igua/Iguá - design.png",
    heroAlt:
      "Iguá customer service journey map and self-service app interface",
  },

  metrics: [
    { value: "40%", label: "Increase in customer satisfaction" },
    { value: "50%", label: "Reduction in call center volume" },
    { value: "200K+", label: "App downloads in first 6 months" },
  ],

  process: [
    {
      number: "01",
      title: "Map",
      duration: "8 weeks",
      bullets: ["12 service blueprints", "Customer journeys", "Backstage mapping"],
    },
    {
      number: "02",
      title: "Research",
      duration: "4 weeks",
      bullets: ["25+ interviews", "4 cities visited", "Diverse demographics"],
    },
    {
      number: "03",
      title: "Design",
      duration: "6 weeks",
      bullets: ["Progressive disclosure", "Large touch targets", "Plain language"],
    },
    {
      number: "04",
      title: "Test",
      duration: "4 weeks",
      bullets: ["In-home testing", "Low literacy users", "Trust validation"],
    },
    {
      number: "05",
      title: "Scale",
      duration: "Phased",
      bullets: ["3-phase rollout", "200K+ downloads", "50% fewer calls"],
    },
  ],

  content: {
    overview: [
      "Iguá Saneamento is one of Brazil's largest private water and sanitation utilities, serving over 6 million people across multiple states. As part of an IBM consulting engagement, I was embedded with their team to lead the service design for a comprehensive digital transformation of their customer-facing operations.",
      "The project went far beyond designing an app. We mapped the entire customer service ecosystem—from bill disputes to leak reports to new connections—and identified where digital touchpoints could replace or augment manual processes. The goal was to reduce dependency on expensive call center operations while genuinely improving the customer experience, especially for a user base with varying levels of digital literacy.",
    ],

    challenge: {
      description:
        "Iguá's customer service operations were almost entirely analog, creating friction for customers and unsustainable costs for the business:",
      points: [
        "Over 80% of customer interactions happened via call center or in-person visits—even for simple tasks like checking a bill or reporting a payment, creating long wait times and high operational costs",
        "No digital self-service options: customers couldn't view their consumption history, download invoices, or request services online, forcing them to visit physical offices or wait on hold",
        "Fragmented experience across channels—information given by phone didn't match what customers found at local offices, eroding trust and causing repeat contacts",
        "Extremely diverse user base spanning urban professionals, rural communities, and elderly populations with varying levels of digital literacy and smartphone access",
        "Internal systems were siloed: billing, field operations, and customer service each had separate databases that didn't communicate, making it impossible to give customers a unified view of their account",
        "High volume of repeat calls—customers calling back to check status of service requests because there was no proactive communication or tracking capability",
      ],
    },

    approach: [
      {
        title: "Service Blueprint & Ecosystem Mapping",
        description:
          "Spent the first 8 weeks creating comprehensive service blueprints for the 12 highest-volume customer journeys (bill payment, leak reporting, new connections, consumption disputes, etc.). Mapped every frontstage interaction, backstage process, and support system. This revealed that many customer pain points weren't caused by bad interfaces—they were caused by broken internal handoffs between departments. For example, a leak report took 3 internal transfers before reaching the field team, and no one notified the customer of progress.",
      },
      {
        title: "Field Research with Diverse Users",
        description:
          "Conducted 25+ interviews and contextual inquiries across 4 cities, deliberately recruiting participants across age groups, income levels, and digital comfort. Visited physical service offices to observe in-person interactions. Ran usability tests with low-fidelity prototypes in customers' homes. Key insight: the barrier to digital adoption wasn't resistance to technology—it was fear of making mistakes with financial consequences. Customers worried about paying the wrong bill, reporting incorrect meter readings, or not understanding the app. Trust and error-prevention were more important than features.",
      },
      {
        title: "Progressive Disclosure Design Strategy",
        description:
          "Based on the literacy research, designed the entire digital experience around progressive disclosure: show the simplest version first, reveal complexity only when needed. Every screen starts with the most common action (e.g., bill payment screen shows current bill with one-tap pay), with secondary actions accessible but not overwhelming. Used large touch targets, plain language (tested with real users for comprehension), and visual confirmation at every step.",
      },
      {
        title: "Phased Rollout by Use Case Volume",
        description:
          "Prioritized development based on call center data: the top 5 call reasons accounted for 70% of volume. Phase 1 targeted these high-volume, low-complexity interactions (view/pay bill, check consumption, report leak). Phase 2 added medium-complexity flows (service requests, consumption disputes). Phase 3 covered edge cases and advanced features. Each phase included a feedback loop—we interviewed users after each launch to inform the next phase.",
      },
    ],

    solution: {
      description:
        "The solution was a multi-channel digital platform designed for accessibility and trust:",
      highlights: [
        {
          title: "Self-Service Mobile App",
          description:
            "Native mobile app for bill payment, consumption history, leak reporting, and service requests. Designed with oversized buttons, step-by-step flows with visual confirmations, and plain-language copy tested with real users across literacy levels. One-tap bill payment with multiple methods (PIX, credit card, boleto). Push notifications for bill due dates, consumption alerts, and service request updates.",
        },
        {
          title: "Real-Time Service Tracking",
          description:
            "Package-tracking-style interface for service requests: customers can see exactly where their request is in the process, who's handling it, and estimated resolution time. This single feature eliminated the #2 call center reason (status check calls). Proactive SMS/push notifications at each stage transition reduced anxiety and repeat contacts.",
        },
        {
          title: "Consumption Intelligence Dashboard",
          description:
            "Visual consumption history with month-over-month comparisons, anomaly detection ('Your consumption this month is 40% higher than usual—possible leak?'), and estimated bill projections. Designed as simple bar charts with color coding (green = normal, yellow = above average, red = unusual). This transformed a common source of disputes into a transparency tool that built trust.",
        },
        {
          title: "Omnichannel Service Consistency",
          description:
            "Unified backend ensured customers received the same information whether they used the app, called the center, or visited an office. Service agents could see the customer's digital interactions and pick up where the app left off. This eliminated the 'I was told something different' frustration that drove repeat contacts and eroded trust.",
        },
      ],
      mainImage: "/images/cases/igua/Iguá - design.png",
      mainImageAlt:
        "Iguá self-service app showing bill payment, consumption dashboard, and service tracking interfaces",
      mainImageCaption:
        "The self-service platform was designed for accessibility across all digital literacy levels",
    },

    results: [
      "**40% increase in customer satisfaction** — Post-launch CSAT surveys showed significant improvement, with 'ease of paying bills' and 'transparency' cited as top reasons",
      "**50% reduction in call center volume** — Self-service adoption for high-volume tasks (bill viewing, payments, status checks) dramatically reduced call center dependency",
      "**200K+ app downloads in 6 months** — Strong organic adoption driven by word-of-mouth and in-office promotion, exceeding initial projections by 3x",
      "**85% reduction in status-check calls** — Real-time service tracking virtually eliminated the second-highest call center volume driver",
      "**Digital payment adoption exceeded 60%** — Customers who previously paid only at physical offices migrated to app-based payment, reducing collection costs",
    ],

    learnings: [
      "Service design requires understanding the entire ecosystem, not just the digital interface. The service blueprints revealed that most customer frustration came from broken internal handoffs, not from the lack of an app. If we had jumped straight to building a mobile app without mapping the backend service chain, we would have digitized a broken process.",
      "Designing for low digital literacy taught me the value of progressive disclosure and plain language. Every 'simple' interaction has hidden complexity. 'Pay your bill' seems straightforward until you consider: which bill? What if there's a past-due balance? What payment methods? What if the payment fails? Designing for the least confident user made the experience better for everyone.",
      "Trust is the product when you're handling people's money and essential services. Users didn't want 'cool features'—they wanted certainty that their payment went through, that their leak report was received, that their meter reading was correct. Every design decision was filtered through 'does this increase or decrease trust?'",
      "Phased rollout based on call center data was the right strategy. It let us prove ROI quickly (Phase 1 alone cut 30% of call volume), which secured funding for subsequent phases. It also gave us real usage data to inform later design decisions rather than relying on assumptions.",
      "Accessibility isn't a feature—it's a design philosophy. Large touch targets, plain language, visual confirmations, and error prevention weren't 'accessibility additions'—they were the core design approach. When you design for the edges, the middle takes care of itself.",
    ],
  },

  nextCaseId: null,
};
