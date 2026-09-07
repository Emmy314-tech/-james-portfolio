export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-purple-500/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a
          href="#"
          className="group text-2xl font-black tracking-tight"
        >
          <span className="text-purple-500 transition group-hover:text-purple-400">
            James
          </span>
          <span className="text-white">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-gray-400 transition hover:text-purple-400">
            About
          </a>

          <a href="#skills" className="text-sm text-gray-400 transition hover:text-purple-400">
            Skills
          </a>

          <a href="#projects" className="text-sm text-gray-400 transition hover:text-purple-400">
            Projects
          </a>

          <a
            href="#midnight-keeper"
            className="text-sm text-purple-400 transition hover:text-purple-300"
          >
            Midnight Keeper 
          </a>

          <a href="#contact" className="text-sm text-gray-400 transition hover:text-purple-400">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/20"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}