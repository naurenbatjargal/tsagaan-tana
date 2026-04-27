import { CpMenusData } from "@/graphql/cms/queries/menu";

export async function getHeaderMenu(): Promise<CpMenusData> {
  return {
    cpMenus: [
      {
        _id: "1",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Нүүр",
        url: "/",
        order: 1,
        kind: "header",
      },
      {
        _id: "2",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Бидний тухай",
        url: "/about",
        order: 2,
        kind: "header",
      },
      {
        _id: "3",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Үйлчилгээ",
        url: "/services",
        order: 3,
        kind: "header",
      },
      {
        _id: "4",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Мэдээ",
        url: "/blog",
        order: 4,
        kind: "header",
      },
      {
        _id: "5",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Холбоо барих",
        url: "/contact",
        order: 5,
        kind: "header",
      },
    ],
  };
}

export async function getFooterMenu(): Promise<CpMenusData> {
  return {
    cpMenus: [
      {
        _id: "6",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Нүүр",
        url: "/",
        order: 1,
        kind: "footer",
      },
      {
        _id: "7",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Бидний тухай",
        url: "/about",
        order: 2,
        kind: "footer",
      },
      {
        _id: "8",
        clientPortalId: "6NtI5Ucmyp_F__S5mIi6b",
        label: "Холбоо барих",
        url: "/contact",
        order: 3,
        kind: "footer",
      },
    ],
  };
}
