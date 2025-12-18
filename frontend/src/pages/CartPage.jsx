import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { items, removeFromCart, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 🔐 Checkout handler
  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-[Orbitron] py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-12 text-center">
          🛒 Your Cart
        </h1>

        {/* EMPTY CART */}
        {items.length === 0 ? (
          <div className="bg-black/70 border border-cyan-400/40 rounded-2xl p-10 text-center shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <p className="text-gray-400 text-lg mb-6">Your cart is empty</p>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-cyan-400/30 text-white rounded-lg hover:bg-cyan-400/50 font-semibold transition shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]"
            >
              Go to Products →
            </button>
          </div>
        ) : (
          <div className="space-y-6">

            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 bg-black/70 border border-cyan-400/30 rounded-2xl p-4 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition"
              >
                {/* IMAGE */}
                <div className="w-32 h-32 overflow-hidden rounded-xl border border-cyan-400/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 mt-1">${item.price}</p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                      className="w-8 h-8 border border-cyan-400/50 rounded hover:bg-cyan-400/20 transition"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-8 h-8 border border-cyan-400/50 rounded hover:bg-cyan-400/20 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 font-semibold shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,0,0.7)] transition mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* TOTAL & ACTIONS */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 bg-black/70 border border-cyan-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                Total: ${total.toFixed(2)}
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 font-medium transition shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]"
                >
                  Clear Cart
                </button>

                <button
                  onClick={handleCheckout}
                  className="px-6 py-2 bg-cyan-400/30 rounded hover:bg-cyan-400/50 font-bold transition shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]"
                >
                  Checkout →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
