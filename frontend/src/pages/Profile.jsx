import React, { useState, useEffect } from "react";
import { FaUserAlt, FaStar, FaBoxOpen } from "react-icons/fa";

export default function GameProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-[Orbitron]">
        <div className="text-center p-10 bg-black/70 border border-cyan-400/30 rounded-3xl shadow-[0_0_40px_rgba(34,211,238,0.25)] animate-pulse">
          <h2 className="text-4xl text-cyan-400 mb-4 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            ⚠️ No Player Found
          </h2>
          <p className="text-gray-400 mb-6">Please log in to enter the game</p>
          <button
            onClick={() => window.location.href = "/login"}
            className="px-8 py-3 bg-cyan-400/30 rounded hover:bg-cyan-400/50 font-bold shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.9)] transition"
          >
            Enter Game
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-[Orbitron] py-10 px-4 text-white relative overflow-hidden">
      
      {/* Neon floating particles for game feel */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        ></div>
      ))}

      {/* HEADER */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 text-center mb-12 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)] animate-pulse">
        🎮 Player Profile
      </h1>

      {/* PROFILE CARD */}
      <div className="max-w-4xl mx-auto bg-black/70 border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.3)] hover:shadow-[0_0_80px_rgba(34,211,238,0.7)] transition flex flex-col md:flex-row items-center gap-6 animate-fade-in">
        
        {/* AVATAR */}
        <div className="w-32 h-32 rounded-full border-4 border-cyan-400/50 overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.9)] transition transform hover:scale-110">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=000000&color=00ffff&size=128`}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFO */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-2 animate-pulse">
            {user.name}
          </h2>
          <p className="text-gray-400 mb-2">Email: {user.email}</p>
          <p className="text-gray-400 mb-4">Joined: {new Date(user.joined || Date.now()).toLocaleDateString()}</p>

          <div className="flex gap-4 flex-wrap mt-4">
            <button
              onClick={() => alert("Edit profile clicked")}
              className="px-5 py-2 bg-cyan-400/30 rounded hover:bg-cyan-400/50 font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.9)] transition transform hover:scale-105"
            >
              Edit Profile
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="px-5 py-2 bg-red-600/30 rounded hover:bg-red-600/50 font-bold shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_50px_rgba(255,0,0,0.9)] transition transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* FAVORITES / ORDERS BUTTONS */}
      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        <button
          onClick={() => window.location.href="/orders"}
          className="px-8 py-3 bg-pink-500/30 rounded hover:bg-pink-500/50 font-bold shadow-[0_0_30px_rgba(255,0,255,0.5)] hover:shadow-[0_0_60px_rgba(255,0,255,0.8)] transition transform hover:scale-110 flex items-center gap-2"
        >
          <FaBoxOpen /> My Orders
        </button>

        <button
          onClick={() => window.location.href="/favorites"}
          className="px-8 py-3 bg-cyan-400/30 rounded hover:bg-cyan-400/50 font-bold shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] transition transform hover:scale-110 flex items-center gap-2"
        >
          <FaStar /> My Favorites
        </button>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in { animation: fade-in 0.7s ease forwards; }
        `}
      </style>
    </div>
  );
}
