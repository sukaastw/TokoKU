export default function SearchBar({
  value,
  onChange,
  placeholder = "Cari produk...",
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/3 px-4 py-2 border rounded-lg"
    />
  );
}