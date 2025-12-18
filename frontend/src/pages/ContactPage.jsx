import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-[Orbitron]">
      <div className="p-10 bg-black/70 border border-cyan-400/30 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)] text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
          📬 Contact Us
        </h1>
        <p className="text-gray-300 mb-6">
          Have questions or need support? Reach out to us through Telegram!
        </p>

        {/* Telegram Link */}
        <a
          href="https://t.me/chevjen"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/30 text-white rounded-xl 
            shadow-[0_0_20px_rgba(34,211,238,0.5)] 
            hover:bg-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
            transition-all font-bold
          "
        >
          <FaTelegramPlane size={20} />
          Telegram
        </a>

        <p className="text-gray-500 mt-6 text-sm">
          We usually respond within 24 hours.
        </p>
      </div>
    </div>
  );
}
