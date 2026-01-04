import { useOrders } from "../context/OrdersContext";
import { FaGift, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function GameOrdersPage() {
  const { orders } = useOrders();
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti whenever new orders appear
  useEffect(() => {
    if (orders.length > 0) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [orders]);

  return (
    <div className="bg-black min-h-screen py-10 px-4 text-white font-[Orbitron] relative overflow-hidden">
      
      {/* Confetti Effect */}
      {showConfetti &&
        [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-pink-400 animate-fall opacity-70"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * -20}vh`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))
      }

      {/* HEADER */}
      <h1 className="text-5xl md:text-6xl text-center font-extrabold text-pink-500 drop-shadow-[0_0_30px_rgba(255,0,255,0.7)] animate-pulse mb-10">
        🎉 Your Orders Adventure!
      </h1>

      {/* Empty state */}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center gap-6 animate-bounce">
          <div className="w-48 h-48 rounded-full bg-pink-100 flex items-center justify-center text-6xl text-pink-500 shadow-lg">
            <FaStar />
          </div>
          <h2 className="text-2xl text-pink-400 font-bold">No Orders Yet!</h2>
          <p className="text-pink-200 text-center max-w-sm">
            Your inventory is empty. Explore the shop and unlock your first rewards! 🌸
          </p>
        </div>
      ) : (
        // Orders grid
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-pink-900/70 rounded-3xl p-5 shadow-lg border-2 border-pink-500 hover:scale-105 transition transform flex flex-col items-center animate-fade-in"
            >
              {/* Image badge */}
              <div className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center mb-4 overflow-hidden shadow-inner hover:rotate-3 transition duration-300">
                <img src={order.image} alt={order.name} className="h-full object-contain" />
              </div>

              {/* Name & Quantity */}
              <h3 className="text-xl font-bold text-pink-300 text-center">{order.name}</h3>
              <p className="text-pink-200 mb-2">Qty: {order.quantity}</p>
              <p className="text-pink-200 font-semibold mb-3">${(order.price * order.quantity).toFixed(2)}</p>

              {/* Status ribbon */}
              <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                order.status === "Delivered" ? "bg-green-400 text-black" :
                order.status === "Processing" ? "bg-yellow-400 text-black" :
                "bg-pink-300 text-black"
              }`}>
                {order.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          .animate-fall {
            animation: fall 2s linear infinite;
          }

          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.7s ease forwards;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce {
            animation: bounce 1s infinite;
          }
        `}
      </style>
    </div>
  );
}
