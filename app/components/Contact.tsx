export default function Contact() {
  return (
    <section id="contact" className="bg-[#070a18] px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Get In Touch
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Let's build something interesting.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Have an idea, project, or technology you'd like to explore?
          I'm always interested in building and learning.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:nevergiv061@gmail.com"
            className="rounded-xl bg-purple-600 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:bg-purple-500"
          >
            Email Me
          </a>

          <a
           href="https://wa.me/2349157364790"
           target="_blank"
          rel="noopener noreferrer"
         className="rounded-xl border border-purple-500/40 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10"
>
          WhatsApp Me 💬
        </a>
        </div>
      </div>
    </section>
  );
}