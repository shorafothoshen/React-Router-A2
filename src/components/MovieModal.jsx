import { useEffect } from "react";

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!movie) return null;

  const poster = movie.image?.original || movie.image?.medium;
  const rating = movie.rating?.average;

  const stripHtml=(summary)=>{
    if (!summary) return "No summary available.";
    return summary.replace(/<[^>]+>/g, "");
  }


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8"
      onClick={onClose}>
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#12141c] border border-white/10 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-black/60 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-[38%] shrink-0">
            {poster ? (
              <img
                src={poster}
                alt={movie.name}
                className="h-56 sm:h-full w-full object-cover"
              />
            ) : (
              <div className="h-56 sm:h-full w-full bg-white/5 flex items-center justify-center text-gray-600 text-sm">
                No image
              </div>
            )}
          </div>
          <div className="flex-1 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white leading-snug">
              {movie.name}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {rating && (
                <span className="inline-flex items-center gap-1 rounded-md bg-orange-500/10 text-orange-400 text-xs font-medium px-2.5 py-1">
                  ⭐ {rating}
                </span>
              )}
              {movie.premiered && (
                <span className="inline-flex items-center rounded-md bg-white/5 text-gray-300 text-xs font-medium px-2.5 py-1">
                  {movie.premiered.slice(0, 4)}
                </span>
              )}
              {movie.status && (
                <span className="inline-flex items-center rounded-md bg-white/5 text-gray-300 text-xs font-medium px-2.5 py-1">
                  {movie.status}
                </span>
              )}
            </div>

            {movie.genres?.length > 0 && (
              <p className="mt-3 text-sm text-gray-500">
                {movie.genres.join(" · ")}
              </p>
            )}

            <p className="mt-5 text-sm text-gray-400 leading-relaxed">
              {stripHtml(movie.summary)}
            </p>

            <div className="flex justify-end">
              <button
              onClick={onClose}
              className="mt-6 rounded-lg border border-white/10 hover:border-orange-500 hover:text-orange-400 text-gray-300 text-sm font-medium px-5 py-2 transition-colors"
            >
              Close
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}