import Link from 'next/link'

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-10">
        Tod Undraga
      </h2>

      <nav className="space-y-4">
        <Link
          href="/admin/dashboard"
          className="block hover:text-yellow-400"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/projects"
          className="block hover:text-yellow-400"
        >
          Projects
        </Link>

        <Link
          href="/admin/pages"
          className="block hover:text-yellow-400"
        >
          Pages
        </Link>
      </nav>
    </aside>
  )
}