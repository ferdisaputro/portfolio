"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web App" },
  { key: "ai", label: "AI / ML" },
  { key: "iot", label: "IoT" },
] as const;

type Filter = (typeof filters)[number]["key"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");
  const [modalProject, setModalProject] = useState<number | null>(null);

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <section
        id="projects"
        aria-label="Selected projects"
        className="px-8 py-25 max-md:px-5 max-md:py-18"
      >
        <div className="mx-auto max-w-300">
          <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
            // selected work
          </div>
          <h2 className="mb-4 font-head text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
            Projects that moved the needle
          </h2>
          <p className="mb-12 max-w-130 text-base leading-[1.7] text-muted">
            A curated selection of systems I&apos;ve architected, shipped, and
            iterated on in production environments.
          </p>

          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {filters.map((f) => (
              <button
                key={f.key}
                className={`rounded-lg border border-border bg-surface px-4.5 py-1.75 text-[0.82rem] font-medium text-muted transition-all duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.1)] hover:text-accent2 ${
                  active === f.key
                    ? "border-accent bg-[rgba(99,102,241,0.1)] text-accent2 font-semibold"
                    : ""
                }`}
                aria-pressed={active === f.key}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 max-md:grid-cols-1">
            {filtered.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={() => setModalProject(p.id)}
              />
            ))}
          </div>
        </div>
      </section>
      <ProjectModal
        project={modalProject !== null ? projects[modalProject] : null}
        onClose={() => setModalProject(null)}
      />
    </>
  );
}
