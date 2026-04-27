import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("hero");

  const services = [
    {
      title: "Зүү тавих",
      desc: "Уламжлалт зүү тавих эмчилгээг орчин үеийн стандартаар хийж гүйцэтгэнэ.",
      price: "60,000₮",
    },
    {
      title: "Массаж",
      desc: "Мэргэжлийн массажистын үйлчилгээ. Тайвшруулах, сэргээх массаж.",
      price: "45,000₮",
    },
    {
      title: "Бариа засал",
      desc: "Уламжлалт бариа засалын эмчилгээг мэргэжлийн эмч нар хийж гүйцэтгэнэ.",
      price: "50,000₮",
    },
  ];

  const stats = [
    { number: "14+", label: "Жилийн туршлага" },
    { number: "10,000+", label: "Эмчлүүлсэн өвчтөн" },
    { number: "15+", label: "Мэргэжлийн эмч" },
    { number: "98%", label: "Сэтгэл ханамж" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[800px] items-center justify-center bg-[#0F172A] px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#0F172A] to-[#0F172A]" />
        
        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30">
            <svg className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            {t("title")}
          </h1>
          <p className="mb-4 text-2xl font-medium text-emerald-400">
            {t("subtitle")}
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            {t("description")}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/services#booking"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-emerald-500 px-10 text-base font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-slate-600 px-10 text-base font-semibold text-slate-300 transition-all hover:border-emerald-500 hover:text-emerald-400"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Үйлчилгээ
            </h2>
            <p className="mt-4 text-lg text-[#64748B]">
              Бид олон төрлийн эмчилгээ үйлчилгээг санал болгож байна
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-[#0F172A]">{service.title}</h3>
                <p className="mb-4 text-sm font-semibold text-emerald-600">{service.price} / цаг</p>
                <p className="text-[#64748B] leading-relaxed">{service.desc}</p>
                <Link
                  href="/services#booking"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Цаг авах →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600">{stat.number}</div>
                <div className="mt-2 text-sm text-[#64748B]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
