import { Category } from "@/interfaces/category.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function CategoryCard({ name, href, icon }: Category) {
  const router = useRouter();

  return (
    <div
      className="p-2 md:p-3 bg-white-100 dark:bg-dark-lighter rounded-3xl flex flex-col gap-3 items-center"
      onClick={() => router.push(href)}
    >
      <Image src={icon} alt={""} />
      <h2 className="text-LightTitle dark:text-white-300 font-vazir">{name}</h2>
    </div>
  );
}

export default CategoryCard;
