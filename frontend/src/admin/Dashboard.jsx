export default function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Orders" value="1,245" />
        <Card title="Users" value="845" />
        <Card title="Products" value="128" />
        <Card title="Revenue" value="$54,200" />
      </div>
    </>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      <div className="text-gray-500">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}
