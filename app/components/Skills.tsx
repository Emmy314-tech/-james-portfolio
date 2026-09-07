const skills = [
  {
    title: "Software Development",
    description: "Building modern web applications and practical digital products.",
  },
  {
    title: "Artificial Intelligence",
    description: "Exploring AI systems, intelligent assistants, and adaptive software.",
  },
  {
    title: "Embedded Systems",
    description: "Working with electronics, microcontrollers, sensors, and automation.",
  },
  {
    title: "Backend & Databases",
    description: "Designing APIs, authentication systems, databases, and server logic.",
  },
  {
    title: "Full-Stack Development",
    description: "Connecting beautiful interfaces with reliable backend systems.",
  },
  {
    title: "Linux & Tools",
    description: "Using development tools, terminals, Git, and Linux environments.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#070a18] px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          What I Work With
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Skills & Technologies
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-gray-400">
          A growing collection of technologies and areas I'm exploring while
          building real-world projects.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-purple-500/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
            >
              <h3 className="text-xl font-bold">
                {skill.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}