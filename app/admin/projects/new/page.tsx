'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function NewProject() {
  const router = useRouter()

  const [form, setForm] = useState({
    title_en: '',
    title_mn: '',
    description_en: '',
    description_mn: '',
    image_url: '',
    location: '',
    slug: '',
  })

  async function handleSubmit() {
    await supabase.from('projects').insert([form])
    router.push('/admin/projects')
  }

  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-3xl font-bold">New Project</h1>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="w-full p-2 border"
          value={(form as any)[key]}
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2"
      >
        Create
      </button>
    </div>
  )
}