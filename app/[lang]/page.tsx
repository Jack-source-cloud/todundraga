import LanguageSwitcher from "../../components/LanguageSwitcher";
import { translations } from "../../lib/translations";

export default function Layout({ children }: any) {
  return (
    <html>
      <body>
        <header className="flex justify-between p-4 bg-black text-white">
          <div className="font-bold">TodUndraga</div>
          <LanguageSwitcher />
        </header>

        {children}

        <footer className="bg-black text-white text-center p-4">
          © 2026 TodUndraga.mn
        </footer>
      </body>
    </html>
  );
}