import { CpPagesData, CpPageListData } from "@/graphql/cms/queries/page";

export async function getPages(): Promise<CpPagesData> {
  return {
    cpPages: [
      {
        _id: "1",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        name: "Нүүр",
        slug: "home",
        description: "Нүүр хуудас",
        content: "",
        status: "published",
        type: "page",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      {
        _id: "2",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        name: "Бидний тухай",
        slug: "about",
        description: "Бидний тухай",
        content: "",
        status: "published",
        type: "page",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      {
        _id: "3",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        name: "Үйлчилгээ",
        slug: "services",
        description: "Үйлчилгээ",
        content: "",
        status: "published",
        type: "page",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      {
        _id: "4",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        name: "Мэдээ",
        slug: "blog",
        description: "Мэдээ",
        content: "",
        status: "published",
        type: "page",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      {
        _id: "5",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        name: "Холбоо барих",
        slug: "contact",
        description: "Холбоо барих",
        content: "",
        status: "published",
        type: "page",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
    ],
  };
}

export async function getPageBySlug(slug: string): Promise<CpPageListData | null> {
  const pages = await getPages();
  const page = pages.cpPages.find((p) => p.slug === slug);
  if (!page) return null;
  return {
    cpPageList: {
      pages: [page],
      totalCount: 1,
      pageInfo: {
        totalCount: 1,
      },
    },
  };
}
