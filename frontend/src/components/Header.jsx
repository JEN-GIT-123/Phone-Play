import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

export default function Navbar({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClasses = ({ isActive }) =>
    `px-5 py-2 rounded-lg text-sm font-semibold uppercase tracking-widest text-gray-300 transition-all duration-300 hover:text-white hover:bg-cyan-400/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] ${
      isActive ? "text-white bg-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.8)]" : ""
    }`;

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-b border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={Logo} alt="Logo" className="h-14 w-auto group-hover:rotate-3 transition" />
              <span className="font-[Orbitron] text-2xl font-extrabold tracking-widest text-white">
                Phone
                <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,1)]">PLAY</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-4">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
              <NavLink to="/categories" className={navLinkClasses}>Categories</NavLink>
              <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">

              {/* Cart */}
              <Link to="/cart" className="relative p-3 rounded-full bg-cyan-400/10 hover:bg-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                <FaShoppingCart className="text-white" size={20} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-xs font-bold flex items-center justify-center bg-red-500 text-white rounded-full animate-pulse">{count}</span>
                )}
              </Link>

              {/* User */}
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-white">
                    <FaUser />
                    <span className="hidden sm:block">{user.name}</span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-black/70 backdrop-blur-xl border border-cyan-400/30 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.3)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                    <Link to="/profile" className="block px-4 py-3 hover:bg-cyan-400/20 text-white">Profile</Link>
                    <Link to="/orders" className="block px-4 py-3 hover:bg-cyan-400/20 text-white">Orders</Link>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10">Logout</button>
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex space-x-2">
                  <Link to="/login" className="text-white px-4 py-2 hover:bg-white/10 rounded">Login</Link>
                  <Link to="/register" className="text-cyan-400 px-4 py-2 hover:bg-white/10 rounded">Register</Link>
                </div>
              )}

              {/* Mobile Button */}
              <button className="md:hidden text-white" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Energy Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse mx-auto"></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-cyan-400/30">
            {["/", "/products", "/categories", "/blog", "/contact"].map((path) => (
              <NavLink
                key={path}
                to={path}
                onClick={toggleMenu}
                className="block px-6 py-4 text-white text-lg font-semibold hover:bg-cyan-400/20"
              >
                {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
              </NavLink>
            ))}

            {/* Mobile User / Auth */}
            {user ? (
              <div className="border-t border-cyan-400/30 mt-2">
                <Link to="/profile" onClick={toggleMenu} className="block px-6 py-3 text-white hover:bg-cyan-400/20">Profile</Link>
                <Link to="/orders" onClick={toggleMenu} className="block px-6 py-3 text-white hover:bg-cyan-400/20">Orders</Link>
                <button onClick={handleLogout} className="w-full text-left px-6 py-3 text-red-400 hover:bg-red-500/10">Logout</button>
              </div>
            ) : (
              <div className="border-t border-cyan-400/30 mt-2">
                <Link to="/login" onClick={toggleMenu} className="block px-6 py-3 text-white hover:bg-cyan-400/20">Login</Link>
                <Link to="/register" onClick={toggleMenu} className="block px-6 py-3 text-cyan-400 hover:bg-cyan-400/20">Register</Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Space for header */}
      <div className="pt-24"></div>
    </>
  );
}
