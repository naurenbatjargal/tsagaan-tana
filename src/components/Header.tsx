import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-[#0F172A]">Цагаан Тана</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "/", label: t("home") },
            { href: "/about", label: t("about") },
            { href: "/services", label: t("services") },
            { href: "/blog", label: t("blog") },
            { href: "/contact", label: t("contact") },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#64748B] transition-colors hover:bg-emerald-50 hover:text-emerald-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/services#booking"
          className="hidden md:inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Цаг авах
        </Link>
      </div>
    </header>
  );
}
