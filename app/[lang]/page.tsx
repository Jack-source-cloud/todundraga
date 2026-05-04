import { translations } from "../../lib/translations";

export default function Page({ params }: any) {
  const lang = params?.lang;

  if (lang !== "en" && lang !== "mn") {
    return <div>Invalid language</div>;
  }

  const t = translations[lang];

  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold">{t.title}</h1>
    </main>
  );
}