export interface DocPage {
  slug: string;
  title: string;
  description?: string;
}

export interface DocSection {
  title: string;
  pages: DocPage[];
}
export const docsStructure: DocSection[] = [
  {
    title: "Introduction",
    pages: [
      { slug: "overview", title: "AuditPal Overview", description: "The vision, positioning, and core identity of AuditPal" },
      { slug: "core-insight", title: "Core Insight", description: "Why audit uncertainty — not speed — is the real bottleneck" },
      { slug: "key-concept", title: "Key Concept", description: "Reasoning amplification engine for smart contract auditors" },
      { slug: "tagline-positioning", title: "Tagline & Positioning", description: "Brand positioning and operating system philosophy" },
    ],
  },
  {
    title: "Problem & Philosophy",
    pages: [
      { slug: "audit-bottleneck", title: "The Real Bottleneck in Auditing", description: "Execution overhead vs. high-value reasoning work" },
      { slug: "humans-vs-execution", title: "Humans = Decision Engine", description: "Separating reasoning from execution infrastructure" },
      { slug: "operating-system-model", title: "Operating System Model", description: "What it means to be the OS for smart contract audits" },
    ],
  },
  {
    title: "How AuditPal Works",
    pages: [
      { slug: "copilot-workspace", title: "Auditor Co-Pilot Workspace", description: "Application layer for simulations, modeling, and proof generation" },
      { slug: "state-simulation", title: "State Machine Simulation", description: "Modeling full contract state space and adversarial interactions" },
      { slug: "executable-proofs", title: "Executable Proof System", description: "Proof-backed vulnerability validation via exploit scripts" },
      { slug: "execution-layer", title: "Execution Layer", description: "Scanning, fuzzing, diffing, and workflow automation" },
    ],
  },
  {
    title: "Decentralized Intelligence",
    pages: [
      { slug: "bittensor-subnet", title: "Bittensor Subnet", description: "Competitive AI swarm powering audit intelligence" },
      { slug: "proof-of-audit", title: "Proof of Audit Incentive Model", description: "Rewarding accuracy, latency, and zero-noise output" },
      { slug: "subnet-vs-application", title: "Subnet vs Application", description: "Innovation hub vs production audit environment" },
      { slug: "continuous-improvement", title: "Continuous Learning System", description: "How decentralized competition evolves execution quality" },
    ],
  },
  {
    title: "Benchmarking & Research",
    pages: [
      { slug: "benchmark-infrastructure", title: "Benchmark Infrastructure", description: "Live evaluation systems for audit agent performance" },
      { slug: "solbench-30", title: "AuditPal-Solbench-30", description: "30 high-impact vulnerability benchmark suite" },
      { slug: "evmbench", title: "OpenAI EVMbench", description: "Competitive evaluation environment for EVM auditing agents" },
    ],
  },
  {
    title: "Value Proposition",
    pages: [
      { slug: "unified-value", title: "Unified Value Proposition", description: "Reducing uncertainty through proof-driven validation" },
      { slug: "auditor-benefits", title: "Benefits for Auditors", description: "Faster reasoning, mathematical validation, reduced cognitive load" },
      { slug: "developer-benefits", title: "Benefits for Developers", description: "Noise-free findings and continuous security coverage" },
      { slug: "ecosystem-impact", title: "Ecosystem Impact", description: "From static audits to evolving security assurance" },
    ],
  },
  {
    title: "Roadmap",
    pages: [
      { slug: "sentinel-2", title: "Sentinel-2", description: "Formal logic translation engine" },
      { slug: "multi-chain-expansion", title: "Multi-Chain Expansion", description: "Support for Rust and Move ecosystems" },
      { slug: "onchain-monitoring", title: "Autonomous Monitoring Nodes", description: "On-chain monitoring and circuit-breaker activation" },
    ],
  },
];

export function getPageBySlug(slug: string): DocPage | undefined {
  for (const section of docsStructure) {
    const page = section.pages.find((p) => p.slug === slug);
    if (page) return page;
  }
  return undefined;
}

export function getSectionBySlug(slug: string): DocSection | undefined {
  for (const section of docsStructure) {
    if (section.pages.some((p) => p.slug === slug)) return section;
  }
  return undefined;
}

export function getAdjacentPages(slug: string): { prev?: DocPage; next?: DocPage } {
  const allPages = docsStructure.flatMap((s) => s.pages);
  const idx = allPages.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? allPages[idx - 1] : undefined,
    next: idx < allPages.length - 1 ? allPages[idx + 1] : undefined,
  };
}
