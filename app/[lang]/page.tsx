// app/[lang]/page.tsx
import { translations } from "../../lib/translations";

export default function Home({ params }: any) {
  const lang = params?.lang === "mn" ? "mn" : "en";
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="p-20 text-center bg-gray-100">
        <h1 className="text-5xl font-bold">
          TodUndraga
        </h1>
        <p className="mt-4 text-xl">
          {t.home}
        </p>
      </section>
    </main>
  );
}