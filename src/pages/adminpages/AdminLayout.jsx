import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">My Admin</h2>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Link to="/admin/dashboard" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/admin/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>
      )}

      {/* Sidebar for Desktop */}
      <aside className="hidden md:block w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">My Admin</h2>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="/admin/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
        </nav>
      </aside>

      {/* Main + Footer */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <footer className="bg-white text-center text-gray-500 py-4 border-t">
          &copy; 2025 My Admin Panel. All rights reserved.
        </footer>
      </div>
    </div>
  );
}