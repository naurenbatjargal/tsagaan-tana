import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  const posts: Record<string, { title: string; content: string; date: string }> = {
    "traditional-medicine-benefits": {
      title: "Уламжлалт анагаах ухааны ач тус",
      content: `
        <p>Монголын уламжлалт анагаах ухаан нь олон зуун жилийн туршид хүмүүсийн эрүүл мэндийг хамгаалж ирсэн үнэт өв юм.</p>
        <h2>Үндсэн онол</h2>
        <p>Уламжлалт анагаах ухаан нь хүний бие махбодийн тэнцвэрийг хадгалах, өвчнөөс урьдчилан сэргийлэх, эмчлэх зорилготой.</p>
        <h2>Ач тусууд</h2>
        <ul>
          <li>Бие махбодийг ерөнхийд нь бэхжүүлдэг</li>
          <li>Дархлааг дэмждэг</li>
          <li>Сэтгэл зүйн тайвширлыг нэмэгдүүлдэг</li>
          <li>Хор нөлөө багатай</li>
        </ul>
      `,
      date: "2024.03.15",
    },
    "about-baria-jasal": {
      title: "Бариа заслын тухай",
      content: `
        <p>Бариа засал нь Монголын уламжлалт анагаах ухааны чухал хэсэг юм.</p>
        <h2>Түүх</h2>
        <p>Бариа заслын урлаг нь олон зуун жилийн түүхтэй бөгөөд үе үеийн эмч нараас дамжин ирсэн мэдлэг, туршлага дээр тулгуурладаг.</p>
        <h2>Үр нөлөө</h2>
        <ul>
          <li>Мэдрэлийн системийг сайжруулдаг</li>
          <li>Судасны эргэлтийг дэмждэг</li>
          <li>Өвдөлт намдаадаг</li>
          <li>Биеийн хөдөлгөөний чадварыг сэргээдэг</li>
        </ul>
      `,
      date: "2024.03.10",
    },
    "health-tips": {
      title: "Эрүүл мэндийн зөвлөгөө",
      content: `
        <p>Өвлийн улиралд эрүүл байхын тулд дараах зүйлсийг анхаараарай.</p>
        <h2>Хооллолт</h2>
        <ul>
          <li>Дархлаа дэмжих хүнс хэрэглэх (лийр, алим, буурцаг)</li>
          <li>Дулаан чанартай хоол идэх</li>
          <li>Ус хангалттай уух</li>
        </ul>
        <h2>Дасгал хөдөлгөөн</h2>
        <p>Өдөр бүр дор хаяж 30 минут дасгал хийх нь дархлааг бэхжүүлж, эрүүл мэндийг хамгаална.</p>
      `,
      date: "2024.03.05",
    },
  };

  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-8">
        <div className="mb-4 text-sm text-gray-500">{post.date}</div>
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
      </div>
      <div
        className="prose prose-lg max-w-none text-gray-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  return [
    { locale: "mn", slug: "traditional-medicine-benefits" },
    { locale: "mn", slug: "about-baria-jasal" },
    { locale: "mn", slug: "health-tips" },
  ];
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const posts: Record<string, { title: string }> = {
    "traditional-medicine-benefits": { title: "Уламжлалт анагаах ухааны ач тус" },
    "about-baria-jasal": { title: "Бариа заслын тухай" },
    "health-tips": { title: "Эрүүл мэндийн зөвлөгөө" },
  };
  const post = posts[slug];
  return {
    title: post ? `${post.title} | Цагаан Тана` : "Мэдээ | Цагаан Тана",
  };
}
