import { translations } from "../../lib/translations";

type Lang = "en" | "mn";

export default function Page({ params }: any) {
  const lang = params?.lang;

  const safeLang: Lang = lang === "mn" ? "mn" : "en";

  const t = translations[safeLang];

  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold">{t.title}</h1>
    </main>
  );
}