import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HowItWorks from "./pages/HowItWork";
import CartPage from "./pages/CartPage";
import Support from "./pages/SupportPage";
import BuyAccounts from "./pages/ShopPage";
import ProductDetail from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import CategoriesPage from "./pages/CategoriesPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RigisterPage";
import Profile from "./pages/Profile";
import ContactPage from "./pages/ContactPage";
import OrdersPage from "./pages/OrderPage";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { OrdersProvider } from "./context/OrdersContext";

import Favorites from "./pages/FavoritesPage";



export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage on page refresh
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <OrdersProvider>
      
    <CartProvider>
      <FavoritesProvider>
        <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductDetail />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/shop" element={<BuyAccounts />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </Router>
      </FavoritesProvider>
    </CartProvider>
    </OrdersProvider>
  );
}
