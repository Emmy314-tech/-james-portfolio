import Reveal from "./Reveal";
export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-[#050816] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold text-purple-400">
            James<span className="text-white">.</span>
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Building ideas into reality.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} James. All rights reserved.
        </p>

        <p className="text-sm text-purple-400">
          Midnight Keeper 👻
        </p>
      </div>
    </footer>
  );
}