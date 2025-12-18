import { useState } from "react";
import axios from "axios";

export default function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", { name, email, password });

      // Success alert
      alert("🎮 Registration successful!");

      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      // Error alert
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-black/80 border-2 border-cyan-400 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.7)] w-full max-w-sm p-8 backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] font-[Orbitron]">
          🎮 Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-cyan-400 bg-black/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-cyan-400 bg-black/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-cyan-400 bg-black/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.8)] transition transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400 text-sm font-[Orbitron]">
          Already have an account? <span className="text-pink-500 underline cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}
