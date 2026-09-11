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
  title: "Technology Leadership & Full-Stack Product Delivery",
  paragraphs: [
    "I lead technical teams and build web, mobile, cloud, and AI-powered products. My work covers product architecture, backend systems, infrastructure, security, engineering oversight, and delivery—from the first technical decision to production.",
    "I currently lead VNSIS Technologies, where I am building HealthOS, an offline-first healthcare operations platform. I have also served as CTO at Dustid and delivered products involving AI agents, browser extensions, workflow automation, and blockchain infrastructure.",
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
    "I'm Evans Obi, a technology leader and product builder with experience across software delivery, IT operations, cloud infrastructure, cybersecurity, and engineering management.",
    "My background did not begin as a conventional full-stack developer working on application code every day. I grew through infrastructure, security, enterprise IT, and technical leadership, and later moved deeper into product architecture and software delivery.",
    "I have led cross-functional teams, translated business requirements into technical plans, reviewed architecture and implementation decisions, coordinated frontend, backend, QA, design, and security work, and contributed directly to the development and deployment of production systems.",
    "Today, I work across product strategy and hands-on technical execution, particularly in healthcare technology, AI-agent systems, cloud services, workflow automation, and offline-first applications.",
  ],
  experienceNote:
    "Over seven years of combined experience across technology operations, infrastructure, cybersecurity, technical leadership, and software product delivery.",
};

export interface Project {
  id: string;
  title: string;
  summary: string[];
  /** Labelled prose blocks: role, contribution, responsibilities. */
  blocks?: { label: string; body?: string; items?: string[] }[];
  technicalFocus?: string[];
  status?: string;
  tags: string[];
  /** Screenshots. Only populated where real assets exist. */
  gallery?: { src: string; alt: string; label: string; caption: string }[];
  /** Renders a visible "details still to be added" note. */
  pending?: string[];
  note?: string;
}

export const projects: Project[] = [
  {
    id: "healthos",
    title: "HealthOS — Offline-First Healthcare Operations Platform",
    summary: [
      "HealthOS is a multi-tenant platform being developed by VNSIS Technologies for hospitals and clinics operating in environments where internet access may be slow or unreliable.",
      "The platform brings clinical and administrative workflows together, including patient records, consultations, nursing, laboratory, pharmacy, billing, HMO processes, inventory, appointments, and operational reporting.",
    ],
    blocks: [
      {
        label: "My role",
        body: "Founder and technical product lead. I define the product architecture, workflows, security requirements, infrastructure, implementation priorities, and release direction. I also contribute to development, testing, deployment, and technical troubleshooting.",
      },
    ],
    technicalFocus: [
      "Flutter-based multi-platform application",
      "Offline-first data handling and synchronization",
      "Multi-tenant client architecture",
      "Role-based access and workflow separation",
      "Backend APIs and database services",
      "Cloud deployment and DNS architecture",
      "Healthcare billing, HMO, pharmacy, and inventory workflows",
    ],
    status: "Active development · First pilot client onboarded",
    tags: [
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
    title: "Dustid — Product and Engineering Leadership",
    summary: [
      "Dustid is a UK technology startup developing an addressless phonebook and digital identity product.",
      "I joined in a CTO capacity and helped expand the technical operation from a small backend team into a cross-functional product organisation covering backend, frontend, UI/UX, QA, cybersecurity, and project management.",
    ],
    blocks: [
      {
        label: "My role included",
        items: [
          "Technical and product oversight",
          "Engineering team structure and coordination",
          "Recruitment and technical interviews",
          "Product planning and delivery supervision",
          "Architecture and security reviews",
          "Access-control and engineering-process design",
          "Collaboration across engineering, design, QA, and project management",
        ],
      },
    ],
    note: "I interviewed more than 70 candidates and worked with a distributed team that grew to more than 30 contributors during the engagement.",
    tags: [
      "CTO Leadership",
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
      "I delivered an AI-assisted research system for a blockchain-based decision and truth-market product. The agent collected and evaluated claims, used retrieval and language-model workflows to interpret evidence, and supported on-chain operations.",
    ],
    blocks: [
      {
        label: "My contribution covered",
        items: [
          "System architecture and delivery",
          "Research-agent workflows",
          "Retrieval-augmented generation",
          "LLM-based interpretation",
          "Wallet and blockchain interactions",
          "Encrypted rounds and challenge cycles",
          "Batch and multicall operations",
          "Logging, failure handling, and production hardening",
          "Deployment, hosting, and post-delivery remediation",
        ],
      },
    ],
    tags: ["AI Agents", "RAG", "LLMs", "Python", "Blockchain", "APIs", "Automation"],
  },
  {
    id: "chrome-extension",
    title: "Chrome Extension Product Delivery",
    summary: [
      "I led the delivery of a Chrome extension project from requirements and workflow definition through engineering coordination, testing, and release preparation.",
      "My responsibilities included translating the product requirement into technical tasks, coordinating implementation across contributors, reviewing progress, resolving delivery blockers, and ensuring that the extension behaved correctly within the browser environment and its supporting services.",
    ],
    pending: [
      "Extension name",
      "Screenshots",
      "Chrome Web Store link",
      "Exact stack",
      "Measurable results",
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
    title: "Argus Protocol — Blockchain Risk Infrastructure",
    summary: [
      "Argus Protocol is a security infrastructure project designed to analyse package dependencies and propagate risk across blockchain software relationships.",
      "My work includes package crawling, dependency modelling, recursive risk propagation, reason tracing, database design, and visual representation of connected packages and their risk states.",
    ],
    technicalFocus: [
      "Sui blockchain data",
      "TypeScript and Node.js services",
      "PostgreSQL and TypeORM",
      "Dependency graphs",
      "Recursive risk scoring",
      "Rule-based security analysis",
      "Graph visualisation",
    ],
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Sui", "Security", "Graph Systems"],
  },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  description: string;
}

export const experience: Role[] = [
  {
    company: "VNSIS Technologies Limited",
    title: "Founder & CTO",
    period: "2026–Present",
    description:
      "Building and delivering technology products for healthcare and operationally complex organisations. Current work includes HealthOS, cloud infrastructure, internal business systems, automation, security, and technical consulting.",
  },
  {
    company: "Dustid",
    title: "CTO — Fractional/Volunteer Engagement",
    period: "2025",
    description:
      "Provided technical leadership for a UK startup, covering engineering structure, recruitment, architecture, security, product delivery, and coordination across a distributed cross-functional team.",
  },
  {
    company: "CIUCI Consulting / AGCare Assets",
    title: "IT Manager",
    period: "2024–Present",
    description:
      "Lead day-to-day technology operations across multiple healthcare assets. Responsibilities include infrastructure, security, healthcare software deployment, vendor management, user support, technical planning, and the rollout of systems such as EMR, connectivity, ticketing, and HR platforms.",
  },
];

export const previousExperience = {
  heading: "Previous Experience",
  description:
    "Earlier roles included IT operations, cybersecurity, application security, infrastructure delivery, and enterprise technical support.",
};

export const capabilities = [
  {
    title: "Full-Stack Product Development",
    description:
      "Building and shipping web and mobile products across frontend, backend, APIs, databases, authentication, integrations, testing, and deployment.",
  },
  {
    title: "Technical Leadership",
    description:
      "Turning product goals into clear engineering plans, coordinating cross-functional teams, reviewing implementation decisions, and keeping delivery moving.",
  },
  {
    title: "AI & Agent Systems",
    description:
      "Developing systems that combine LLMs, retrieval workflows, tool use, structured reasoning, automation, and external data sources.",
  },
  {
    title: "MCP & Tool Integration",
    description:
      "Working with Model Context Protocol concepts and tool-connected AI systems that can retrieve context, call services, and perform controlled actions.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Deploying and operating applications using Linux servers, containers, databases, DNS, reverse proxies, CI/CD services, and cloud platforms.",
  },
  {
    title: "Security Engineering",
    description:
      "Applying secure architecture, access control, secrets management, vulnerability assessment, and practical security controls throughout the product lifecycle.",
  },
];

export const toolkit = [
  {
    group: "Product Development",
    items: [
      "Flutter",
      "TypeScript",
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "TypeORM",
      "Web and mobile application architecture",
    ],
  },
  {
    group: "AI & Automation",
    items: [
      "LLM integrations",
      "AI agents",
      "Retrieval-augmented generation",
      "MCP concepts and tool integration",
      "Structured outputs",
      "Workflow automation",
    ],
  },
  {
    group: "Cloud & Infrastructure",
    items: [
      "Linux",
      "Docker",
      "VPS administration",
      "Cloudflare",
      "Vercel",
      "DNS and domain management",
      "Application deployment",
      "Monitoring and troubleshooting",
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
      "ISO 27001 and NIST CSF familiarity",
    ],
  },
  {
    group: "Leadership & Delivery",
    items: [
      "Technical roadmaps",
      "Requirements analysis",
      "Architecture review",
      "Cross-functional team leadership",
      "Technical recruitment",
      "QA coordination",
      "Production delivery",
    ],
  },
];

export const contribute = [
  {
    title: "Product Engineering",
    description:
      "I help build and improve web, mobile, backend, and AI-enabled products, with attention to how the entire system behaves in production.",
  },
  {
    title: "Technical Leadership",
    description:
      "I can lead delivery, coordinate engineering disciplines, review technical decisions, and create the structure needed to move a product forward.",
  },
  {
    title: "Architecture & Infrastructure",
    description:
      "I design practical application and deployment architectures for organisations that need reliability, security, and room to grow.",
  },
];

export const contact = {
  heading: "Let's Work Together",
  paragraphs: [
    "I'm open to full-stack development, technical product, engineering leadership, fractional CTO, and selected consulting opportunities.",
    "If you are building a serious product and need someone who can connect the code, infrastructure, security, team, and business requirements, I would be glad to hear from you.",
  ],
};
