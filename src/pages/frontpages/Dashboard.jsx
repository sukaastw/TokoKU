import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/products") // Pastikan URL sesuai dengan Laravel kamu
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal ambil data dari server");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data produk dari backend:", data);
        setProducts(data.data || []); // Sesuaikan dengan struktur JSON Laravel
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data produk:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Produk</h1>

      {loading ? (
        <p className="text-gray-500">Memuat produk...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">Tidak ada produk tersedia.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}