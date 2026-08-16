const projects = [
  {
    title: "Midnight Keeper",
    icon: "👻",
    description:
      "An experimental AI guardian exploring adaptive intelligence, memory, and long-term human-AI interaction.",
    tags: ["AI", "Research", "Next.js"],
    featured: true,
  },
  {
    title: "SwiftVault",
    icon: "⚡",
    description:
      "A fintech platform concept exploring digital wallets, payments, user accounts, and financial utilities.",
    tags: ["Full-Stack", "Backend", "Fintech"],
    featured: false,
  },
  {
    title: "Smart Street Light",
    icon: "💡",
    description:
      "An embedded systems project using an LDR-based control system to automate street lighting.",
    tags: ["Embedded", "Electronics", "Automation"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050816] px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          My Work
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Projects
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-gray-400">
          Ideas I've built, explored, and continue to develop.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 ${
                project.featured
                  ? "border-purple-500/40 bg-purple-500/[0.06] lg:scale-[1.02]"
                  : "border-purple-500/10 bg-white/[0.03]"
              }`}
            >
              {project.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                  Featured
                </div>
              )}

              <div className="text-5xl">{project.icon}</div>

              <h3 className="mt-7 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-8 font-semibold text-purple-400 transition group-hover:text-purple-300">
                Explore project →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}