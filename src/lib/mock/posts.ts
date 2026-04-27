import { CpPostsData } from "@/graphql/cms/queries/post";

export async function getPosts(): Promise<CpPostsData> {
  return {
    cpPosts: [
      {
        _id: "1",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        title: "Уламжлалт анагаах ухааны ач тус",
        slug: "traditional-medicine-benefits",
        excerpt: "Монголын уламжлалт анагаах ухаан нь олон зуун жилийн туршид хүмүүсийн эрүүл мэндийг хамгаалж ирсэн...",
        content: "",
        status: "published",
        featured: false,
        publishedDate: "2024-03-15",
        createdAt: "2024-03-15",
        updatedAt: "2024-03-15",
      },
      {
        _id: "2",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        title: "Бариа заслын тухай",
        slug: "about-baria-jasal",
        excerpt: "Бариа засал нь мэдрэлийн систем, судасны эргэлтийг сайжруулахад чиглэсэн эмчилгээ юм...",
        content: "",
        status: "published",
        featured: false,
        publishedDate: "2024-03-10",
        createdAt: "2024-03-10",
        updatedAt: "2024-03-10",
      },
      {
        _id: "3",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        title: "Эрүүл мэндийн зөвлөгөө",
        slug: "health-tips",
        excerpt: "Өвлийн улиралд эрүүл байх зөвлөмжүүд, дархлаа дэмжих хүнсний зүйлс...",
        content: "",
        status: "published",
        featured: false,
        publishedDate: "2024-03-05",
        createdAt: "2024-03-05",
        updatedAt: "2024-03-05",
      },
    ],
  };
}

export async function getPostBySlug(slug: string): Promise<any> {
  const posts = await getPosts();
  return posts.cpPosts.find((p) => p.slug === slug) || null;
}

export async function getFeaturedPost(): Promise<any> {
  const posts = await getPosts();
  return posts.cpPosts[0] || null;
}
