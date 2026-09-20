"use client";

import { useCallback, useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const experiences = [
  {
    period: "2023 \u2014 Present",
    title: "Senior Full-Stack & AI Engineer",
    company: "Teknova Solutions \u00b7 Full-time",
    bullets: [
      <>
        Architected a multi-tenant <strong>RAG platform</strong> serving 50k+
        daily queries, achieving <strong>99.2% uptime</strong> and sub-200ms
        P95 latency.
      </>,
      <>
        Led a 4-person team migrating a monolith to microservices, reducing
        deploy time from <strong>45 min \u2192 6 min</strong>.
      </>,
      <>
        Designed an LLM evaluation framework adopted company-wide, cutting
        hallucination rate by <strong>41%</strong> in production.
      </>,
    ],
  },
  {
    period: "2021 \u2014 2023",
    title: "Full-Stack Engineer",
    company: "DataBridge Labs \u00b7 Full-time",
    bullets: [
      <>
        Built a real-time operational dashboard (WebSocket + TimescaleDB) serving{" "}
        <strong>200+ concurrent engineers</strong> with p95 &lt; 80ms.
      </>,
      <>
        Designed a <strong>custom alerting engine</strong> that reduced incident
        detection time from 18 minutes to under 90 seconds.
      </>,
      <>
        Delivered an internal developer platform adopted by{" "}
        <strong>6 engineering teams</strong>, reducing onboarding time by 60%.
      </>,
    ],
  },
  {
    period: "2020 \u2014 2021",
    title: "Software Engineer \u2014 IoT Systems",
    company: "AgriTech Nusantara \u00b7 Full-time",
    bullets: [
      <>
        Designed an edge-to-cloud MQTT pipeline managing{" "}
        <strong>2,400 sensors</strong> across 12 farm sites.
      </>,
      <>
        Deployed a TensorFlow Lite anomaly detection model on-device, reducing
        cloud compute costs by <strong>35%</strong>.
      </>,
      <>
        Won <strong>1st Place</strong> at National IoT Innovation Challenge 2021
        for the AgroSense prototype.
      </>,
    ],
  },
  {
    period: "2019 \u2014 2020",
    title: "Junior Frontend Developer",
    company: "PixelForge Studio \u00b7 Internship \u2192 Full-time",
    bullets: [
      <>
        Built and maintained React-based client dashboards with a focus on
        accessibility and <strong>Lighthouse score &gt; 90</strong>.
      </>,
      <>
        Introduced component testing with Jest + RTL, increasing coverage from
        12% \u2192 <strong>74%</strong>.
      </>,
    ],
  },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const STAGGER = 0;
const SETTLE = 0.70;
const SLIDE = 200;

export default function Experience() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  itemRefs.current = new Array(experiences.length);

  const updateItems = useCallback(() => {
    if (typeof window === "undefined") return;
    const vh = window.innerHeight;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      let p = (vh - rect.top) / (vh * SETTLE);

      p = Math.max(0, p - i * STAGGER);
      p = Math.min(1, p);
      p = easeOutCubic(p);

      el.style.transform = `translateX(${(1 - p) * SLIDE}px)`;
      el.style.opacity = String(p);
    });
  }, []);

  useLenis(updateItems, [updateItems], 0);

  useEffect(() => {
    const frame = requestAnimationFrame(updateItems);
    window.addEventListener("resize", updateItems);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateItems);
    };
  }, [updateItems]);

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="border-b border-t border-border bg-bg2 px-8 py-25 max-md:px-5 max-md:py-18"
    >
      <div className="mx-auto max-w-300">
        <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
          // experience
        </div>
        <h2 className="mb-4 font-head text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
          Career trajectory
        </h2>
        <p className="mb-12 max-w-130 text-base leading-[1.7] text-muted">
          Five years of building across domains &mdash; each role sharpening a
          different edge.
        </p>

        <div className="relative pl-10">
          <div className="absolute bottom-0 left-2.5 top-2 w-px bg-[linear-gradient(to_bottom,var(--accent),transparent)]" />

          {experiences.map((exp, i) => (
            <div
              key={exp.period}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              style={{
                opacity: 0,
                transform: `translateX(${SLIDE}px)`,
                willChange: "transform, opacity",
              }}
              className="relative mb-12"
            >
              <div className="absolute -left-8.5 top-1 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
              <div className="mb-1.5 font-mono text-[0.72rem] tracking-[0.04em] text-accent">
                {exp.period}
              </div>
              <div className="mb-0.5 font-head text-[1.05rem] font-semibold tracking-[-0.01em]">
                {exp.title}
              </div>
              <div className="mb-3 text-[0.85rem] text-muted">{exp.company}</div>
              <div className="flex flex-col gap-1.75 [&_strong]:font-semibold [&_strong]:text-text">
                {exp.bullets.map((bullet, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-[1.6] text-muted"
                  >
                    <span className="mt-2 h-1.25 w-1.25 shrink-0 rounded-full bg-faint" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
