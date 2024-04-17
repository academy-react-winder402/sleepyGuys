import { Category } from "@/interfaces/category.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function CategoryCard({ name, query, icon }: Category) {
  const router = useRouter();

  return (
    <div
      className="p-2 md:p-3 bg-white dark:bg-dark-lighter rounded-3xl flex flex-col gap-3 items-center"
      onClick={() => router.push(`/courses?${query}=true`)}
    >
      <Image src={icon} alt={""} />
      <h2 className="text-lightTitle dark:text-darkTitle font-vazir">{name}</h2>
    </div>
  );
}

export default CategoryCard;
