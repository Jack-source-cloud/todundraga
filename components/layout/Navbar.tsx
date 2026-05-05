'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/en"
          className="text-2xl font-semibold tracking-tight"
        >
          Tod Undraga
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="/en/about">About</Link>
          <Link href="/en/projects">Projects</Link>
          <Link href="/en/services">Services</Link>
          <Link href="/en/contact">Contact</Link>
        </nav>

        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  )
}