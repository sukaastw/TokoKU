import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import apiClient from "../../utils/apiClient";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("search")?.toLowerCase() || "";
  const categoryFilter = params.get("category") || "";

  useEffect(() => {
    apiClient
      .get("/products")
      .then((res) => {
        const allProducts = res.data.data || [];

        const filtered = allProducts.filter((p) => {
          const matchName = p.name?.toLowerCase().includes(searchTerm);
          const matchCategory =
            categoryFilter === "Semua Kategori" ||
            !categoryFilter ||
            (p.category?.name === categoryFilter);

          return matchName && matchCategory;
        });

        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil produk:", err);
        setLoading(false);
      });
  }, [searchTerm, categoryFilter]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>

      {loading ? (
        <p>Memuat produk...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      ) : (
        <p>Produk tidak ditemukan.</p>
      )}
    </div>
  );
}