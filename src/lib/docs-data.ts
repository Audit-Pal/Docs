export interface DocPage {
  slug: string;
  title: string;
  description?: string;
  children?: DocPage[];
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
      { 
        slug: "example-workflows", 
        title: "Example Workflows", 
        description: "Step-by-step guides for common tasks",
        children: [
          { slug: "workflow-1", title: "Workflow 1: Subscribing", description: "Monitoring setup" },
          { slug: "workflow-2", title: "Workflow 2: Benchmarking", description: "Local testing" },
          { slug: "workflow-3", title: "Workflow 3: Submitting", description: "Subnet registration" },
          { slug: "workflow-4", title: "Workflow 4: Co-Pilot", description: "Auditor engagement" },
        ]
      },
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
    pages: [
      { 
        slug: "resources", 
        title: "Resources", 
        description: "Links and market analysis",
        children: [
          { slug: "media-community", title: "Media and Community" },
          { slug: "market-context", title: "Market Context" },
        ]
      }
    ],
  },
  {
    title: "Conclusion",
    pages: [{ slug: "conclusion", title: "Conclusion", description: "Temporary placeholder content" }],
  },
];

export function getPageBySlug(slug: string): DocPage | undefined {
  const findPage = (pages: DocPage[]): DocPage | undefined => {
    for (const page of pages) {
      if (page.slug === slug) return page;
      if (page.children) {
        const found = findPage(page.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  for (const section of docsStructure) {
    const page = findPage(section.pages);
    if (page) return page;
  }
  return undefined;
}

export function getSectionBySlug(slug: string): DocSection | undefined {
  const hasPage = (pages: DocPage[]): boolean => {
    for (const page of pages) {
      if (page.slug === slug) return true;
      if (page.children && hasPage(page.children)) return true;
    }
    return false;
  };

  for (const section of docsStructure) {
    if (hasPage(section.pages)) return section;
  }
  return undefined;
}

export function getAdjacentPages(slug: string): { prev?: DocPage; next?: DocPage } {
  const flattenPages = (pages: DocPage[]): DocPage[] => {
    return pages.reduce((acc: DocPage[], page) => {
      acc.push(page);
      if (page.children) acc.push(...flattenPages(page.children));
      return acc;
    }, []);
  };

  const allPages = docsStructure.flatMap((s) => flattenPages(s.pages));
  const idx = allPages.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? allPages[idx - 1] : undefined,
    next: idx < allPages.length - 1 ? allPages[idx + 1] : undefined,
  };
}
