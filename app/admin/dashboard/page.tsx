import AdminSidebar from '@/components/admin/AdminSidebar'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-100">
      <AdminSidebar />

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">
          Tod Undraga Admin
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-zinc-500">Projects</p>
            <h2 className="text-3xl font-bold mt-2">12</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-zinc-500">Pages</p>
            <h2 className="text-3xl font-bold mt-2">8</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-zinc-500">Visitors</p>
            <h2 className="text-3xl font-bold mt-2">1,204</h2>
          </div>
        </div>
      </main>
    </div>
  )
}