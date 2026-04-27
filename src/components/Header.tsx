import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-600" />
          <span className="text-xl font-bold text-gray-900">Цагаан Тана</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            {t("home")}
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            {t("about")}
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            {t("services")}
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            {t("blog")}
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            {t("contact")}
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <button className="md:hidden p-2 text-gray-700">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}
