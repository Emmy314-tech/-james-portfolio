export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 py-20 text-white">
      {/* Background glow - pointer-events-none added to prevent blocking clicks */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-purple-400">
          Welcome to my world
        </p>

        <h1 className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
            James
          </span>
        </h1>

        <p className="mt-8 text-xl font-medium text-gray-300 sm:text-2xl">
          Computer Engineering Student
        </p>

        <p className="text-xl font-medium text-gray-400 sm:text-2xl">
          Full-Stack Developer • AI Builder
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          I build software, embedded systems, and intelligent tools that solve
          real-world problems.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-200 hover:-translate-y-1 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050816]"
          >
            View Projects
          </a>

          <a
            href="#midnight-keeper"
            className="rounded-xl border border-purple-500/50 bg-purple-500/5 px-7 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050816]"
          >
            Meet Midnight Keeper
          </a>
        </div>
      </div>
    </section>
  );
}