import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-700">
          Admin Panel
        </div>

        <nav className="flex-1 p-4 space-y-3">
          <NavBtn onClick={() => navigate("/admin")}>Dashboard</NavBtn>
          <NavBtn onClick={() => navigate("/admin/orders")}>Orders</NavBtn>
          <NavBtn onClick={() => navigate("/admin/products")}>Products</NavBtn>
          <NavBtn onClick={() => navigate("/admin/users")}>Users</NavBtn>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="m-4 bg-red-600 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </aside>

      {/* PAGE CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

function NavBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 rounded hover:bg-slate-700 transition"
    >
      {children}
    </button>
  );
}
