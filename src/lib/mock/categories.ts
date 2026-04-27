import { CpCategoriesData } from "@/graphql/cms/queries/category";

export async function getCategories(): Promise<CpCategoriesData> {
  return {
    cpCategories: {
      list: [
        {
          _id: "1",
          clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
          name: "Эмчилгээ",
          slug: "emchilgee",
          status: "active",
          createdAt: "2024-01-01",
          updatedAt: "2024-01-01",
        },
        {
          _id: "2",
          clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
          name: "Зөвлөгөө",
          slug: "zuvluguu",
          status: "active",
          createdAt: "2024-01-01",
          updatedAt: "2024-01-01",
        },
      ],
      totalCount: 2,
      pageInfo: {
        totalCount: 2,
      },
    },
  };
}
