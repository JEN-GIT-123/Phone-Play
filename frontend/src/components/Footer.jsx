import React from "react";
import { FaTelegramPlane, FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-cyan-400/30 py-12 mt-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* 🎮 GAME-STYLE TITLE */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-[Orbitron] text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Phone
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,1)]">
              PLAY
            </span>
          </span>
          <span className="text-cyan-400/70 mt-1 text-sm md:text-base font-semibold tracking-wider">
            Connecting gamers & tech lovers
          </span>
        </div>

        {/* 🌐 SOCIAL ICONS */}
        <div className="flex space-x-6">
          <a
            href="https://t.me/chevjen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl p-4 rounded-full bg-black/50 hover:bg-cyan-400/30 hover:text-black transition shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(34,211,238,1)]"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://web.facebook.com/chev.chen.7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl p-4 rounded-full bg-black/50 hover:bg-cyan-400/30 hover:text-black transition shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(34,211,238,1)]"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://github.com/your_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl p-4 rounded-full bg-black/50 hover:bg-cyan-400/30 hover:text-black transition shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(34,211,238,1)]"
          >
            <FaGithub />
          </a>
        </div>

        {/* 📜 COPYRIGHT */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          © 2025 PhonePLAY. All rights reserved.
        </div>
      </div>

      {/* ⚡ ENERGY LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] overflow-hidden">
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse mx-auto"></div>
      </div>
    </footer>
  );
}
