import { translations } from "../../lib/translations";

export default function Page({ params }: any) {
  const lang = params.lang === "mn" ? "mn" : "en";
  const t = translations[lang];

  return (
    <main className="text-center">
      <section className="h-screen flex flex-col justify-center bg-black text-white">
        <h1 className="text-5xl">{t.home}</h1>
        <p className="mt-4">{t.services}</p>
      </section>
    </main>
  );
}