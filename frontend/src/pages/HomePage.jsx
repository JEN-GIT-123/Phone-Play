import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Buy <span className="text-cyan-400">Free Fire</span> Accounts
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          Safe • Instant Delivery • Best Prices • 100% Trusted Platform
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/shop"
            className="px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition"
          >
            Buy Now
          </Link>
          <Link
            to="/how-it-works"
            className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            How It Works
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { title: "Instant Delivery", desc: "Get account details instantly after payment." },
          { title: "Secure Payments", desc: "100% safe & trusted transactions." },
          { title: "Best Prices", desc: "Cheap Free Fire accounts with rare skins." }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-black/60 border border-cyan-400/30 p-6 rounded-xl hover:shadow-[0_0_20px_#22d3ee] transition"
          >
            <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* FEATURED ACCOUNTS */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-center text-3xl font-bold mb-10">
          🔥 Featured Accounts
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-black/70 border border-cyan-400/20 rounded-xl p-4 hover:shadow-[0_0_20px_#22d3ee] transition"
            >
              <img
                src="https://i.imgur.com/Y6XzK6R.png"
                alt="Account"
                className="rounded-lg mb-3"
              />
              <h3 className="font-bold">Free Fire Account</h3>
              <p className="text-gray-400 text-sm">Level 65 • Rare Skins</p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-cyan-400 font-bold">₹799</span>
                <Link
                  to="/shop"
                  className="bg-cyan-400 text-black px-4 py-1 rounded"
                >
                  Buy
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          <div className="p-6 border border-cyan-400/30 rounded-lg">
            ✅ 100% Safe
          </div>
          <div className="p-6 border border-cyan-400/30 rounded-lg">
            ⚡ Instant Delivery
          </div>
          <div className="p-6 border border-cyan-400/30 rounded-lg">
            💬 24/7 Support
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cyan-400 text-black text-center">
        <h2 className="text-3xl font-bold">Ready to Buy Your Account?</h2>
        <p className="mt-2">Get started now and enjoy gaming!</p>
        <Link
          to="/shop"
          className="inline-block mt-6 px-8 py-3 bg-black text-white rounded-lg hover:scale-105 transition"
        >
          Browse Accounts
        </Link>
      </section>
    </div>
  );
}
