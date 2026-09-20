export interface Project {
  id: number;
  title: string;
  category: "web" | "ai" | "iot";
  emoji: string;
  gradient: string;
  description: string;
  shortDescription: string;
  tech: { label: string; color: string }[];
  problem: string;
  solution: string;
  role: string;
  impact: string[];
  linkType: "case" | "code" | "demo";
  linkHref?: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "IntelliServe — RAG Platform",
    category: "ai",
    emoji: "\uD83E\uDDE0",
    gradient: "from-[#1a1040] to-[#0e2240]",
    shortDescription:
      "Multi-tenant retrieval-augmented generation platform handling 50k+ daily queries across regulated enterprise clients.",
    description:
      "Enterprise-grade document Q&A with sub-200ms retrieval at 99.2% uptime.",
    tech: [
      { label: "Python", color: "accent" },
      { label: "LangChain", color: "accent" },
      { label: "pgvector", color: "teal" },
      { label: "FastAPI", color: "teal" },
      { label: "Redis", color: "green" },
    ],
    problem:
      "Enterprise clients needed to query vast internal document libraries (10M+ pages) reliably, with strict data-residency requirements preventing use of third-party APIs.",
    solution:
      "Built a multi-tenant RAG platform using pgvector for hybrid search, LangChain for orchestration, and a custom chunking pipeline tuned for structured regulatory documents. Each tenant gets isolated embedding namespaces and audit logs.",
    role: "Technical lead \u2014 designed the architecture, wrote the retrieval core, and mentored two engineers through the LLM integration layer.",
    impact: [
      "50,000+ daily queries processed with sub-200ms P95 retrieval latency",
      "99.2% uptime over 18 months in production",
      "41% reduction in hallucination rate via custom evaluation framework",
      "Adopted by 3 Fortune 500 enterprise clients within 6 months of launch",
    ],
    linkType: "case",
  },
  {
    id: 1,
    title: "FlowOps — Analytics Dashboard",
    category: "web",
    emoji: "\uD83D\uDCCA",
    gradient: "from-[#0a2040] to-[#0d3020]",
    shortDescription:
      "Operational intelligence platform with live streaming data, custom query builder, and configurable alerting for engineering teams.",
    description:
      "Real-time analytics dashboard serving 200+ concurrent engineers with p95 latency under 80ms.",
    tech: [
      { label: "Next.js", color: "accent" },
      { label: "TypeScript", color: "accent" },
      { label: "TimescaleDB", color: "teal" },
      { label: "WebSockets", color: "green" },
    ],
    problem:
      "Engineering teams were flying blind \u2014 critical pipeline metrics lived in five separate tools with no unified view, and incident detection averaged 18 minutes.",
    solution:
      "Designed a real-time dashboard with a WebSocket streaming layer, custom query builder backed by TimescaleDB, and a rules-based alerting engine. Built a plugin system so teams could author their own metric panels.",
    role: "Led frontend architecture and the alerting subsystem. Collaborated with 2 backend engineers on the TimescaleDB schema.",
    impact: [
      "P95 latency under 80ms for 200+ concurrent active users",
      "Incident detection time dropped from 18 min \u2192 90 seconds",
      "Adopted by 6 engineering teams within 3 months of launch",
      "60% faster engineer onboarding via embedded documentation",
    ],
    linkType: "case",
  },
  {
    id: 2,
    title: "AgroSense — IoT Monitoring",
    category: "iot",
    emoji: "\uD83C\uDF31",
    gradient: "from-[#0d2010] to-[#1a3010]",
    shortDescription:
      "Precision agriculture system combining MQTT edge nodes, ML anomaly detection, and a farmer-facing mobile dashboard.",
    description:
      "Edge-to-cloud IoT pipeline monitoring 2,400 sensors with anomaly detection reducing crop loss by 18%.",
    tech: [
      { label: "Python", color: "accent" },
      { label: "MQTT", color: "teal" },
      { label: "TensorFlow Lite", color: "green" },
      { label: "React Native", color: "accent" },
    ],
    problem:
      "Smallholder farms had no affordable real-time monitoring for soil, humidity, and temperature. Crop loss due to missed anomalies averaged 22% per season.",
    solution:
      "Built an edge-to-cloud IoT pipeline: low-cost sensor nodes running MQTT \u2192 cloud aggregation \u2192 a TensorFlow Lite model deployed on-device for local anomaly detection. Farmer-facing React Native app with offline-first design.",
    role: "Sole engineer on the data pipeline and ML model. Collaborated with an agronomy consultant on the anomaly thresholds.",
    impact: [
      "2,400 sensors managed across 12 farm sites in East Java",
      "18% reduction in crop loss in the first growing season",
      "35% decrease in cloud compute costs via on-device inference",
      "1st Place \u2014 National IoT Innovation Challenge 2021",
    ],
    linkType: "case",
  },
  {
    id: 3,
    title: "CodeLens — AI Code Review",
    category: "ai",
    emoji: "\uD83D\uDD0D",
    gradient: "from-[#1a0840] to-[#200020]",
    shortDescription:
      "GitHub-integrated AI reviewer that provides context-aware feedback on PRs, flagging security, perf, and style issues.",
    description:
      "Automated PR reviews catching 34% more issues than manual review alone, adopted across 5 engineering teams.",
    tech: [
      { label: "TypeScript", color: "accent" },
      { label: "LLM API", color: "accent" },
      { label: "GitHub Actions", color: "teal" },
      { label: "AST Parsing", color: "green" },
    ],
    problem:
      "As our codebase scaled to 400k+ lines, manual PR reviews became a bottleneck \u2014 reviewers missed recurring security patterns and performance anti-patterns under time pressure.",
    solution:
      "Built a GitHub-integrated AI reviewer that parses PR diffs, builds an AST-level understanding of changes, and generates context-aware feedback via LLM. Includes a rule engine for organization-specific conventions.",
    role: "Solo project \u2014 designed the AST parsing pipeline, the LLM prompting strategy, and the GitHub Actions integration.",
    impact: [
      "34% more issues caught compared to manual review alone (A/B tested)",
      "Adopted by 5 engineering teams; 1,200+ PRs reviewed in 3 months",
      "Average review turnaround from 4 hours \u2192 8 minutes",
      "Zero false-positive security flags after prompt tuning iteration",
    ],
    linkType: "case",
  },
  {
    id: 4,
    title: "CodeLens — AI Code Review",
    category: "ai",
    emoji: "\uD83D\uDD0D",
    gradient: "from-[#1a0840] to-[#200020]",
    shortDescription:
      "GitHub-integrated AI reviewer that provides context-aware feedback on PRs, flagging security, perf, and style issues.",
    description:
      "Automated PR reviews catching 34% more issues than manual review alone, adopted across 5 engineering teams.",
    tech: [
      { label: "TypeScript", color: "accent" },
      { label: "LLM API", color: "accent" },
      { label: "GitHub Actions", color: "teal" },
      { label: "AST Parsing", color: "green" },
    ],
    problem:
      "As our codebase scaled to 400k+ lines, manual PR reviews became a bottleneck \u2014 reviewers missed recurring security patterns and performance anti-patterns under time pressure.",
    solution:
      "Built a GitHub-integrated AI reviewer that parses PR diffs, builds an AST-level understanding of changes, and generates context-aware feedback via LLM. Includes a rule engine for organization-specific conventions.",
    role: "Solo project \u2014 designed the AST parsing pipeline, the LLM prompting strategy, and the GitHub Actions integration.",
    impact: [
      "34% more issues caught compared to manual review alone (A/B tested)",
      "Adopted by 5 engineering teams; 1,200+ PRs reviewed in 3 months",
      "Average review turnaround from 4 hours \u2192 8 minutes",
      "Zero false-positive security flags after prompt tuning iteration",
    ],
    linkType: "case",
  },
  {
    id: 5,
    title: "CodeLens — AI Code Review",
    category: "ai",
    emoji: "\uD83D\uDD0D",
    gradient: "from-[#1a0840] to-[#200020]",
    shortDescription:
      "GitHub-integrated AI reviewer that provides context-aware feedback on PRs, flagging security, perf, and style issues.",
    description:
      "Automated PR reviews catching 34% more issues than manual review alone, adopted across 5 engineering teams.",
    tech: [
      { label: "TypeScript", color: "accent" },
      { label: "LLM API", color: "accent" },
      { label: "GitHub Actions", color: "teal" },
      { label: "AST Parsing", color: "green" },
    ],
    problem:
      "As our codebase scaled to 400k+ lines, manual PR reviews became a bottleneck \u2014 reviewers missed recurring security patterns and performance anti-patterns under time pressure.",
    solution:
      "Built a GitHub-integrated AI reviewer that parses PR diffs, builds an AST-level understanding of changes, and generates context-aware feedback via LLM. Includes a rule engine for organization-specific conventions.",
    role: "Solo project \u2014 designed the AST parsing pipeline, the LLM prompting strategy, and the GitHub Actions integration.",
    impact: [
      "34% more issues caught compared to manual review alone (A/B tested)",
      "Adopted by 5 engineering teams; 1,200+ PRs reviewed in 3 months",
      "Average review turnaround from 4 hours \u2192 8 minutes",
      "Zero false-positive security flags after prompt tuning iteration",
    ],
    linkType: "case",
  },
  {
    id: 6,
    title: "CodeLens — AI Code Review",
    category: "ai",
    emoji: "\uD83D\uDD0D",
    gradient: "from-[#1a0840] to-[#200020]",
    shortDescription:
      "GitHub-integrated AI reviewer that provides context-aware feedback on PRs, flagging security, perf, and style issues.",
    description:
      "Automated PR reviews catching 34% more issues than manual review alone, adopted across 5 engineering teams.",
    tech: [
      { label: "TypeScript", color: "accent" },
      { label: "LLM API", color: "accent" },
      { label: "GitHub Actions", color: "teal" },
      { label: "AST Parsing", color: "green" },
    ],
    problem:
      "As our codebase scaled to 400k+ lines, manual PR reviews became a bottleneck \u2014 reviewers missed recurring security patterns and performance anti-patterns under time pressure.",
    solution:
      "Built a GitHub-integrated AI reviewer that parses PR diffs, builds an AST-level understanding of changes, and generates context-aware feedback via LLM. Includes a rule engine for organization-specific conventions.",
    role: "Solo project \u2014 designed the AST parsing pipeline, the LLM prompting strategy, and the GitHub Actions integration.",
    impact: [
      "34% more issues caught compared to manual review alone (A/B tested)",
      "Adopted by 5 engineering teams; 1,200+ PRs reviewed in 3 months",
      "Average review turnaround from 4 hours \u2192 8 minutes",
      "Zero false-positive security flags after prompt tuning iteration",
    ],
    linkType: "case",
  },
  {
    id: 7,
    title: "CodeLens — AI Code Review",
    category: "ai",
    emoji: "\uD83D\uDD0D",
    gradient: "from-[#1a0840] to-[#200020]",
    shortDescription:
      "GitHub-integrated AI reviewer that provides context-aware feedback on PRs, flagging security, perf, and style issues.",
    description:
      "Automated PR reviews catching 34% more issues than manual review alone, adopted across 5 engineering teams.",
    tech: [
      { label: "TypeScript", color: "accent" },
      { label: "LLM API", color: "accent" },
      { label: "GitHub Actions", color: "teal" },
      { label: "AST Parsing", color: "green" },
    ],
    problem:
      "As our codebase scaled to 400k+ lines, manual PR reviews became a bottleneck \u2014 reviewers missed recurring security patterns and performance anti-patterns under time pressure.",
    solution:
      "Built a GitHub-integrated AI reviewer that parses PR diffs, builds an AST-level understanding of changes, and generates context-aware feedback via LLM. Includes a rule engine for organization-specific conventions.",
    role: "Solo project \u2014 designed the AST parsing pipeline, the LLM prompting strategy, and the GitHub Actions integration.",
    impact: [
      "34% more issues caught compared to manual review alone (A/B tested)",
      "Adopted by 5 engineering teams; 1,200+ PRs reviewed in 3 months",
      "Average review turnaround from 4 hours \u2192 8 minutes",
      "Zero false-positive security flags after prompt tuning iteration",
    ],
    linkType: "case",
  },
  {
    id: 8,
    title: "CodeLens — AI Code Review",
    category: "ai",
    emoji: "\uD83D\uDD0D",
    gradient: "from-[#1a0840] to-[#200020]",
    shortDescription:
      "GitHub-integrated AI reviewer that provides context-aware feedback on PRs, flagging security, perf, and style issues.",
    description:
      "Automated PR reviews catching 34% more issues than manual review alone, adopted across 5 engineering teams.",
    tech: [
      { label: "TypeScript", color: "accent" },
      { label: "LLM API", color: "accent" },
      { label: "GitHub Actions", color: "teal" },
      { label: "AST Parsing", color: "green" },
    ],
    problem:
      "As our codebase scaled to 400k+ lines, manual PR reviews became a bottleneck \u2014 reviewers missed recurring security patterns and performance anti-patterns under time pressure.",
    solution:
      "Built a GitHub-integrated AI reviewer that parses PR diffs, builds an AST-level understanding of changes, and generates context-aware feedback via LLM. Includes a rule engine for organization-specific conventions.",
    role: "Solo project \u2014 designed the AST parsing pipeline, the LLM prompting strategy, and the GitHub Actions integration.",
    impact: [
      "34% more issues caught compared to manual review alone (A/B tested)",
      "Adopted by 5 engineering teams; 1,200+ PRs reviewed in 3 months",
      "Average review turnaround from 4 hours \u2192 8 minutes",
      "Zero false-positive security flags after prompt tuning iteration",
    ],
    linkType: "case",
  },
];
