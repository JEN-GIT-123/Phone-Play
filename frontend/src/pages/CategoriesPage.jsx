import { Link } from "react-router-dom";
import {
  FaFire,
  FaBolt,
  FaGamepad,
  FaCamera,
  FaBatteryFull,
} from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      title: "Gaming Phones",
      desc: "High FPS, RGB lights, extreme cooling",
      icon: <FaGamepad />,
      color: "cyan",
      path: "/products?category=gaming",
    },
    {
      title: "Flagship Phones",
      desc: "Top performance & premium design",
      icon: <FaFire />,
      color: "pink",
      path: "/products?category=flagship",
    },
    {
      title: "Fast Charging",
      desc: "Charge to 100% before next match",
      icon: <FaBolt />,
      color: "yellow",
      path: "/products?category=charging",
    },
    {
      title: "Camera Phones",
      desc: "Pro photos & video recording",
      icon: <FaCamera />,
      color: "purple",
      path: "/products?category=camera",
    },
    {
      title: "Big Battery",
      desc: "Play longer without breaks",
      icon: <FaBatteryFull />,
      color: "green",
      path: "/products?category=battery",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest font-[Orbitron]">
          🎯 SELECT YOUR
          <span className="block text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,1)]">
            GAME MODE
          </span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Choose your category like picking a character class.
        </p>
      </section>

      {/* ===== CATEGORY GRID ===== */}
      <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">

        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className={`group relative bg-black/60 border border-${cat.color}-400/30
            rounded-2xl p-8 overflow-hidden
            hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
            hover:scale-105 transition duration-300`}
          >
            {/* Glow */}
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 bg-${cat.color}-400/20
              rounded-full blur-2xl group-hover:scale-125 transition`}
            ></div>

            {/* Icon */}
            <div className={`text-${cat.color}-400 text-5xl mb-6`}>
              {cat.icon}
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
            <p className="text-gray-400 text-sm">{cat.desc}</p>

            {/* Button */}
            <div className="mt-6 inline-block text-sm font-bold text-white
              border border-white/20 px-4 py-2 rounded-lg
              group-hover:bg-white/10 transition">
              ENTER →
            </div>
          </Link>
        ))}

      </section>

      {/* ===== BOTTOM INFO ===== */}
      <section className="text-center pb-20">
        <p className="text-gray-500 text-sm">
          🎮 Pro tip: Gaming phones give +30% FPS boost
        </p>
      </section>

    </div>
  );
}
