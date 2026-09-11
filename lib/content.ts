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
  { name: "Contact", href: "#contact" },
];

export const hero = {
  title: "Technical Architect & Engineering Leader",
  tagline: "Systems · Infrastructure · Security",
  description:
    "I design, build, and lead production systems across software, infrastructure, security, and AI. My work spans architecture, technical leadership, product delivery, and hands-on implementation — from the first technical decision to production.",
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
    "I'm Evans Obi, a technical architect and engineering leader with experience across systems design, software delivery, IT operations, cloud infrastructure, cybersecurity, and engineering management.",
    "My background grew from infrastructure, cybersecurity, and enterprise IT into technical leadership, product architecture, and hands-on software delivery.",
    "I have led cross-functional teams, translated business requirements into technical plans, reviewed architecture and implementation decisions, coordinated frontend, backend, QA, design, and security work, and contributed directly to the development and deployment of production systems.",
    "Today, I work across system architecture and hands-on technical execution, particularly in healthcare technology, AI-agent systems, cloud services, workflow automation, and offline-first applications.",
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
  tags: string[];
  /** Screenshots. Only populated where real assets exist. */
  gallery?: { src: string; alt: string; label: string; caption: string }[];
  /**
   * Renders a visible "details still to be added" note. Leave undefined to
   * hide the placeholder rather than expose unfinished content publicly.
   */
  pending?: string[];
  note?: string;
}

export const projects: Project[] = [
  {
    id: "healthos",
    title: "HealthOS — Offline-First Healthcare Operations Platform",
    summary: [
      "HealthOS is a multi-tenant platform being developed by VNSIS Technologies for hospitals and clinics operating in environments where internet access may be slow or unreliable. A ward cannot stop admitting patients because a link went down, so the system is designed to keep full clinical and billing function with no connection at all.",
      "The platform brings clinical and administrative workflows together, including patient records, consultations, nursing, laboratory, pharmacy, billing, HMO processes, inventory, appointments, and operational reporting.",
    ],
    blocks: [
      {
        label: "My role",
        body: "Founder and technical architect. I own the architecture end to end — the multi-tenant model, the offline-first data and synchronization strategy, workflow and role separation, the security model, and the infrastructure and deployment design — and I set implementation priorities and release direction. I also contribute directly to development, testing, deployment, and technical troubleshooting.",
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
    status: "Active development · First pilot client onboarded",
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
    title: "Dustid — CTO, Engineering Leadership & Architecture",
    summary: [
      "Dustid is a UK technology startup developing an addressless phonebook and digital identity product.",
      "I joined as CTO and built out the technical function, taking it from a small backend team to a cross-functional product organisation covering backend, frontend, UI/UX, QA, cybersecurity, and project management — and owning the architecture, security, and delivery decisions across it.",
    ],
    blocks: [
      {
        label: "My role",
        body: "I led the technical function: system architecture and design review, the security and access-control model, engineering structure and process, product planning, delivery oversight, and release coordination across a distributed team.",
      },
      {
        label: "Scope of responsibility",
        items: [
          "Architecture review and system design decisions",
          "Security review and access-control design",
          "Technical and product oversight across the engineering function",
          "Engineering team structure, process design, and coordination",
          "Product planning, delivery supervision, and release coordination",
          "Oversight of product initiatives, including the Chrome extension project",
          "Technical recruitment and interviewing",
          "Collaboration across engineering, design, QA, and project management",
        ],
      },
    ],
    note: "Technical hiring was one part of the role: I interviewed more than 70 candidates and supported a distributed team that grew past 30 contributors during the engagement.",
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
    id: "ai-agent",
    title: "AI Research and Decision Agent",
    summary: [
      "An AI-assisted research system for a blockchain-based decision and truth-market product. The agent collected and evaluated claims, used retrieval and language-model workflows to interpret evidence, and carried the result through to on-chain operations.",
    ],
    blocks: [
      {
        label: "My role",
        body: "I architected and delivered the system end to end — agent orchestration and retrieval design, the language-model workflows, the blockchain integration, and the production hardening and hosting that kept it running after handover.",
      },
      {
        label: "Architecture & contribution",
        items: [
          "System architecture and delivery",
          "Research-agent orchestration and workflows",
          "Retrieval-augmented generation",
          "LLM-based interpretation and structured output",
          "Wallet and blockchain interactions",
          "Encrypted rounds and challenge cycles",
          "Batch and multicall operations",
          "Logging, failure handling, and production hardening",
          "Deployment, hosting, and post-delivery remediation",
        ],
      },
    ],
    tags: [
      "AI Agents",
      "RAG",
      "LLMs",
      "Systems Architecture",
      "Python",
      "Blockchain",
      "Automation",
    ],
  },
  {
    id: "chrome-extension",
    title: "Chrome Extension — Product & Delivery Leadership",
    summary: [
      "I led the delivery of a Chrome extension from requirements and workflow definition through engineering coordination, testing, and release preparation.",
    ],
    blocks: [
      {
        label: "My role",
        body: "Delivery lead. I translated the product requirement into technical tasks and workflows, coordinated implementation across contributors, reviewed progress, and resolved delivery blockers. A browser extension runs inside someone else's page and against its own backing services, so a large part of the work was verifying that it behaved correctly in the browser environment and against the services it depended on, rather than only in isolation.",
      },
    ],
    tags: [
      "Chrome Extensions",
      "JavaScript",
      "APIs",
      "Product Leadership",
      "QA",
      "Delivery",
    ],
  },
  {
    id: "argus",
    title: "Argus Protocol — Security Architecture & Risk Infrastructure",
    summary: [
      "Argus Protocol is security infrastructure for blockchain software supply chains. It analyses package dependencies and propagates risk across the relationships between them, so that a problem in one package is visible in everything that depends on it.",
    ],
    blocks: [
      {
        label: "My role",
        body: "I design the data model and risk architecture: how packages and their dependencies are crawled and modelled, how risk propagates recursively across the dependency graph, how each score can be traced back to the reason that produced it, and how the resulting state is stored, served, and visualised.",
      },
    ],
    technicalFocus: [
      "Dependency graph modelling and recursive risk propagation",
      "Reason tracing, so a score can be explained rather than just reported",
      "Rule-based security analysis",
      "Package crawling and ingestion services",
      "PostgreSQL and TypeORM database design",
      "TypeScript and Node.js backend services",
      "Sui blockchain data",
      "Graph visualisation of connected packages and their risk states",
    ],
    tags: [
      "Security Architecture",
      "Graph Systems",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Sui",
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
      "Architect and deliver technology products for healthcare and operationally complex organisations, owning system design, infrastructure, and security alongside technical product direction. Current work includes HealthOS, cloud infrastructure, internal business systems, automation, and technical consulting.",
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
      "Designing end-to-end technical systems across software, infrastructure, integrations, security, deployment, data, and operational workflows.",
    lead: true,
  },
  {
    title: "Technical Leadership",
    description:
      "Turning product and business goals into technical plans, coordinating engineering disciplines, reviewing technical decisions, and driving delivery.",
  },
  {
    title: "Product Engineering",
    description:
      "Building and shipping web, mobile, backend, API, database, integration, and AI-enabled products.",
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
      "Building AI-enabled workflows using LLMs, RAG, tool use, structured outputs, automation, agent systems, and external integrations.",
  },
  {
    title: "MCP & Tool Integration",
    description:
      "Working with Model Context Protocol concepts and tool-connected AI systems that can retrieve context, call services, and perform controlled actions.",
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
      "I design practical end-to-end systems across software, infrastructure, security, data, integrations, and deployment.",
  },
  {
    title: "Technical Leadership",
    description:
      "I lead technical delivery, coordinate engineering disciplines, review architecture and implementation decisions, and help teams move from ambiguity to execution.",
  },
  {
    title: "Product Engineering",
    description:
      "I build and improve web, mobile, backend, AI-enabled, and operational products, with attention to how the entire system behaves in production.",
  },
  {
    title: "Infrastructure & Security",
    description:
      "I design and improve production infrastructure with reliability, access control, observability, security, and operational resilience in mind.",
  },
];

export const contact = {
  heading: "Let's Work Together",
  paragraphs: [
    "I'm open to technical architecture, systems and solutions architecture, technical leadership, product engineering, fractional CTO, and selected hands-on software opportunities.",
    "If you're building a serious product or technical platform and need someone who can connect architecture, code, infrastructure, security, delivery, and business requirements, I'd be glad to hear from you.",
  ],
};
