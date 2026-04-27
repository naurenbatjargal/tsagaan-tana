import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Мэдээ | Цагаан Тана",
  description: "Эрүүл мэндийн зөвлөгөө, мэдээ мэдээлэл",
};

export default function BlogPage() {
  const t = useTranslations("blog");

  const posts = [
    {
      title: "Уламжлалт анагаах ухааны ач тус",
      excerpt: "Монголын уламжлалт анагаах ухаан нь олон зуун жилийн туршид хүмүүсийн эрүүл мэндийг хамгаалж ирсэн...",
      date: "2024.03.15",
      slug: "traditional-medicine-benefits",
    },
    {
      title: "Бариа заслын тухай",
      excerpt: "Бариа засал нь мэдрэлийн систем, судасны эргэлтийг сайжруулахад чиглэсэн эмчилгээ юм...",
      date: "2024.03.10",
      slug: "about-baria-jasal",
    },
    {
      title: "Эрүүл мэндийн зөвлөгөө",
      excerpt: "Өвлийн улиралд эрүүл байх зөвлөмжүүд, дархлаа дэмжих хүнсний зүйлс...",
      date: "2024.03.05",
      slug: "health-tips",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-4 text-lg text-gray-600">{t("description")}</p>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <article
            key={index}
            className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-2 text-sm text-gray-500">{post.date}</div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900 hover:text-emerald-600">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              Дэлгэрэнгүй →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
