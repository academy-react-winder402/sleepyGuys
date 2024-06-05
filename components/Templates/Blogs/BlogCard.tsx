import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";
import Link from "next/link";

export default function BlogCard(data: any) {
  return (
    <div
      className={`border-l-2 col-span-4 md:col-span-2 lg:col-span-1 border-lightTitle dark:border-darkTitle px-2 gap-y-2 flex flex-col`}
    >
      <Link href={`/blogs/${data.id}`}>
      <Image src={data.currentImageAddressTumb} width={400} height={400} alt="" priority={true} />
      </Link>
      <div>
        <h2 className="text-lightTitle overflow-hidden dark:text-darkTitle text-2xl font-kalamehBlack mb-1">
          {data.title}
        </h2>
        <p className="text-lightBody dark:text-darkBody font-peyda line-clamp-3">
        سلام این یه تکست کاملا رندوم برای پر کردن این قسمته داداش من میدونم قراره اول بشیم میترکونیم! ….
        </p>
      </div>
    </div>
  );
}
