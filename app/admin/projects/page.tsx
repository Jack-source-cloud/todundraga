'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Modal from '@/components/ui/Modal'
const [projects, setProjects] = useState<any[]>([])
const [open, setOpen] = useState(false)

const [form, setForm] = useState({
  title_en: '',
  title_mn: '',
  description_en: '',
  description_mn: '',
  image_url: '',
  location: '',
  slug: '',
})

async function fetchProjects() {
  const { data } = await supabase.from('projects').select('*')
  setProjects(data || [])
}

async function createProject() {
  await supabase.from('projects').insert([form])

  setForm({
    title_en: '',
    title_mn: '',
    description_en: '',
    description_mn: '',
    image_url: '',
    location: '',
    slug: '',
  })

  setOpen(false)
  fetchProjects()
}

async function deleteProject(id: string) {
  if (!confirm('Delete this project?')) return
  await supabase.from('projects').delete().eq('id', id)
  fetchProjects()
}
<button
  onClick={() => setOpen(true)}
  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800"
>
  + New Project
</button>
<Modal open={open} onClose={() => setOpen(false)}>
  <h2 className="text-xl font-bold mb-4">Create Project</h2>

  <div className="space-y-3">
    <input
      className="w-full border p-2"
      placeholder="Title EN"
      value={form.title_en}
      onChange={(e) =>
        setForm({ ...form, title_en: e.target.value })
      }
    />

    <input
      className="w-full border p-2"
      placeholder="Title MN"
      value={form.title_mn}
      onChange={(e) =>
        setForm({ ...form, title_mn: e.target.value })
      }
    />

    <textarea
      className="w-full border p-2"
      placeholder="Description EN"
      value={form.description_en}
      onChange={(e) =>
        setForm({ ...form, description_en: e.target.value })
      }
    />

    <textarea
      className="w-full border p-2"
      placeholder="Description MN"
      value={form.description_mn}
      onChange={(e) =>
        setForm({ ...form, description_mn: e.target.value })
      }
    />

    <input
      className="w-full border p-2"
      placeholder="Image URL"
      value={form.image_url}
      onChange={(e) =>
        setForm({ ...form, image_url: e.target.value })
      }
    />

    <input
      className="w-full border p-2"
      placeholder="Location"
      value={form.location}
      onChange={(e) =>
        setForm({ ...form, location: e.target.value })
      }
    />

    <input
      className="w-full border p-2"
      placeholder="Slug (auto or manual)"
      value={form.slug}
      onChange={(e) =>
        setForm({ ...form, slug: e.target.value })
      }
    />

    <button
      onClick={createProject}
      className="w-full bg-black text-white p-2 rounded"
    >
      Create Project
    </button>
  </div>
</Modal>


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
    if (!confirm('Delete this project?')) return
    await supabase.from('projects').delete().eq('id', id)
    fetchProjects()
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>

        <Link
          href="/admin/projects/new"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800"
        >
          + New Project
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-4">Title</th>
              <th>Location</th>
              <th>Slug</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-4 font-medium">{p.title_en}</td>
                <td>{p.location}</td>
                <td className="text-gray-500">{p.slug}</td>

                <td className="p-4 text-right space-x-4">
                  <Link
                    href={`/admin/projects/edit/${p.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteProject(p.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}