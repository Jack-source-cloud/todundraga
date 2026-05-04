"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  return (
    <div className="flex gap-3">
      <Link href={switchLang("mn")}>MN</Link>
      <Link href={switchLang("en")}>EN</Link>
    </div>
  );
}