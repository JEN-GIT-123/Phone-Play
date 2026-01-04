import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGamepad,
  FaMicrochip,
  FaBatteryFull,
  FaCamera,
  FaShoppingCart,
  FaCheck,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [filter, setFilter] = useState("all");
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const products = [
    {
      id: 1,
      name: "Cyber Phone X",
      price: 899,
      category: "gaming",
      image: "/phones/phone1.png",
      stats: {
        fps: "144 FPS",
        chip: "Snapdragon 8 Gen",
        battery: "6000mAh",
        camera: "64MP",
      },
    },
    {
      id: 2,
      name: "Neon Phone Pro",
      price: 799,
      category: "flagship",
      image: "/phones/phone2.png",
      stats: {
        fps: "120 FPS",
        chip: "Dimensity 9200",
        battery: "5000mAh",
        camera: "108MP",
      },
    },
    {
      id: 3,
      name: "PowerMax Ultra",
      price: 699,
      category: "battery",
      image: "/phones/phone3.png",
      stats: {
        fps: "90 FPS",
        chip: "Snapdragon 7+",
        battery: "7000mAh",
        camera: "50MP",
      },
    },
    {
      id: 4,
      name: "CamX Shooter",
      price: 749,
      category: "camera",
      image: "/phones/phone4.png",
      stats: {
        fps: "120 FPS",
        chip: "Snapdragon 8",
        battery: "4800mAh",
        camera: "200MP",
      },
    },
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  const handleAddToCart = (product) => {
    addToCart({ ...product, qty: 1 });
    setAddedId(product.id);

    // Reset animation after 1 second
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest font-[Orbitron]">
          🎒 PLAYER INVENTORY
        </h1>
        <p className="mt-4 text-gray-400">
          Choose your weapon before entering battle
        </p>
      </section>

      {/* ===== FILTER BAR ===== */}
      <section className="flex flex-wrap justify-center gap-4 mb-14">
        {["all", "gaming", "flagship", "battery", "camera"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold uppercase
            transition
            ${
              filter === cat
                ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                : "bg-black/50 border border-white/20 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-black/60 border border-cyan-400/20 rounded-2xl p-6
            hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
            transition relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>

            {/* Image */}
            <div className="h-40 rounded-xl bg-black/40 flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>

            {/* Name & Price */}
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-cyan-400 font-bold mt-1">${product.price}</p>

            {/* STATS */}
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <FaGamepad className="text-cyan-400" />
                FPS: {product.stats.fps}
              </div>
              <div className="flex items-center gap-2">
                <FaMicrochip className="text-pink-400" />
                Chip: {product.stats.chip}
              </div>
              <div className="flex items-center gap-2">
                <FaBatteryFull className="text-green-400" />
                Battery: {product.stats.battery}
              </div>
              <div className="flex items-center gap-2">
                <FaCamera className="text-purple-400" />
                Camera: {product.stats.camera}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 mt-6">
              <Link
                to={`/products/${product.id}`}
                className="flex-1 text-center py-2 rounded-lg border border-white/20
                hover:bg-white/10 transition"
              >
                View Stats
              </Link>

              <button
                onClick={() => handleAddToCart(product)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                font-bold transition
                ${
                  addedId === product.id
                    ? "bg-green-400 text-black"
                    : "bg-cyan-400 text-black hover:scale-105 active:scale-95"
                }`}
              >
                {addedId === product.id ? <FaCheck /> : <FaShoppingCart />}
              </button>
            </div>
          </div>
        ))}

      </section>

      {/* ===== GAME TIP ===== */}
      <section className="text-center pb-20">
        <p className="text-gray-500 text-sm">
          🎯 Tip: Items added to inventory appear in your cart HUD
        </p>
      </section>

    </div>
  );
}
