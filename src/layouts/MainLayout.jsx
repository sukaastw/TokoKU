import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function MainLayout() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua Kategori");
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category && category !== "Semua Kategori") params.set("category", category);
    navigate({ pathname: "/products", search: params.toString() });
  }, [search, category]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <header className="bg-gray-100 p-4 flex flex-col md:flex-row gap-2 justify-between items-center">
        <SearchBar value={search} onChange={setSearch} />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option>Semua Kategori</option>
          <option>Elektronik</option>
          <option>Fashion</option>
          <option>Kecantikan</option>
        </select>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 E-Commerce Simple App | Version 1.0</p>
      </footer>
    </div>
  );
}