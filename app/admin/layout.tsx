'use client'

import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  async function logout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-72 bg-zinc-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">
          Tod Undraga Admin
        </h1>

        <nav className="space-y-4 text-sm">
          <Link className="block hover:text-yellow-400" href="/admin/projects">
            Projects
          </Link>
        </nav>

        <button
          onClick={logout}
          className="mt-10 text-red-400 hover:text-red-300"
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b flex items-center px-6 justify-between">
          <h2 className="font-semibold">Dashboard</h2>
        </header>

        {/* CONTENT */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}