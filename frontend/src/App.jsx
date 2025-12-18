import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import ProductDetail from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import CategoriesPage from "./pages/CategoriesPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RigisterPage";
import Profile from "./pages/Profile";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Favorites from "./pages/FavoritesPage";

// Placeholder pages
function Orders() { return <div className="p-8">Orders Page</div>; }


export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage on page refresh
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductDetail />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}
