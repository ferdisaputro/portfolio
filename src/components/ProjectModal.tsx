"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-200 flex items-center justify-center bg-[rgb(0,0,.75)] p-6 opacity-100 backdrop-blur-sm transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitleEl"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
    >
      <div className="w-full max-w-160 overflow-y-auto rounded-[20px] border border-border bg-bg2 transition-transform duration-300 translate-y-0">
        <div className="flex items-center justify-between px-8 pt-7">
          <h3
            className="font-head text-[1.4rem] font-bold tracking-[-0.02em]"
            id="modalTitleEl"
          >
            {project.title}
          </h3>
          <button
            ref={closeRef}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-base text-muted transition-all duration-300 hover:bg-border hover:text-text"
            onClick={onClose}
            aria-label="Close case study"
          >
            \u2715
          </button>
        </div>
        <div className="px-8 pb-8 pt-6">
          <div className="mb-6">
            <div className="mb-2 font-mono text-[0.7rem] tracking-[0.06em] text-accent">
              PROBLEM
            </div>
            <p className="text-[0.9rem] leading-[1.7] text-muted">
              {project.problem}
            </p>
          </div>
          <div className="mb-6">
            <div className="mb-2 font-mono text-[0.7rem] tracking-[0.06em] text-accent">
              SOLUTION &amp; ROLE
            </div>
            <p className="text-[0.9rem] leading-[1.7] text-muted">
              {project.solution}
            </p>
            <p className="mt-2.5 text-[0.9rem] leading-[1.7] text-muted">
              {project.role}
            </p>
          </div>
          <div className="mb-6">
            <div className="mb-2 font-mono text-[0.7rem] tracking-[0.06em] text-accent">
              IMPACT &amp; METRICS
            </div>
            <div className="flex flex-col gap-2">
              {project.impact.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted"
                >
                  <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
