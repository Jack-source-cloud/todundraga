'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([])

  async function fetchProjects() {
    const { data } = await supabase.from('projects').select('*')
    setProjects(data || [])
  }

  async function deleteProject(id: string) {
    await supabase.from('projects').delete().eq('id', id)
    fetchProjects()
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>

        <Link
          href="/admin/projects/new"
          className="bg-black text-white px-4 py-2 rounded"
        >
          + New Project
        </Link>
      </div>

      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded flex justify-between"
          >
            <div>
              <h2 className="font-semibold">{p.title_en}</h2>
              <p className="text-sm text-gray-500">
                {p.location}
              </p>
            </div>

            <div className="space-x-3">
              <Link
                href={`/admin/projects/edit/${p.id}`}
                className="text-blue-600"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteProject(p.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}