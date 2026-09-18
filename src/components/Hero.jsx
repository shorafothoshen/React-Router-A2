import { Link } from "react-router";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0b0e14]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Discover Movies &{" "}
          <span className="text-orange-400">Cinematic Stories</span>
        </h1>

        <p className="mt-5 text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Explore and discover your favorite movies and shows from around the
          world, with ratings, summaries and instant previews.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/movies"
            className="w-full sm:w-auto rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 transition-colors"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}