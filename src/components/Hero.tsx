"use client";

import { scrollTo } from "@/lib/scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center px-8 max-md:px-5"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-25 -right-25 h-150 w-150 rounded-full bg-accent opacity-[0.18] blur-[100px]" />
        <div className="absolute -bottom-20 left-[10%] h-100 w-100 rounded-full bg-teal opacity-[0.18] blur-[100px]" />
      </div>
      <div className="mx-auto w-full max-w-300 pt-20">
        <div className="mb-7 inline-flex items-center gap-2 rounded-[50px] border border-[rgba(52,211,153,0.25)] bg-[rgba(52,211,153,0.1)] px-3.5 py-1.25 font-mono text-[0.75rem] text-green">
          <div className="h-1.5 w-1.5 animate-badge-pulse rounded-full bg-green" />
          Available for new opportunities
        </div>
        <h1 className="mb-6 max-w-205 font-head text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          Engineering systems
          <br />
          <span className="text-accent2">that think, scale,</span>
          <br />
          and ship.
        </h1>
        <p className="mb-10 max-w-135 text-[1.05rem] leading-[1.7] text-muted">
          Full-Stack &amp; AI Systems Engineer with 5+ years building
          production-grade web platforms and intelligent pipelines. I turn
          ambiguous problems into reliable, observable software.
        </p>
        <div className="mb-16 flex flex-wrap items-center gap-3 max-[480px]:flex-col max-[480px]:items-start">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
            className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-6 py-3 text-[0.9rem] font-semibold text-white transition-[background,transform,box-shadow] duration-300 hover:translate-y-px hover:bg-accent2 hover:shadow-[0_8px_30px_rgba(99,102,241,0.35)]"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-surface px-6 py-3 text-[0.9rem] font-medium text-text transition-[background,border-color,transform] duration-300 hover:-translate-y-px hover:border-accent hover:bg-border"
          >
            Let&apos;s talk
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap gap-2.5" aria-label="Key skills">
          {[
            "TypeScript",
            "Python",
            "React / Next.js",
            "FastAPI",
            "LLM Systems",
            "RAG Pipelines",
            "PostgreSQL",
            "Docker / K8s",
            "IoT / MQTT",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-surface px-3 py-1.25 font-mono text-[0.72rem] font-medium text-muted transition-colors duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.08)] hover:text-accent2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
