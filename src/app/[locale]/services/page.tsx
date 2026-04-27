"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үйлчилгээ | Цагаан Тана",
  description: "Цагаан Тана эмнэлгийн үйлчилгээ",
};

export default function ServicesPage() {
  const t = useTranslations("services");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      title: "Зүү тавих",
      description: "Уламжлалт зүү тавих эмчилгээг орчин үеийн стандартаар хийж гүйцэтгэнэ. Өвдөлт намдаах, сэргээн засах үйлчилгээтэй.",
      price: "60,000₮",
      duration: "45-60 мин",
    },
    {
      title: "Массаж",
      description: "Мэргэжлийн массажистын үйлчилгээ. Тайвшруулах, сэргээх массаж.",
      price: "45,000₮",
      duration: "60 мин",
    },
    {
      title: "Бариа засал",
      description: "Уламжлалт бариа засалын эмчилгээг мэргэжлийн эмч нар хийж гүйцэтгэнэ. Мэдрэл, судасны өвчнүүдэд үр дүнтэй.",
      price: "50,000₮",
      duration: "30-45 мин",
    },
    {
      title: "Уламжлалт эмчилгээ",
      description: "Монголын уламжлалт анагаах ухааны оношилгоо, эмчилгээ. Хүнсний зөвлөгөө, эмийн ургамлын эмчилгээ.",
      price: "40,000₮",
      duration: "30 мин",
    },
    {
      title: "Биеийн тамир зөвлөгөө",
      description: "Хувь хүнд тохирсон биеийн тамирын дасгал, амьдралын хэв маягийн зөвлөгөө.",
      price: "35,000₮",
      duration: "45 мин",
    },
    {
      title: "Оношилгоо",
      description: "Уламжлалт оношлогоо - хэл үзэх, хүрэл үзэх, асуумж авах аргуудаар онош тавина.",
      price: "30,000₮",
      duration: "20-30 мин",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[#0F172A] py-20 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-lg text-slate-400">{t("description")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#0F172A]">{service.title}</h3>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                    {service.duration}
                  </span>
                </div>
                <p className="mb-4 text-3xl font-bold text-emerald-600">{service.price}</p>
                <p className="text-[#64748B] leading-relaxed mb-6">{service.description}</p>
                <a
                  href="#booking"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 text-base font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Цаг авах
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-4 bg-[#F8FAFC]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#0F172A]">Цаг авах</h2>
            <p className="mt-4 text-lg text-[#64748B]">
              Доорх маягтыг бөглөж, таалагдсан үйлчилгээндээ цаг захиалаарай
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-emerald-50 p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-emerald-800">Амжилттай!</h3>
              <p className="text-emerald-700">Таны захиалгыг хүлээн авлаа. Бид удахгүй тантай холбогдох болно.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0F172A]">
                  Таны нэр
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 block w-full rounded-xl border border-[#E2E8F0] px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Нэрээ оруулна уу"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0F172A]">
                  Утасны дугаар
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 block w-full rounded-xl border border-[#E2E8F0] px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="99001122"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#0F172A]">
                  Үйлчилгээ сонгох
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-2 block w-full rounded-xl border border-[#E2E8F0] px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Үйлчилгээ сонгох</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#0F172A]">
                  Огноо сонгох
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="mt-2 block w-full rounded-xl border border-[#E2E8F0] px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-[#0F172A]">
                  Нэмэлт мэдээлэл
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-2 block w-full rounded-xl border border-[#E2E8F0] px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Нэмэлт мэдээлэл (заавал биш)"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Цаг захиалах
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
