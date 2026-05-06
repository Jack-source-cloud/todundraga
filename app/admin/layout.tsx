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
    <div className="min-h-screen flex">
      <aside className="w-64 bg-zinc-900 text-white p-6">
        <h1 className="text-xl font-bold mb-8">
          Admin Panel
        </h1>

        <nav className="space-y-4">
          <Link href="/admin/projects">Projects</Link>

          <button onClick={logout} className="mt-10 text-red-400">
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-10 bg-gray-50">
        {children}
      </main>
    </div>
  )
}