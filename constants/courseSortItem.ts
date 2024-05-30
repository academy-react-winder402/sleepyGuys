import { CourseSortItem } from "@/interfaces/courseSortItem.interface";

const courseSortItem: CourseSortItem[] = [
  { id: 1, name: "جدیدترین", query: "latest" },
  { id: 2, name: "پرفروشترین", query: "bestSelling" },
  { id: 3, name: "گران ترین", query: "ASC" },
  { id: 4, name: "ارزانترین", query: "DESC" },
];

export default courseSortItem;
