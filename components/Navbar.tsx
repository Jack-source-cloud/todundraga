// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <div className="font-bold">TodUndraga</div>
      <div className="flex gap-4">
        <Link href="/en">EN</Link>
        <Link href="/mn">MN</Link>
      </div>
    </nav>
  );
}