import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15 Pro", price: "$999", image: "https://via.placeholder.com/300x400?text=iPhone+15+Pro" },
  { id: 2, name: "Samsung Galaxy S25", price: "$899", image: "https://via.placeholder.com/300x400?text=Galaxy+S25" },
  { id: 3, name: "Google Pixel 9", price: "$799", image: "https://via.placeholder.com/300x400?text=Pixel+9" },
  { id: 4, name: "OnePlus 12", price: "$699", image: "https://via.placeholder.com/300x400?text=OnePlus+12" },
];

export default function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-blue-900 to-black text-center py-20 relative overflow-hidden">
        <h1 className="text-5xl font-[Orbitron] font-extrabold tracking-widest text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.7)] mb-4">
          Level Up Your Phone Game
        </h1>
        <p className="text-lg text-gray-300 mb-8">Discover top smartphones with glowing deals. Play your way to the best tech!</p>
        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="px-8 py-3 bg-cyan-400/20 text-white font-bold rounded-lg hover:bg-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300"
        >
          Shop Now
        </button>

        {/* Neon floating lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-1 h-full bg-cyan-400/20 left-1 animate-pulse-slow"></div>
          <div className="absolute w-1 h-full bg-cyan-400/20 left-10 animate-pulse-slow"></div>
          <div className="absolute w-1 h-full bg-cyan-400/20 left-20 animate-pulse-slow"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-[Orbitron] font-bold mb-10 text-center text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
          Featured Phones
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black/70 border border-cyan-400/20 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition-all duration-300"
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover border-b border-cyan-400/30" />
              <div className="p-6 text-center">
                <h3 className="font-[Orbitron] text-lg font-bold text-cyan-400 mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-cyan-400/20 rounded-lg hover:bg-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] transition-all duration-300 font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
