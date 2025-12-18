import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage() {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorites from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Remove from favorites
    const updated = favorites.filter(fav => fav.id !== product.id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="bg-black min-h-screen text-white font-[Orbitron] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            Favorites
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-pink-500 rounded-xl hover:bg-pink-600 transition font-semibold"
          >
            Back to Products
          </button>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            No favorite products yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map(product => (
              <div
                key={product.id}
                className="relative bg-black/70 border border-cyan-400/30 rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.5)]
                hover:shadow-[0_0_50px_rgba(34,211,238,1)] hover:scale-105 transform transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Favorite Icon */}
                <div className="absolute top-3 right-3 text-xl z-10">
                  <FaHeart className="text-pink-500 drop-shadow-[0_0_15px_rgba(255,0,128,0.8)]" />
                </div>

                <div className="w-full h-56 overflow-hidden rounded-t-2xl border-b border-cyan-400/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 mt-1">
                      {product.brand} • {product.ram} • {product.storage}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-bold text-cyan-400">${product.price}</div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2 bg-cyan-400/20 rounded-lg hover:bg-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
