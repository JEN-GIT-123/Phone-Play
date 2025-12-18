import React from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: 1, name: "Apple", image: "https://via.placeholder.com/400x300?text=Apple" },
  { id: 2, name: "Samsung", image: "https://via.placeholder.com/400x300?text=Samsung" },
  { id: 3, name: "Xiaomi", image: "https://via.placeholder.com/400x300?text=Xiaomi" },
  { id: 4, name: "Oppo", image: "https://via.placeholder.com/400x300?text=Oppo" },
  { id: 5, name: "OnePlus", image: "https://via.placeholder.com/400x300?text=OnePlus" },
  { id: 6, name: "Google Pixel", image: "https://via.placeholder.com/400x300?text=Pixel" },
];

export default function CategoriesPage() {
  return (
    <div className="bg-black min-h-screen py-8 text-white font-[Orbitron]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-12 text-center">
          Explore Categories
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {CATEGORIES.map(category => (
            <Link
              key={category.id}
              to={`/products?category=${category.name}`}
              className="relative bg-black/70 border border-cyan-400/30 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-105 transform transition-all duration-300 overflow-hidden"
            >
              {/* Category Image */}
              <div className="w-full h-56 overflow-hidden rounded-t-2xl border-b border-cyan-400/20">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>

              {/* Category Name */}
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
                  {category.name}
                </h3>
              </div>

              {/* Neon Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none border-2 border-cyan-400/40 rounded-2xl animate-pulse"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
