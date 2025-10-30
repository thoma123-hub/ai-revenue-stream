export default function DashboardPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Manage Posts</h2>
          <p>Create, edit, and delete blog posts.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p>View and manage website users.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Site Statistics</h2>
          <p>View traffic and engagement metrics.</p>
        </div>
      </div>
    </div>
  );
}