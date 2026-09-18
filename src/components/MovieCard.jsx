export default function MovieCard({ movie, onSeeDetails }) {
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";

  const stripHtml=(html)=> {
  if (!html) return "No summary available.";
  return html.replace(/<[^>]+>/g, "");
  }

  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-[#151923] border border-white/5 hover:border-orange-500/40 transition-colors">
      <div className="w-full overflow-hidden bg-[#0b0e14]">
        <img
          src={movie.image.medium}alt={movie.name}
          className="h-60 w-80 object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-1">
          {movie.name}
        </h3>

        <div className="mt-1 flex items-center gap-3 text-xs sm:text-sm text-gray-400">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>

        <p className="mt-2 text-xs text-gray-500 line-clamp-2 flex-1">
          {stripHtml(movie.summary)}
        </p>

        <button
          onClick={() => onSeeDetails(movie)}
          className="mt-4 w-full rounded-lg bg-white/5 hover:bg-orange-500 hover:text-white text-gray-200 text-sm font-medium py-2 transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
