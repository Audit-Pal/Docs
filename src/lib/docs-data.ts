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
      { slug: "overview", title: "AuditPal Overview", description: "Temporary placeholder content" },
      { slug: "core-insights", title: "Core Insights", description: "Temporary placeholder content" },
      { slug: "philosophy", title: "Philosophy", description: "Temporary placeholder content" },
      { slug: "key-features", title: "Key Features", description: "Temporary placeholder content" },
    ],
  },
  {
    title: "Ecosystem Overview",
    pages: [
      { slug: "innovation-layer", title: "Innovation Layer", description: "The competitive subnet layer" },
      { slug: "application-layer", title: "Application Layer", description: "Interaction surface for protocols and auditors" },
      { slug: "auditpal-products", title: "AuditPal Products", description: "Continuous Security Agents & Auditor Co-Pilot" },
    ],
  },
  {
    title: "Subnet Architecture",
    pages: [
      { slug: "system-overview", title: "System Overview", description: "Temporary placeholder content" },
      { slug: "inference-gateway", title: "Inference Gateway", description: "Temporary placeholder content" },
      { slug: "gatekeepers-validators", title: "Gatekeepers & Validators", description: "Temporary placeholder content" },
      { slug: "miners-agents", title: "Miners & Agents", description: "Temporary placeholder content" },
      { slug: "console-dashboard", title: "Console / Dashboard", description: "Temporary placeholder content" },
    ],
  },
  {
    title: "CLI",
    pages: [
      { slug: "cli-overview", title: "CLI Overview", description: "Temporary placeholder content" },
      { slug: "core-commands", title: "Core Commands", description: "Temporary placeholder content" },
      { slug: "example-workflows", title: "Example Workflows", description: "Temporary placeholder content" },
    ],
  },
  {
    title: "Incentive Design",
    pages: [
      { slug: "incentive-objective", title: "Objective", description: "Temporary placeholder content" },
      { slug: "incentive-mechanism-overview", title: "Incentive Mechanism Overview", description: "Temporary placeholder content" },
      { slug: "miner-incentives", title: "Miner Incentives", description: "Temporary placeholder content" },
      { slug: "validator-incentives", title: "Validator Incentives", description: "Temporary placeholder content" },
    ],
  },
  {
    title: "Developer Guides",
    pages: [
      { slug: "miner-setup-guide", title: "Miner Setup Guide", description: "Temporary placeholder content" },
      { slug: "validator-setup-guide", title: "Validator Setup Guide", description: "Temporary placeholder content" },
    ],
  },
  {
    title: "Product Roadmap",
    pages: [
      { slug: "product-roadmap", title: "Product Roadmap", description: "Temporary placeholder content" },
    ],
  },
  {
    title: "Resources",
    pages: [{ slug: "media-community", title: "Media & Community", description: "Temporary placeholder content" }],
  },
  {
    title: "Conclusion",
    pages: [{ slug: "conclusion", title: "Conclusion", description: "Temporary placeholder content" }],
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
