import { translations } from "@/lib/translations";

export default function Home({ params }: any) {
  const lang = params.lang as keyof typeof translations;
const t = translations[lang as keyof typeof translations];

  return (
    <main className="text-center">
      <section className="h-screen flex flex-col justify-center bg-black text-white">
        <h1 className="text-5xl">{t.title}</h1>
        <p className="mt-4">{t.services}</p>
      </section>
    </main>
  );
}