/**
 * Site copy lives here so the section components stay presentational.
 * Edit wording in this file; edit layout in components/.
 */

export const profile = {
  name: "Evans Obi",
  email: "evans.obi@vnsis.com",
  linkedin: "https://www.linkedin.com/in/evans-obi-670366148/",
  github: "https://github.com/VnsObi",
  whatsapp: "https://wa.me/2349075717088",
  location: "Based in Nigeria · Available for remote and international opportunities",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Selected Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export const hero = {
  title: "Technical Architect & Engineering Leader",
  tagline: "Problem → Architecture → Production",
  description:
    "I turn ambiguous operational and technical problems into production systems — from product decisions and architecture through implementation, infrastructure, and delivery.",
  meta: [
    "Founder & CTO at VNSIS Technologies",
    "Former CTO at Dustid",
    "Based in Nigeria",
    "Available for remote and international opportunities",
  ],
};

/** Organisations worked with. Each appears once — no repeats. */
export const organisations = [
  "VNSIS Technologies",
  "Dustid",
  "CIUCI Consulting",
  "AGCare Group",
  "Argus Protocol",
  "Edi Hospital",
  "AGCare Specialist Clinic",
  "Ameso Specialist Clinic",
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I work where product, architecture, and engineering ownership overlap. I'm usually most useful when the problem is still ambiguous: understanding the operational constraint, deciding what should be built, choosing the architecture and its trade-offs, and staying close enough to execution to get it reliably into production.",
    "I've done that across healthcare systems, agentic software, security infrastructure, and early-stage engineering organisations.",
    "I also build teams and technical functions — establishing structure, mentoring engineers, and creating the delivery practices a product needs as it and the organisation around it grow.",
  ],
  experienceNote:
    "Over eight years of combined experience across technology operations, infrastructure, cybersecurity, technical leadership, and software product delivery.",
};

export interface Project {
  id: string;
  title: string;
  summary: string[];
  /** Labelled prose blocks: role, architecture, contribution. */
  blocks?: { label: string; body?: string; items?: string[] }[];
  technicalFocus?: string[];
  status?: string;
  /** "live" renders the green production badge; "building" a neutral amber one. */
  statusTone?: "live" | "building";
  tags: string[];
  /** Screenshots. Only populated where real assets exist. */
  gallery?: { src: string; alt: string; label: string; caption: string }[];
  /**
   * Renders a visible "details still to be added" note. Leave undefined to
   * hide the placeholder rather than expose unfinished content publicly.
   */
  pending?: string[];
  note?: string;
  /** Verbatim third-party testimonial. Never paraphrase. */
  quote?: { text: string; attribution: string };
  /** External proof, such as a public repository. */
  link?: { href: string; label: string };
}

export const projects: Project[] = [
  {
    id: "healthos",
    title: "HealthOS — From Operational Gaps to a Production Healthcare Platform",
    summary: [
      "Running technology across multiple healthcare sites, I kept seeing the same operational gaps: fragmented workflows, clinical and administrative systems that didn't talk to each other, coordination done by hand, and poor continuity between pharmacy, billing, HMO, and patient operations. On top of that, the internet connection could not be relied on.",
      "I designed HealthOS around those operational problems rather than starting from a feature list. It is one multi-tenant platform for patient records, consultations, nursing, laboratory, pharmacy, billing, HMO processes, inventory, and reporting — and because a ward cannot stop admitting patients when a link goes down, it keeps full clinical and billing function with no connection at all.",
      "HealthOS is now in production with active healthcare users.",
    ],
    blocks: [
      {
        label: "My role",
        body: "Founder and technical architect. I identified the problem, decided what to build, and own the architecture end to end — the multi-tenant model, the offline-first data and synchronization strategy, workflow and role separation, the security model, and the infrastructure and deployment design. I set implementation priorities and release direction, contribute directly to development and deployment, and iterate on the system as it runs in production.",
      },
    ],
    technicalFocus: [
      "Multi-tenant client architecture with per-tenant separation",
      "Offline-first data handling and synchronization strategy",
      "Local-network hub sync for sites with no internet but a working LAN",
      "Role-based access control and workflow separation",
      "Flutter-based multi-platform application",
      "Backend APIs and database services",
      "Cloud deployment and DNS architecture",
      "Healthcare billing, HMO, pharmacy, and inventory workflow design",
    ],
    status: "In production · Active healthcare users",
    tags: [
      "Systems Architecture",
      "Flutter",
      "APIs",
      "PostgreSQL",
      "Offline-first",
      "Multi-tenant SaaS",
      "Cloud Infrastructure",
    ],
    gallery: [
      {
        src: "/work/healthos-connected.png",
        alt: "HealthOS dashboard with a green Cloud status badge, showing bed occupancy, inpatient counts, lab worklist and billing tiles.",
        label: "Cloud",
        caption:
          "Connected to the cloud. Clinical and billing tiles read from the central tenant database.",
      },
      {
        src: "/work/healthos-offline.png",
        alt: "The same HealthOS dashboard with an amber Offline status badge, showing identical clinical and billing data.",
        label: "Offline",
        caption:
          "Internet down. The same screens, the same data — the ward keeps working from the local store.",
      },
      {
        src: "/work/healthos-syncing.png",
        alt: "The same HealthOS dashboard with a Syncing status badge while local changes upload.",
        label: "Syncing",
        caption:
          "Connection restored. Queued local writes reconcile with the server in the background.",
      },
      {
        src: "/work/healthos-lan-hub.png",
        alt: "The same HealthOS dashboard with a LAN Hub status badge, indicating devices sharing an on-site hub.",
        label: "LAN Hub",
        caption:
          "No internet, but the building has a network. Devices sync to an on-site hub instead.",
      },
    ],
  },
  {
    id: "dustid",
    title: "Dustid — Building the Engineering Function from the Ground Up",
    summary: [
      "Dustid is a UK technology startup developing an addressless phonebook and digital identity product.",
      "I joined as CTO when the technical side was a small backend team. The job was not only to lead engineers but to build the organisation they worked in: the structure, responsibilities, delivery practices, hiring, and security baseline needed for a cross-functional product team covering backend, frontend, UI/UX, QA, cybersecurity, and project management.",
    ],
    blocks: [
      {
        label: "My role",
        body: "I led the technical function and owned the architecture, security, and delivery decisions across it, while mentoring the engineers working inside it.",
      },
      {
        label: "What I built",
        items: [
          "Team construction across engineering, design, QA, and security",
          "Technical organisation design: roles, responsibilities, and ownership",
          "System architecture and design review",
          "Mentorship of engineers across the distributed team",
          "Interviewed 70+ candidates and helped shape hiring and onboarding across the technical organisation",
          "Delivery structure: planning, supervision, and release coordination",
          "Security and engineering standards, including the access-control model",
          "Delivery under this structure included a Chrome extension, from requirements through in-browser testing and release",
        ],
      },
    ],
    note: "Helped grow the technical organisation from an early backend team into a 30+ person cross-functional group spanning engineering, product, QA, design and security.",
    quote: {
      text: "He is not a consultant. He is a builder.",
      attribution: "Michael Livingstone, Founder & CEO, Dustid",
    },
    tags: [
      "CTO Leadership",
      "Architecture",
      "Product Delivery",
      "Distributed Teams",
      "Security",
      "Engineering Operations",
    ],
  },
  {
    id: "dialectica",
    title: "Dialectica — Production Agentic Research & Execution System",
    summary: [
      "Dialectica researches claims in a blockchain prediction market and, where the evidence supports it, acts on them with real on-chain transactions. It monitors the claim lifecycle, interprets each claim into a structured predicate with an LLM, retrieves price data or web evidence, decides, and then executes.",
      "The engineering challenge was not making an LLM call tools; it was making autonomous execution reliable and safe enough for production, where a wrong or duplicated action costs money.",
    ],
    blocks: [
      {
        label: "My role",
        body: "I architected and delivered the system end to end: the stateful agent workflow, retrieval and LLM interpretation, the decision guardrails, wallet and transaction execution, persistence, and failure handling.",
      },
      {
        label: "Making execution safe",
        items: [
          "Fail-closed decisions: missing evidence, invalid structured output, or an LLM error returns NO_BET, never a bet",
          "Contract-state preflight guards before every transaction; missing preflight data fails closed",
          "Multicall3 batching for read-heavy eligibility checks",
          "Gas and nonce handling: pending nonces, EIP-1559 fields, estimation buffers, and receipt checks",
          "RSA-OAEP encryption of votes before submission",
          "Payout and refund sweep that finds settled claims and routes inconclusive outcomes to refund",
          "Persisted claim, decision, and action state, with bounded retries and a poll loop that survives failed cycles",
        ],
      },
    ],
    link: {
      href: "https://github.com/VnsObi/Dialectica_bot",
      label: "View the code on GitHub",
    },
    tags: [
      "AI Agents",
      "RAG",
      "LLMs",
      "Python",
      "Blockchain",
      "Transaction Safety",
    ],
  },
  {
    id: "argus",
    title: "Argus — Authorization Infrastructure for Autonomous Systems",
    summary: [
      "Autonomous agents and onchain systems make decisions against dependencies and risk conditions that keep changing. Traditional authorization usually evaluates only the immediate request — so an action that was safe when approved can stop being safe before, or while, it runs.",
      "Argus is my architectural response to that gap: infrastructure that constrains what autonomous systems are allowed to do, rather than another agent that does more.",
    ],
    blocks: [
      {
        label: "My role",
        body: "Founder and architect. I own the problem definition, the authorization and risk architecture, and the direction of the build.",
      },
    ],
    technicalFocus: [
      "Pre-execution authorization: actions are assessed before they run",
      "Dependency-aware risk across the systems an action relies on",
      "Continuous authorization rather than a one-time check",
      "Invalidating an action when its underlying risk state changes",
      "Explainable controls, so every decision can be traced to its reason",
    ],
    status: "In active development",
    statusTone: "building",
    tags: [
      "Security Architecture",
      "Authorization",
      "Risk Graphs",
      "Autonomous Systems",
      "TypeScript",
    ],
  },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  description: string;
  focus: string[];
}

export const experience: Role[] = [
  {
    company: "VNSIS Technologies Limited",
    title: "Founder & CTO",
    period: "2026–Present",
    description:
      "Architect and deliver technology products for healthcare and operationally complex organisations, owning system design, infrastructure, and security alongside technical product direction. Current work includes HealthOS, now in production with active healthcare users, cloud infrastructure, internal business systems, automation, and technical consulting.",
    focus: [
      "Systems architecture",
      "Product engineering",
      "Cloud & infrastructure",
      "Security",
      "Technical product direction",
    ],
  },
  {
    company: "Dustid",
    title: "CTO — Fractional Engagement",
    period: "2025",
    description:
      "Provided technical leadership for a UK startup: engineering structure and oversight, system architecture, the security model, product delivery, technical hiring, and cross-functional project coordination across a distributed team.",
    focus: [
      "Technical leadership",
      "Architecture",
      "Engineering oversight",
      "Product delivery",
      "Security",
      "Technical hiring",
    ],
  },
  {
    company: "CIUCI Consulting / AGCare Assets",
    title: "IT Manager",
    period: "2024–Present",
    description:
      "Lead technology operations across multiple healthcare sites, covering infrastructure, security, healthcare software deployment, vendor management, technical planning, and user support — including the rollout of EMR, connectivity, ticketing, and HR platforms in business-critical environments.",
    focus: [
      "Multi-site infrastructure",
      "Healthcare systems & EMR",
      "Technical operations",
      "Security",
      "Connectivity",
      "Vendor management",
    ],
  },
];

export const experienceIntro =
  "Infrastructure → security → technical operations → CTO and architecture → product and systems leadership.";

export const previousExperience = {
  heading: "Previous Experience",
  description:
    "Earlier roles included IT operations, cybersecurity, application security, infrastructure delivery, and enterprise technical support.",
};

export interface Capability {
  title: string;
  description: string;
  /** The lead capability renders full-width above the rest. */
  lead?: boolean;
}

export const capabilities: Capability[] = [
  {
    title: "Systems & Solutions Architecture",
    description:
      "The umbrella for everything below: designing and owning complex systems end to end — software, infrastructure, integrations, security, data, and the operational workflows they serve. The areas below are the parts of the system I work across, not separate specialisms.",
    lead: true,
  },
  {
    title: "Technical Leadership",
    description:
      "Turning product and business goals into technical plans, building engineering structure, reviewing technical decisions, and driving delivery.",
  },
  {
    title: "Product Engineering",
    description:
      "Building and shipping web, mobile, backend, API, database, and integration work for products that run in production.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Designing, deploying, and operating Linux, containers, VPS and cloud services, databases, DNS, CI/CD, reverse proxies, monitoring, and production environments.",
  },
  {
    title: "Security Engineering",
    description:
      "Embedding security architecture, access control, secrets management, vulnerability assessment, application security, and operational controls into systems.",
  },
  {
    title: "AI & Agent Systems",
    description:
      "Building agentic systems with LLMs, RAG, tool use and MCP, structured outputs, and guarded execution — so they can call services and act safely in production.",
  },
];

export const toolkit = [
  {
    group: "Application & Product",
    items: [
      "Flutter",
      "TypeScript",
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "TypeORM",
      "Web & mobile architecture",
    ],
  },
  {
    group: "AI & Automation",
    items: [
      "LLM integrations",
      "AI agents",
      "RAG",
      "MCP",
      "Structured outputs",
      "Workflow automation",
    ],
  },
  {
    group: "Infrastructure",
    items: [
      "Linux",
      "Docker",
      "VPS",
      "Cloudflare",
      "Vercel",
      "DNS",
      "Deployment",
      "Monitoring",
    ],
  },
  {
    group: "Security",
    items: [
      "Application security",
      "Access control",
      "Secrets management",
      "Vulnerability assessment",
      "Security architecture",
      "ISO 27001 familiarity",
      "NIST CSF familiarity",
    ],
  },
  {
    group: "Leadership & Delivery",
    items: [
      "Architecture review",
      "Technical roadmaps",
      "Requirements analysis",
      "Engineering coordination",
      "Technical recruitment",
      "QA",
      "Production delivery",
    ],
  },
];

export const contribute = [
  {
    title: "Systems Architecture",
    description:
      "Design and own complex systems from requirements through production.",
  },
  {
    title: "Technical Leadership",
    description:
      "Build teams, engineering structure, standards, and delivery capability.",
  },
  {
    title: "Product Engineering",
    description: "Own high-impact product problems end to end.",
  },
  {
    title: "Infrastructure & Security",
    description:
      "Build the operational and security foundations those systems depend on.",
  },
];

export const contact = {
  heading: "Interested in Working Together?",
  paragraphs: [
    "I'm open to joining a team — in roles such as Staff or Founding Engineer, Technical Architect, Head of Engineering, or CTO — and to selected company and project work.",
    "If you're building a serious product and need someone who can take a hard problem from definition to production, and build the team around it, I'd be glad to hear from you.",
  ],
  actions: [
    { label: "Discuss a Role", subject: "Discussing a role" },
    { label: "Discuss a Project", subject: "Discussing a project" },
  ],
};
