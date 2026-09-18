export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-lg">▶</span>
            <span className="text-white font-semibold">
              Movie<span className="text-orange-400">Explorer</span>
            </span>
          </div>

          <div className="flex items-center gap-5 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <p className="mt-6 text-center sm:text-left text-gray-500 text-xs">
          © 2026 MovieExplorer. All rights reserved. Data provided by
          TVMaze API.
        </p>
      </div>
    </footer>
  );
}
