import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";
import Link from "next/link";
import { validateImageAddress } from "@/utils/validateImageAdderss";
import fallbackImage from "@/public/pictures/blog/blogImage.jpg"

export default function BlogCard({ title, id, currentImageAddressTumb, miniDescribe }: Blog) {
  return (
    <div
      className={`border-l-2 col-span-4 md:col-span-2 lg:col-span-1 border-lightTitle dark:border-darkTitle px-2 gap-y-2 flex flex-col`}
    >
      <Link href={`/blogs/${id}`}>
        <Image src={validateImageAddress(currentImageAddressTumb, fallbackImage)} width={400} height={400} alt="" priority={true} />
      </Link>
      <div>
        <h2 className="text-lightTitle overflow-hidden dark:text-darkTitle text-2xl font-kalamehBlack mb-1">
          {title}
        </h2>
        <p className="text-lightBody dark:text-darkBody font-peyda line-clamp-3">
          {miniDescribe}
        </p>
      </div>
    </div>
  );
}
