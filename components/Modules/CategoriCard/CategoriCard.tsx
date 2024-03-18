import { Category } from "@/interfaces/category.interface";
import Image from "next/image";
import React from "react";

function CategoriCard({ id, name, href, icon }: Category) {
  return (
    <div className="p-3 bg-white-100 dark:bg-opacity-5 rounded-3xl flex flex-col gap-3 items-center">
      <Image src={icon} alt={""} />
      <h2 className='text-black-400 dark:text-white-300'>{name}</h2>
    </div>
  );
}

export default CategoriCard;
