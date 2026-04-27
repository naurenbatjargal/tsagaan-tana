import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих | Цагаан Тана",
  description: "Цагаан Тана эмнэлэгтэй холбоо барих",
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">{t("address")}</h3>
            <p className="text-gray-600">
              Улаанбаатар хот, Сүхбаатар дүүрэг,
              <br />
              Энхтайвны өргөн чөлөө 15,
              <br />
              Цагаан Тана эмнэлэг
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">{t("workingHours")}</h3>
            <p className="text-gray-600">
              Даваа - Баасан: 09:00 - 18:00
              <br />
              Бямба: 10:00 - 14:00
              <br />
              Ням: Амарна
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Утас</h3>
            <p className="text-gray-600">
              +976 9911 2233
              <br />
              +976 7711 2233
            </p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t("name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t("email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t("phone")}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t("message")}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-emerald-700"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
