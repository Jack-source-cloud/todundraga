// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl">Admin Login</h1>

      <input
        placeholder="Email"
        className="border p-2 mt-4 block"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        className="border p-2 mt-2 block"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Login
      </button>
    </div>
  );
}