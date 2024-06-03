import { Category } from "@/interfaces/category.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import fallbackImage from "@/public/icons/hero/header-img.svg";
import { validateImageAddress } from "@/utils/validateImageAdderss";

function CategoryCard({ id, techName, iconAddress }: Category) {
  const router = useRouter();

  return (
    <div
      className="p-2 md:p-3 bg-white dark:bg-dark-lighter rounded-3xl flex flex-col gap-3 items-center w-[45%] md:w-[30%] lg:w-[20%]"
      onClick={() => router.push({
        pathname: "/courses", query: {
          ListTech: id
        }
      })}
    >
      <Image src={validateImageAddress(iconAddress, fallbackImage)} alt={""} />
      <h2 className="text-lightTitle dark:text-darkTitle font-vazir">{techName}</h2>
    </div>
  );
}

export default CategoryCard;
