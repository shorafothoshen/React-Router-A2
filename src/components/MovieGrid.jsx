import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, loading, onSeeDetails }) {
  if (loading) {
    return (
      <div className="py-20 text-center text-gray-400 text-sm">
        Loading movies...
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="py-20 text-center text-gray-400 text-sm">
        No movies found. Try a different search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSeeDetails={onSeeDetails} />
      ))}
    </div>
  );
}
