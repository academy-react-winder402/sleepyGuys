import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";

export default function BlogCard({ title, image, des }: Blog) {
  return (
    <div className="border-l-3 col-span-4 md:col-span-2 lg:col-span-1 border-lightTitle dark:border-darkTitle px-2">
      <Image src={image} alt="" />
      <div>
        <h2 className="text-lightTitle dark:text-darkTitle text-2xl font-kalamehBlack mb-1">{title}</h2>
        <p className="text-lightBody dark:text-darkBody font-peyda">
          {des}
        </p>
      </div>
    </div>
  );
}
