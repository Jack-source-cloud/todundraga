'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (!error) {
      router.push('/admin/projects')
    } else {
      alert(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 space-y-4 p-8 border rounded-xl">
        <h1 className="text-2xl font-bold">Admin Login</h1>

        <input
          className="w-full p-2 border"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-2"
        >
          Login
        </button>
      </div>
    </div>
  )
}