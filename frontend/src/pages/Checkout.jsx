import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shippingFee = subtotal > 500 ? 0 : 20; // Free shipping over $500
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shippingFee + tax;

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(
      `Order placed!\nTotal: $${total.toFixed(
        2
      )}\nShipping to: ${shipping.name}, ${shipping.address}, ${shipping.city}`
    );
    clearCart();
  };

  return (
    <div className="min-h-screen bg-black/90 py-10 font-[Orbitron] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT: Shipping + Payment */}
        <div className="space-y-6">
          <div className="bg-black/70 border border-cyan-400/40 rounded-2xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
              Shipping Information
            </h2>
            <div className="grid gap-4">
              {["name","email","phone","address","city","zip","country"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={shipping[field]}
                  onChange={(e) => setShipping({ ...shipping, [field]: e.target.value })}
                  className="w-full p-3 border border-cyan-400/50 rounded-lg bg-black/50 placeholder-gray-400 text-white focus:ring-2 focus:ring-cyan-400 transition"
                />
              ))}
            </div>
          </div>

          <div className="bg-black/70 border border-pink-400/40 rounded-2xl p-6 shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            <h2 className="text-2xl font-bold text-pink-400 mb-4 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
              Payment Information
            </h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Card Number"
                value={payment.cardNumber}
                onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                className="w-full p-3 border border-pink-400/50 rounded-lg bg-black/50 placeholder-gray-400 text-white focus:ring-2 focus:ring-pink-400 transition"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  value={payment.expiry}
                  onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                  className="p-3 border border-pink-400/50 rounded-lg bg-black/50 placeholder-gray-400 text-white focus:ring-2 focus:ring-pink-400 transition"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={payment.cvv}
                  onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                  className="p-3 border border-pink-400/50 rounded-lg bg-black/50 placeholder-gray-400 text-white focus:ring-2 focus:ring-pink-400 transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="space-y-6">
          <div className="bg-black/70 border border-green-400/40 rounded-2xl p-6 shadow-[0_0_30px_rgba(52,211,153,0.5)]">
            <h2 className="text-2xl font-bold text-green-400 mb-4 drop-shadow-[0_0_20px_rgba(52,211,153,0.8)]">
              Order Summary
            </h2>

            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b border-cyan-400/20 pb-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-white">{item.name}</div>
                    <div className="text-sm text-gray-400">
                      ${item.price} x {item.qty}
                    </div>
                  </div>
                  <div className="font-bold text-white">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-white">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all"
            >
              Place Order → 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
