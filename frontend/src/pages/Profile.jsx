import React, { useState, useEffect } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white font-[Orbitron] flex items-center justify-center">
        <div className="text-center p-10 bg-black/70 border border-cyan-400/30 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h2 className="text-3xl text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
            No User Logged In
          </h2>
          <p className="text-gray-400 mb-6">Please log in to view your profile</p>
          <button
            onClick={() => window.location.href = "/login"}
            className="px-6 py-3 bg-cyan-400/30 rounded hover:bg-cyan-400/50 font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-[Orbitron] py-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-10 text-center">
          👤 Profile
        </h1>

        {/* PROFILE CARD */}
        <div className="bg-black/70 border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:shadow-[0_0_50px_rgba(34,211,238,0.7)] transition flex flex-col md:flex-row items-center gap-6">
          
          {/* AVATAR */}
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400/50 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition">
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&background=000000&color=00ffff&size=128`}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFO */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] mb-2">
              {user.name}
            </h2>
            <p className="text-gray-400 mb-4">Email: {user.email}</p>
            <p className="text-gray-400 mb-4">Joined: {new Date(user.joined || Date.now()).toLocaleDateString()}</p>

            <div className="flex gap-3 flex-wrap mt-4">
              <button
                onClick={() => alert("Edit profile clicked")}
                className="px-4 py-2 bg-cyan-400/30 rounded hover:bg-cyan-400/50 font-bold shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition"
              >
                Edit Profile
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                className="px-4 py-2 bg-red-600/30 rounded hover:bg-red-600/50 font-bold shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] transition"
              >
                Logout
              </button>
            </div>
          </div>

        </div>

        {/* FAVORITES / ORDERS BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => window.location.href="/orders"}
            className="px-6 py-3 bg-pink-500/30 rounded hover:bg-pink-500/50 font-bold shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_40px_rgba(255,0,255,0.8)] transition"
          >
            My Orders
          </button>
          <button
            onClick={() => window.location.href="/favorites"}
            className="px-6 py-3 bg-cyan-400/30 rounded hover:bg-cyan-400/50 font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition"
          >
            My Favorites
          </button>
        </div>

      </div>
    </div>
  );
}
