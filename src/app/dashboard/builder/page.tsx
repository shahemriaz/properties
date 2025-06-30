export default function BuilderDashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome, Builder!</h1>
        <p className="mb-4">Manage your projects and upload verification documents.</p>
        <a href="/projects/manage" className="inline-block bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition mb-6">Manage Projects</a>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Document Verification Status</h2>
          <div className="text-gray-500">(Your document verification status will appear here.)</div>
        </div>
      </div>
    </div>
  );
} 