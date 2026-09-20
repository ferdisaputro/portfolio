"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    text: "Alex has a rare combination of technical depth and communication clarity. The RAG platform he architected became the backbone of our enterprise product \u2014 delivered ahead of schedule, under budget, and still running flawlessly two years later. Genuinely one of the most reliable engineers I\u2019ve worked with.",
    name: "Sarah Ramirez",
    role: "VP of Engineering \u00b7 Teknova Solutions",
    initials: "SR",
    bg: "bg-accent",
    color: "text-white",
  },
  {
    text: "The operational dashboard Alex shipped for us transformed how our on-call engineers work. Sub-80ms P95 on live streaming data, beautiful UX, and the alert engine alone saved us from two major production outages in the first month. I wouldn\u2019t hesitate to work with him again.",
    name: "Daniel Kim",
    role: "Head of Platform Engineering \u00b7 DataBridge Labs",
    initials: "DK",
    bg: "bg-teal",
    color: "text-[#0A0F1E]",
  },
  {
    text: "Working with Alex on the AgroSense project was a masterclass in pragmatic engineering. He didn\u2019t just write code \u2014 he thought deeply about the farmers who\u2019d use it daily. His TF Lite deployment cut our costs by a third and won us a national award. That project changed the direction of our company.",
    name: "Nurul Pratiwi",
    role: "CTO \u00b7 AgriTech Nusantara",
    initials: "NP",
    bg: "bg-green",
    color: "text-[#0A0F1E]",
  },
];

const total = testimonials.length;
const interval = 6500;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % total) + total) % total);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), interval);
    return () => clearInterval(timerRef.current!);
  }, [current, goTo]);

  function resetTimer() {
    clearInterval(timerRef.current!);
    timerRef.current = setInterval(() => goTo(current + 1), interval);
  }

  function next() {
    goTo(current + 1);
    resetTimer();
  }

  function prev() {
    goTo(current - 1);
    resetTimer();
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
  }

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="px-8 py-25 max-md:px-5 max-md:py-18"
    >
      <div className="mx-auto max-w-300">
        <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
          // social proof
        </div>
        <h2 className="mb-4 font-head text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
          What colleagues say
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => clearInterval(timerRef.current!)}
          onMouseLeave={() => {
            timerRef.current = setInterval(() => goTo(current + 1), interval);
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className="w-full min-w-full rounded-[20px] border border-border bg-surface px-12 py-10 max-md:px-6 max-md:py-7"
              >
                <p className="mb-7 text-base italic leading-[1.75] text-text">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${t.bg} font-head text-base font-bold ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-text">
                      {t.name}
                    </div>
                    <div className="text-[0.8rem] text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="mt-4 flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full bg-faint transition-all duration-300 ${
                    i === current
                      ? "w-4.5 rounded-[3px] bg-accent"
                      : "w-1.5"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.1)] hover:text-text"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:bg-[rgba(99,102,241,0.1)] hover:text-text"
                onClick={next}
                aria-label="Next testimonial"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
