import { FaEnvelope, FaDiscord, FaPhone } from "react-icons/fa";

export default function Support() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO / TITLE */}
      <section className="text-center py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2 drop-shadow-[0_0_15px_#22d3ee]">
          Need Help?
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          We are here to help you with account purchases, delivery, or technical issues.
        </p>
      </section>

      {/* CONTACT METHODS */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-black/70 border border-cyan-400/20 rounded-xl p-6 text-center hover:shadow-[0_0_20px_#22d3ee] transition transform hover:scale-105">
          <FaEnvelope size={30} className="text-cyan-400 mb-4 mx-auto"/>
          <h3 className="text-lg font-bold mb-2">Email Support</h3>
          <p className="text-gray-400">support@freefirestore.com</p>
        </div>
        <div className="bg-black/70 border border-cyan-400/20 rounded-xl p-6 text-center hover:shadow-[0_0_20px_#22d3ee] transition transform hover:scale-105">
          <FaDiscord size={30} className="text-cyan-400 mb-4 mx-auto"/>
          <h3 className="text-lg font-bold mb-2">Discord / Live Chat</h3>
          <p className="text-gray-400">Join our support server for instant help</p>
        </div>
        <div className="bg-black/70 border border-cyan-400/20 rounded-xl p-6 text-center hover:shadow-[0_0_20px_#22d3ee] transition transform hover:scale-105">
          <FaPhone size={30} className="text-cyan-400 mb-4 mx-auto"/>
          <h3 className="text-lg font-bold mb-2">Phone / WhatsApp</h3>
          <p className="text-gray-400">+91 1234 567 890</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Send us a Message</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg bg-black/50 border border-cyan-400 text-white focus:ring-2 focus:ring-cyan-400 outline-none" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg bg-black/50 border border-cyan-400 text-white focus:ring-2 focus:ring-cyan-400 outline-none" />
          <input type="text" placeholder="Subject" className="px-4 py-3 rounded-lg bg-black/50 border border-cyan-400 text-white focus:ring-2 focus:ring-cyan-400 outline-none" />
          <textarea placeholder="Message" rows="5" className="px-4 py-3 rounded-lg bg-black/50 border border-cyan-400 text-white focus:ring-2 focus:ring-cyan-400 outline-none"></textarea>
          <button className="bg-cyan-400 text-black font-bold py-3 rounded-lg hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
