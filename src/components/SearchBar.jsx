export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 rounded-xl bg-[#151923] border border-white/10 px-4 py-3 focus-within:border-orange-500 transition-colors">
        <span className="text-gray-500">🔍</span>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search for a movie..."
          className="w-full outline-none text-sm sm:text-base text-white placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}
