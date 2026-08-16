import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="bg-[#070a18] px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-6xl">
              {/* your existing About content */}
          </div>
        </Reveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          About Me
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Building ideas into reality.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-gray-400">
          <p>
            I'm James, a Computer Engineering student and developer who enjoys
            turning ambitious ideas into real technology.
          </p>

          <p>
            My interests sit at the intersection of software, artificial
            intelligence, and embedded systems.
          </p>

          <p>
            I'm currently exploring a bigger question:
            <span className="text-purple-400">
              {" "}what could an AI become if it could learn, adapt, and grow
              alongside its creator?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}