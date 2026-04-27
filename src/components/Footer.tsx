import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Цагаан Тана</span>
            </div>
            <p className="text-sm text-gray-600">
              Уламжлалт Анагаах Ухааны Эмнэлэг
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{tf("contact")}</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-600 hover:text-emerald-600">{t("home")}</Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-emerald-600">{t("about")}</Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-emerald-600">{t("services")}</Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-emerald-600">{t("blog")}</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-emerald-600">{t("contact")}</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{tf("followUs")}</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Цагаан Тана. {tf("rights")}
        </div>
      </div>
    </footer>
  );
}
