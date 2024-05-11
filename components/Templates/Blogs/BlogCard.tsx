import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";
import Link from "next/link";

export default function BlogCard({ title, image, des }: Blog) {
  return (
    <div
      className={`border-l-2 col-span-4 md:col-span-2 lg:col-span-1 border-lightTitle dark:border-darkTitle px-2 gap-y-2 flex flex-col`}
    >
      <Link href={`/blogs/${title}`}>
      <Image src={image} alt="" priority={true} />
      </Link>
      <div>
        <h2 className="text-lightTitle dark:text-darkTitle text-2xl font-kalamehBlack mb-1">
          {title}
        </h2>
        <p className="text-lightBody dark:text-darkBody font-peyda line-clamp-3">
          {des}
        </p>
      </div>
    </div>
  );
}
