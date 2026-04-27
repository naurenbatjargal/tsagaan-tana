import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бидний тухай | Цагаан Тана",
  description: "Цагаан Тана эмнэлгийн тухай дэлгэрэнгүй мэдээлэл",
};

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
      </div>
      
      <div className="prose prose-lg mx-auto text-gray-600">
        <p className="mb-6">
          {t("description")}
        </p>
        <p className="mb-6">
          Цагаан Тана эмнэлэг нь 2010 онд байгуулагдсан бөгөөд Монголын уламжлалт анагаах ухааныг 
          орчин үеийн эмнэлгийн практиктай хослуулан өвчтөнүүддээ үйлчилж байна. Бидний зорилго 
          нь хүн бүрт эрүүл энх, аз жаргалтай амьдрах боломжийг олгох юм.
        </p>
        
        <p className="mb-6">
          Манай эмнэлэгт туршлагатай эмч, мэргэжилтнүүд ажилладаг бөгөөд тэд өвчтөн бүрт 
          индивидуал эмчилгээний төлөвлөгөө боловсруулж, хамгийн сайн үр дүнд хүрэхийг эрмэлздэг.
        </p>
        
        <h2 className="mt-12 mb-6 text-2xl font-bold text-gray-900">Бидний давуу талууд</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
            <span>20+ жилийн туршлага</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
            <span>Мэргэжлийн эмч, мэргэжилтнүүд</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
            <span>Орчин үеийн тоног төхөөрөмж</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
            <span>Тав тухтай орчин</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
