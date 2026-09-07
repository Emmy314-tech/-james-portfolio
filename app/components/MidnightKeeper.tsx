export default function MidnightKeeper() {
  return (
    <section
      id="midnight-keeper"
      className="relative overflow-hidden bg-[#050816] px-6 py-32 text-white"
    >
      {/* Purple atmosphere */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-purple-400">
            Experimental Project
          </p>

          <h2 className="text-5xl font-black sm:text-6xl md:text-7xl">
            Midnight
            <span className="text-purple-500"> Keeper</span>
          </h2>

          <p className="mt-6 text-2xl font-medium text-gray-300">
            The AI that never sleeps.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Midnight Keeper is my long-term experiment into building an
            intelligent digital guardian — an AI designed to learn, adapt,
            remember, and evolve alongside its creator.
          </p>
        </div>

        {/* Status cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-xl font-bold">
              Learning
            </h3>

            <p className="mt-2 text-gray-400">
              Exploring systems that allow AI to improve through experience.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-xl font-bold">
              Guardian
            </h3>

            <p className="mt-2 text-gray-400">
              Designed around the idea of a personal digital companion.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-xl font-bold">
              Always Evolving
            </h3>

            <p className="mt-2 text-gray-400">
              A long-term project growing from an experiment into a platform.
            </p>
          </div>
        </div>

        {/* Development status */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            ● Active Development
          </span>

          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Prototype Stage
          </span>
        </div>
      </div>
    </section>
  );
}