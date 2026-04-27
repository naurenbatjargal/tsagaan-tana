import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үйлчилгээ | Цагаан Тана",
  description: "Цагаан Тана эмнэлгийн үйлчилгээ",
};

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = [
    {
      title: "Бариа засал",
      description: "Уламжлалт бариа засалын эмчилгээг мэргэжлийн эмч нар хийж гүйцэтгэнэ. Мэдрэл, судасны өвчнүүдэд үр дүнтэй.",
      price: "50,000₮",
    },
    {
      title: "Зүү тавих",
      description: "Уламжлалт зүү тавих эмчилгээг орчин үеийн стандартаар хийж гүйцэтгэнэ. Өвдөлт намдаах, сэргээн засах үйлчилгээтэй.",
      price: "60,000₮",
    },
    {
      title: "Уламжлалт эмчилгээ",
      description: "Монголын уламжлалт анагаах ухааны оношилгоо, эмчилгээ. Хүнсний зөвлөгөө, эмийн ургамлын эмчилгээ.",
      price: "40,000₮",
    },
    {
      title: "Биеийн тамир зөвлөгөө",
      description: "Хувь хүнд тохирсон биеийн тамирын дасгал, амьдралын хэв маягийн зөвлөгөө.",
      price: "35,000₮",
    },
    {
      title: "Массаж",
      description: "Мэргэжлийн массажистын үйлчилгээ. Тайвшруулах, сэргээх массаж.",
      price: "45,000₮",
    },
    {
      title: "Оношилгоо",
      description: "Уламжлалт оношлогоо - хэл үзэх, хүрэл үзэх, асуумж авах аргуудаар онош тавина.",
      price: "30,000₮",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-4 text-lg text-gray-600">{t("description")}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                {service.price}
              </span>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
