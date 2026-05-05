import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container-custom flex items-center justify-between py-5">
        <Link href="/en" className="text-2xl font-bold">
          Tod Undraga
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/en/about">About</Link>
          <Link href="/en/projects">Projects</Link>
          <Link href="/en/services">Services</Link>
          <Link href="/en/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}