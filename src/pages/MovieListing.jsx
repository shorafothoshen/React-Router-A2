import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";

export default function MovieListing() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchAllShows() {
      try {
        setLoading(true);
        const res = await fetch("https://api.tvmaze.com/shows");
        if (!res.ok) 
          throw new Error("Could not load movies");
        const data = await res.json();
        setMovies(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAllShows();
  }, []);

  useEffect(() => {
    if (!query.trim()) return;

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );
        if (!res.ok) throw new Error("Search failed");
        const data = await res.json();
        setMovies(data.map((item) => item.show));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14]">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Explore Movies & Shows
          </h1>
          <div className="w-full max-w-xl">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </div>

        <div className="mt-8">
          <MovieGrid
            movies={movies}
            loading={loading}
            error={error}
            onSeeDetails={setSelectedMovie}
          />
        </div>
      </main>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}