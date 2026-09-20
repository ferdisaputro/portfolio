const skillGroups = [
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "BACKEND",
    skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    title: "APPLIED AI",
    skills: ["LangChain", "RAG Systems", "Vector DBs", "Fine-tuning", "TensorFlow"],
  },
  {
    title: "IOT & INFRA",
    skills: ["MQTT", "Docker", "Kubernetes", "AWS", "Grafana"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="px-8 py-25 max-md:px-5 max-md:py-18"
    >
      <div className="mx-auto max-w-300">
        <div className="grid grid-cols-2 items-end gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <div className="mb-3 font-mono text-[0.72rem] tracking-[0.08em] text-accent">
              // about
            </div>
            <h2 className="mb-4 font-head text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
              Builder by instinct,
              <br />
              engineer by discipline
            </h2>
            <div>
              <p className="mb-4 text-[0.95rem] leading-[1.75] text-muted">
                I specialize in the intersection of robust backend systems and
                applied AI &mdash; building pipelines that are not just accurate
                but{" "}
                <strong className="font-semibold text-text">
                  observable, testable, and maintainable
                </strong>{" "}
                at scale. My work spans from database schema design to LLM
                orchestration layers.
              </p>
              <p className="mb-4 text-[0.95rem] leading-[1.75] text-muted">
                For the past five years, I&apos;ve worked across startups and
                enterprise environments, which taught me that the best
                engineering decision is rarely the most technically clever one
                &mdash; it&apos;s the one the next engineer can confidently
                modify at 2am.
              </p>
              <p className="text-[0.95rem] leading-[1.75] text-muted">
                Outside of work, I contribute to open-source tooling, write
                about distributed systems on my blog, and mentor junior engineers
                through structured code review sessions.
              </p>
            </div>
          </div>
          <div>
            {skillGroups.map((group) => (
              <div key={group.title} className="mb-7">
                <div className="mb-3 font-mono text-[0.72rem] tracking-[0.06em] text-accent">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="relative rounded-lg border border-border bg-surface px-3.5 py-1.5 text-[0.82rem] font-medium text-text transition-all duration-300 hover:-translate-y-px hover:border-accent hover:bg-[rgba(99,102,241,0.08)] hover:text-accent2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
