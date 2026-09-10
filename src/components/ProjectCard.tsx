"use client";

import type { Project } from "@/lib/projects";

const colorMap: Record<string, string> = {
  accent:
    "border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.12)] text-accent2",
  teal:
    "border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.1)] text-teal",
  green:
    "border-[rgba(52,211,153,0.2)] bg-[rgba(52,211,153,0.1)] text-green",
};

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-[20px] border border-border bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
      data-category={project.category}
      tabIndex={0}
      role="button"
      aria-label={`Open case study for ${project.title}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative h-[200px] overflow-hidden bg-bg2">
        <div
          className={`flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,${project.gradient.split(" ")[0].replace("from-", "")},${project.gradient.split(" ")[1].replace("to-", "")})] text-5xl transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.08]`}
        >
          {project.emoji}
        </div>
        <div className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,rgba(10,15,30,0.85)_0%,transparent_60%)] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-[0.82rem] leading-[1.5] text-muted">
            {project.description}
          </p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-head text-[1.05rem] font-semibold tracking-[-0.01em]">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-[1.6] text-muted">
          {project.shortDescription}
        </p>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t.label}
              className={`rounded-[5px] border px-2.5 py-[3px] font-mono text-[0.7rem] font-medium ${colorMap[t.color]}`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <div className="flex gap-2.5">
          <button className="inline-flex items-center gap-[5px] rounded-[7px] border border-accent bg-accent px-3.5 py-[7px] text-[0.8rem] font-medium text-white transition-all duration-300 hover:border-accent2 hover:bg-accent2">
            Case Study
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-[5px] rounded-[7px] border border-border px-3.5 py-[7px] text-[0.8rem] font-medium text-muted transition-all duration-300 hover:border-muted hover:text-text"
            aria-label="View code on GitHub"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
