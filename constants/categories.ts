import pic from "@/public/icons/hero/header-img.svg";
import { Category } from "@/interfaces/category.interface";

const categoryItems: Category[] = [
  { id: 1, name: "فرانت اند", query: "frontend", icon: pic },
  { id: 2, name: "بک اند", query: "backend", icon: pic },
  { id: 3, name: "امنیت", query: "security", icon: pic },
  { id: 4, name: "مهارت های نرم", query: "soft-skills", icon: pic },
];

export default categoryItems;
