"use client";

import { useState } from "react";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("alex@alexrafi.dev").then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    });
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="border-t border-border bg-bg2 px-8 py-25 max-md:px-5 max-md:py-18"
    >
      <div className="mx-auto max-w-300">
        <div className="mb-14 max-w-160">
          <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
            // let&apos;s work together
          </div>
          <h2 className="mb-4 font-head text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
            Got a hard problem?
            <br />
            Let&apos;s solve it.
          </h2>
          <p className="mb-8 leading-[1.7] text-muted">
            Whether you&apos;re scaling a platform, embedding intelligence into
            a product, or just want a second pair of engineering eyes &mdash;
            I&apos;d love to hear about it.
          </p>
          <div className="flex flex-wrap gap-3 max-[480px]:flex-col">
            <div className="relative">
              <button
                className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-6 py-3 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:-translate-y-px hover:bg-accent2 hover:shadow-[0_8px_30px_rgba(99,102,241,0.35)]"
                onClick={copyEmail}
                aria-label="Copy email address to clipboard"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                  <polyline points="22,6 12,12 2,6" />
                </svg>
                alex@alexrafi.dev
              </button>
              <div
                className={`pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-green px-3 py-1.25 text-xs font-semibold text-[#0A0F1E] transition-opacity duration-300 ${
                  showToast ? "opacity-100" : "opacity-0"
                }`}
                role="status"
                aria-live="polite"
              >
                Email copied!
              </div>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-surface px-6 py-3 text-[0.9rem] font-medium text-text transition-[background,border-color,transform] duration-300 hover:-translate-y-px hover:border-accent hover:bg-border"
              aria-label="View LinkedIn profile"
            >
              LinkedIn Profile
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-2.25 border border-border bg-surface px-4 py-2.25 text-[0.85rem] font-medium text-muted transition-all duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.08)] hover:text-text"
            aria-label="GitHub profile"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-2.25 border border-border bg-surface px-4 py-2.25 text-[0.85rem] font-medium text-muted transition-all duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.08)] hover:text-text"
            aria-label="LinkedIn profile"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-2.25 border border-border bg-surface px-4 py-2.25 text-[0.85rem] font-medium text-muted transition-all duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.08)] hover:text-text"
            aria-label="Personal blog"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Blog
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-2.25 border border-border bg-surface px-4 py-2.25 text-[0.85rem] font-medium text-muted transition-all duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.08)] hover:text-text"
            aria-label="Download resume PDF"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            Resume PDF
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-12 text-[0.8rem] text-faint max-md:flex-col max-md:text-center">
          <span>&copy; 2026 Alex Rafi. Built with care, no framework required.</span>
          <span className="font-mono text-[0.72rem]">alex@alexrafi.dev</span>
        </div>
      </div>
    </section>
  );
}
