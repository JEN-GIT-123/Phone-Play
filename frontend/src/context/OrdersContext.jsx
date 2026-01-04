import { createContext, useContext, useState } from "react";

// 1️⃣ Create context
const OrdersContext = createContext();

// 2️⃣ Provider component
export const OrdersProvider = ({ children }) => {
  // Orders array: each order = { id, name, image, price, quantity, status }
  const [orders, setOrders] = useState([]);

  // Add new order
  const addOrder = (product, quantity = 1) => {
    const existingOrder = orders.find((o) => o.id === product.id);
    if (existingOrder) {
      // If already ordered, increase quantity
      setOrders((prev) =>
        prev.map((o) =>
          o.id === product.id
            ? { ...o, quantity: o.quantity + quantity }
            : o
        )
      );
    } else {
      // Add new order
      setOrders((prev) => [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity,
          status: "Processing", // default status
        },
      ]);
    }
  };

  // Update order status (e.g., Processing → Delivered)
  const updateOrderStatus = (orderId, status) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  // Clear all orders
  const clearOrders = () => setOrders([]);

  return (
    <OrdersContext.Provider
      value={{ orders, addOrder, updateOrderStatus, clearOrders }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

// 3️⃣ Hook for consuming context
export const useOrders = () => useContext(OrdersContext);
