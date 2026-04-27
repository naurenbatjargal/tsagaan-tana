import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("hero");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mb-2 text-xl font-medium text-emerald-700">{t("subtitle")}</p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            {t("description")}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-base font-medium text-white transition-colors hover:bg-emerald-700"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-emerald-600 px-8 text-base font-medium text-emerald-700 transition-colors hover:bg-emerald-50"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Үйлчилгээ</h2>
            <p className="mt-4 text-lg text-gray-600">Бид олон төрлийн эмчилгээ үйлчилгээг санал болгож байна</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Бариа засал",
                desc: "Уламжлалт бариа засалын эмчилгээг мэргэжлийн эмч нар хийж гүйцэтгэнэ.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                ),
              },
              {
                title: "Зүү тавих",
                desc: "Уламжлалт зүү тавих эмчилгээг орчин үеийн стандартаар хийж гүйцэтгэнэ.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                ),
              },
              {
                title: "Уламжлалт эмчилгээ",
                desc: "Монголын уламжлалт анагаах ухааны оношилгоо, эмчилгээ.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
