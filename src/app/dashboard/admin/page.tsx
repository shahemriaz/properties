export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome, Admin!</h1>
        <p className="mb-4">Manage users, listings, and view platform metrics.</p>
        <div className="flex gap-4 mb-6">
          <a href="/admin/users" className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition">User Management</a>
          <a href="/admin/listings" className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition">Listings Management</a>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Platform Metrics</h2>
          <div className="text-gray-500">(Metrics such as total users, listings, and areas will appear here.)</div>
        </div>
      </div>
    </div>
  );
} 