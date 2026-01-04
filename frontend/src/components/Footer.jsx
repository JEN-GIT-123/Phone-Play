import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-400/30 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8 text-gray-300">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Free<span className="text-cyan-400">Fire</span>Store
          </h2>
          <p className="text-gray-400 max-w-xs">
            The best place to buy Free Fire & mobile game accounts safely and instantly. Rare skins, high-level accounts, and trusted delivery.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-cyan-400 hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="text-cyan-400 hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="text-cyan-400 hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="text-cyan-400 hover:text-white transition"><FaDiscord /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-cyan-400 transition">Buy Accounts</Link>
          <Link to="/categories" className="hover:text-cyan-400 transition">Categories</Link>
          <Link to="/how-it-works" className="hover:text-cyan-400 transition">How It Works</Link>
          <Link to="/support" className="hover:text-cyan-400 transition">Support</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p>Email: <span className="text-cyan-400">support@freefirestore.com</span></p>
          <p>Phone: <span className="text-cyan-400">+91 1234 567 890</span></p>
          <p>Address: <span className="text-cyan-400">Mumbai, India</span></p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-400/20 mt-8 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FreeFireStore. All rights reserved.
      </div>
    </footer>
  );
}
