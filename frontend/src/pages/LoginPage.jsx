// pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Alert state
  const [alert, setAlert] = useState({ message: "", type: "" }); // type: "success" | "error"
  const navigate = useNavigate();

  // Show alert for 4 seconds
  const showAlert = (message, type = "success") => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: "", type: "" }), 4000); // 4s duration
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      showAlert("🎮 Login successful! Welcome back.", "success");
      setTimeout(() => navigate("/profile"), 1000); // redirect after 1s
    } catch (err) {
      showAlert(`❌ ${err.response?.data?.message || "Login failed"}`, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 relative font-[Orbitron]">

      {/* Game-style alert */}
      {alert.message && (
        <div
          className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl font-bold text-white text-center shadow-[0_0_20px] transition-all duration-500 ${
            alert.type === "success"
              ? "bg-cyan-400/80 shadow-cyan-400 animate-popPulse"
              : "bg-red-500/80 shadow-red-500 animate-popPulse"
          }`}
        >
          {alert.message}
        </div>
      )}

      {/* Login Card */}
      <div className="bg-black/80 border-2 border-cyan-400 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.7)] w-full max-w-sm p-8 backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
          🎮 Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
            disabled={loading}
            className="w-full py-2 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.8)] transition transform hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Don’t have an account?{" "}
          <span
            className="text-pink-500 underline cursor-pointer hover:text-pink-400 transition"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes popPulse {
          0% { opacity: 0; transform: translateX(-50%) translateY(-20px) scale(0.7); }
          50% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1.05); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
        .animate-popPulse {
          animation: 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
