import { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../utils/ProductContext";
import toast from "react-hot-toast";
import ProductSearchBar from "../../components/productSearchBar";

export default function AdminDashboard() {
  const { products, isLoading, isError, deleteProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin hapus produk?");
    if (!confirm) return;
    try {
      await deleteProduct.mutateAsync(id);
      toast.success("Produk berhasil dihapus!");
    } catch (error) {
      toast.error("Gagal menghapus produk.");
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "all" || p.category?.name === selectedCategory;
    return matchName && matchCategory;
  });

  const uniqueCategories = [
    "all",
    ...new Set(products.map((p) => p.category?.name).filter(Boolean)),
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Produk</h1>
          <Link
            to="/admin/add-product"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Tambah Produk
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <ProductSearchBar onSearch={(term) => setSearchTerm(term)} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring"
          >
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 py-10">Tidak ditemukan produk yang sesuai.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Gambar</th>
                  <th className="p-3 border text-left">Nama</th>
                  <th className="p-3 border text-left">Kategori</th>
                  <th className="p-3 border text-right">Harga</th>
                  <th className="p-3 border text-center">Stok</th>
                  <th className="p-3 border text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p, index) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-3 border text-center">{index + 1}</td>
                    <td className="p-3 border text-center">
                      <img
                        src={p.img_url}
                        alt={p.name}
                        className="w-16 h-16 object-cover rounded-md mx-auto"
                      />
                    </td>
                    <td className="p-3 border">{p.name}</td>
                    <td className="p-3 border">
                      {p.category?.name || "Tidak ada kategori"}
                    </td>
                    <td className="p-3 border text-right">
                      Rp {Number(p.price).toLocaleString("id-ID")}
                    </td>
                    <td className="p-3 border text-center">{p.stock}</td>
                    <td className="p-3 border text-center space-x-3">
                      <Link
                        to={`/admin/edit-product/${p.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="text-red-600 hover:underline"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}