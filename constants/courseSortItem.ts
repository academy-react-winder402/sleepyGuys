
import { CourseSortItem } from "@/interfaces/courseSortItem.interface";

const courseSortItem: CourseSortItem[] = [
  { id: 1, name: "جدیدترین", href: "/courses#latest"},
  { id: 2, name: "پرفروشترین", href: "/courses#bestSelling"},
  { id: 3, name: "گران ترین", href: "/courses#expensive"},
  { id: 4, name: "ارزانترین", href: "/courses#cheap"},
];

export default courseSortItem;