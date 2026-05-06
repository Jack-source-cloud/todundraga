'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter, useParams } from 'next/navigation'

export default function EditProject() {
  const { id } = useParams()
  const router = useRouter()

  const [form, setForm] = useState<any>(null)

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single()

      setForm(data)
    }
    load()
  }, [id])

  async function update() {
    await supabase
      .from('projects')
      .update(form)
      .eq('id', id)

    router.push('/admin/projects')
  }

  if (!form) return <div>Loading...</div>

  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-3xl font-bold">Edit Project</h1>

      {Object.keys(form)
        .filter((k) => k !== 'id')
        .map((key) => (
          <input
            key={key}
            className="w-full p-2 border"
            value={form[key] || ''}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}

      <button
        onClick={update}
        className="bg-black text-white px-4 py-2"
      >
        Update
      </button>
    </div>
  )
}