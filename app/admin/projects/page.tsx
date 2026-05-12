'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])

  async function fetchProjects() {
    const { data } = await supabase
      .from('projects')
      .select('*')

    setProjects(data || [])
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div className="flex min-h-screen bg-zinc-100">
      <AdminSidebar />

      <main className="flex-1 p-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            Projects
          </h1>

          <button className="bg-black text-white px-5 py-3 rounded-xl">
            + New Project
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-100">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Location</th>
                <th className="text-left p-4">Featured</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {project.title_en}
                  </td>

                  <td className="p-4">
                    {project.location}
                  </td>

                  <td className="p-4">
                    {project.featured ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}