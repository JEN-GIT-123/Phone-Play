import { FaSearch, FaShoppingCart, FaRocket, FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Browse Accounts",
      desc: "Explore hundreds of Free Fire & mobile game accounts with rare skins and high levels.",
      icon: <FaSearch size={30} className="text-cyan-400" />
    },
    {
      id: 2,
      title: "Select & Buy",
      desc: "Choose your favorite account and proceed with secure payment instantly.",
      icon: <FaShoppingCart size={30} className="text-cyan-400" />
    },
    {
      id: 3,
      title: "Instant Delivery",
      desc: "Receive your account credentials immediately after successful payment.",
      icon: <FaRocket size={30} className="text-cyan-400" />
    },
    {
      id: 4,
      title: "Enjoy & Play",
      desc: "Login to your new account and start playing Free Fire with rare skins and high rank.",
      icon: <FaGamepad size={30} className="text-cyan-400" />
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO / TITLE */}
      <section className="text-center py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2 drop-shadow-[0_0_15px_#22d3ee]">
          How It Works
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Buying your Free Fire or mobile game account has never been easier. Follow these simple steps and get your account instantly.
        </p>
      </section>

      {/* STEPS */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {steps.map(step => (
          <div
            key={step.id}
            className="bg-black/70 border border-cyan-400/20 rounded-xl p-6 text-center hover:shadow-[0_0_20px_#22d3ee] transition transform hover:scale-105"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <Link
          to="/shop"
          className="bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Browse Accounts Now
        </Link>
      </section>
    </div>
  );
}
