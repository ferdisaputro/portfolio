"use client";

import { useState, useEffect } from "react";
import { scrollTo } from "@/lib/scroll";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setTheme(isDark ? "dark" : "light");
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-100 border-b border-border bg-(--nav-blur) backdrop-blur-lg transition-colors duration-300"
    >
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between px-8 max-md:px-5">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className="text-base font-bold tracking-[-0.02em] text-text font-head"
        >
          Alex<span className="text-accent">.</span>dev
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
            className="hidden md:inline-flex rounded-lg px-3.5 py-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface hover:text-text"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
            className="hidden md:inline-flex rounded-lg px-3.5 py-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface hover:text-text"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}
            className="hidden md:inline-flex rounded-lg px-3.5 py-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface hover:text-text"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="hidden md:inline-flex rounded-lg px-3.5 py-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface hover:text-text"
          >
            Contact
          </a>
          <button
            className="ml-2 flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border bg-surface text-base text-muted transition-colors duration-300 hover:bg-border hover:text-text"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            suppressHydrationWarning
          >
            {theme === "dark" ? "\uD83C\uDF19" : "\u2600\uFE0F"}
          </button>
        </div>
      </div>
    </nav>
  );
}
