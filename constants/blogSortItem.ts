import { BlogSortItem } from "@/interfaces/blogSortItem.interface";

const blogSortItem: BlogSortItem[] = [
  { id: 1, name: "جدیدترین", query: "latest" },
  { id: 2, name: "پربازدیدترین", query: "bestView" },
  { id: 3, name: "قدیمیترین", query: "oldest" },
  { id: 4, name: "محبوبترین", query: "populare" },
];

export default blogSortItem;