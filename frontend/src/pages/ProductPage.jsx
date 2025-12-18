import React, { useMemo, useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PRODUCTS = [
  { id: 1, name: "iPhone 14 Pro", brand: "Apple", ram: "8GB", storage: "256GB", price: 999, image: "https://via.placeholder.com/400x300?text=iPhone+14+Pro" },
  { id: 2, name: "Samsung S23", brand: "Samsung", ram: "8GB", storage: "128GB", price: 799, image: "https://via.placeholder.com/400x300?text=Samsung+S23" },
  { id: 3, name: "Xiaomi 13", brand: "Xiaomi", ram: "12GB", storage: "256GB", price: 599, image: "https://via.placeholder.com/400x300?text=Xiaomi+13" },
  { id: 4, name: "Oppo Reno10", brand: "Oppo", ram: "8GB", storage: "128GB", price: 399, image: "https://via.placeholder.com/400x300?text=Oppo+Reno10" },
];

export default function HomePage() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (id) => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter(fav => fav !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const filtered = PRODUCTS.filter(p => !search || p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-black min-h-screen text-white font-[Orbitron] py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            Neon Phones
          </h1>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search phones, model..."
            className="w-full md:max-w-md px-4 py-2 border border-cyan-400/50 rounded-xl bg-black/70 text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <div key={product.id} className="relative bg-black/70 border border-cyan-400/30 rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.5)]
                hover:shadow-[0_0_50px_rgba(34,211,238,1)] hover:scale-105 transform transition-all duration-300 flex flex-col overflow-hidden">
              
              {/* Favorite Icon */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-3 right-3 text-xl z-10"
              >
                {favorites.includes(product.id) ? (
                  <FaHeart className="text-pink-500 drop-shadow-[0_0_15px_rgba(255,0,128,0.8)] transition-transform hover:scale-125" />
                ) : (
                  <FaRegHeart className="text-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform hover:scale-125" />
                )}
              </button>

              <div className="w-full h-56 overflow-hidden rounded-t-2xl border-b border-cyan-400/20">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
              </div>

              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">{product.name}</h3>
                  <p className="text-gray-300 mt-1">{product.brand} • {product.ram} • {product.storage}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold text-cyan-400">${product.price}</div>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-cyan-400/20 rounded-lg hover:bg-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
