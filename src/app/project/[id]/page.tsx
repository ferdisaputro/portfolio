import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

const colorMap: Record<string, string> = {
  accent:
    "border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.12)] text-accent2",
  teal:
    "border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.1)] text-teal",
  green:
    "border-[rgba(52,211,153,0.2)] bg-[rgba(52,211,153,0.1)] text-green",
};

const categoryLabels: Record<string, string> = {
  web: "Web App",
  ai: "AI / ML",
  iot: "IoT",
};

function gradientStyle(gradient: string) {
  const from = gradient.split(" ")[0].replace("from-", "");
  const to = gradient.split(" ")[1].replace("to-", "");
  return `linear-gradient(135deg, ${from}, ${to})`;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects[Number(id)];
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} — Alex Rafi`, description: project.shortDescription };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = projects.findIndex((p) => String(p.id) === id);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <main className="px-8 py-25 max-md:px-5 max-md:py-18">
      <div className="mx-auto max-w-300">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 font-mono text-[0.78rem] tracking-[0.06em] text-accent transition-colors duration-300 hover:text-accent2"
        >
          ← All Projects
        </Link>

        <div
          className="mb-10 flex h-64 items-center justify-center rounded-[20px] border border-border text-7xl max-md:h-44 max-md:text-5xl"
          style={{ background: gradientStyle(project.gradient) }}
          aria-hidden="true"
        >
          {project.emoji}
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="rounded-[5px] border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.12)] px-2.5 py-0.75 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-accent2">
            {categoryLabels[project.category] ?? project.category}
          </span>
          <span className="font-mono text-[0.72rem] tracking-[0.08em] text-muted">
            {"// case study"}
          </span>
        </div>

        <h1 className="mb-4 font-head text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
          {project.title}
        </h1>
        <p className="mb-5 max-w-130 text-base leading-[1.7] text-muted">
          {project.description}
        </p>

        <div className="mb-14 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t.label}
              className={`rounded-[5px] border px-2.5 py-0.75 font-mono text-[0.7rem] font-medium ${colorMap[t.color]}`}
            >
              {t.label}
            </span>
          ))}
        </div>

        <div className="mb-12">
          <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
            PROBLEM
          </div>
          <p className="max-w-200 text-[0.95rem] leading-[1.75] text-muted">
            {project.problem}
          </p>
        </div>

        <div className="mb-12">
          <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
            SOLUTION
          </div>
          <p className="max-w-200 text-[0.95rem] leading-[1.75] text-muted">
            {project.solution}
          </p>
        </div>

        <div className="mb-12">
          <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
            ROLE
          </div>
          <p className="max-w-200 text-[0.95rem] leading-[1.75] text-muted">
            {project.role}
          </p>
        </div>

        <div className="mb-16">
          <div className="mb-4 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
            IMPACT &amp; METRICS
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 max-md:grid-cols-1">
            {project.impact.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[14px] border border-border bg-surface p-5 text-sm leading-[1.65] text-muted"
              >
                <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <nav
          className="flex items-stretch gap-4 border-t border-border pt-8 max-md:flex-col"
          aria-label="Project navigation"
        >
          {prev ? (
            <Link
              href={`/project/${prev.id}`}
              className="group flex-1 rounded-[14px] border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent"
            >
              <div className="mb-1.5 font-mono text-[0.68rem] tracking-[0.08em] text-accent">
                ← PREV
              </div>
              <div className="font-head text-[0.95rem] font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent2">
                {prev.title}
              </div>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/project/${next.id}`}
              className="group flex-1 rounded-[14px] border border-border bg-surface p-5 text-right transition-colors duration-300 hover:border-accent max-md:text-left"
            >
              <div className="mb-1.5 font-mono text-[0.68rem] tracking-[0.08em] text-accent">
                NEXT →
              </div>
              <div className="font-head text-[0.95rem] font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent2">
                {next.title}
              </div>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </nav>
      </div>
    </main>
  );
}
