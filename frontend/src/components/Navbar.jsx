// components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition ${
      isActive
        ? "text-cyan-400 bg-cyan-400/20 shadow-[0_0_12px_#22d3ee]"
        : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
    }`;

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-cyan-400/30 font-[Orbitron]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-white tracking-wider font-[Orbitron]">
            PHONEXY<span className="text-pink-500">Store</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-3">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/shop" className={navClass}>Shop</NavLink>
            <NavLink to="/categories" className={navClass}>Categories</NavLink>
            {user ? (
              <NavLink to="/orders" className={navClass}>Orders</NavLink>
            ) : (
              <NavLink to="/how-it-works" className={navClass}>How It Works</NavLink>
            )}
            <NavLink to="/support" className={navClass}>Support</NavLink>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Login/Register or User */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 text-white font-[Orbitron]">
                  <FaUser /> {user.name}
                </button>
                <div className="absolute right-0 mt-2 w-44 bg-black/90 border border-cyan-400/30 rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition">
                  <Link to="/orders" className="block px-4 py-2 hover:bg-cyan-400/20">My Orders</Link>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-cyan-400/20">Profile</Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition shadow-[0_0_10px_#22d3ee] font-[Orbitron]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:scale-105 transition shadow-[0_0_10px_#ff33cc] font-[Orbitron]"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 border-t border-cyan-400/30 font-[Orbitron]">
            {[
              { path: "/", label: "Home" },
              { path: "/shop", label: "Shop" },
              { path: "/categories", label: "Categories" },
              { path: "/how-it-works", label: "How It Works" },
              { path: "/support", label: "Support" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-white hover:bg-cyan-400/20 font-[Orbitron]"
              >
                {item.label}
              </NavLink>
            ))}
            {!user && (
              <div className="flex flex-col px-6 py-3 gap-2">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 bg-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition text-center font-[Orbitron]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:scale-105 transition text-center font-[Orbitron]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Spacer for content */}
      <div className="h-20"></div>
    </>
  );
}
