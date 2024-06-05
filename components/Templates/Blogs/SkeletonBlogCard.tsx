import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";
import Link from "next/link";
import { Skeleton } from "@nextui-org/react";

export default function BlogCard() {
  return (
    <div
      className={`border-l-2 col-span-4 md:col-span-2 lg:col-span-1 border-lightTitle dark:border-darkTitle px-2 gap-y-2 flex flex-col`}
    >
      <div>
      <Skeleton className="h-[240px] w-full" />
      </div>
      <div>
        <Skeleton className="text-lightTitle h-8 dark:text-darkTitle text-2xl font-kalamehBlack mb-1">
          
        </Skeleton>
        <Skeleton className="text-lightBody dark:text-darkBody h-20 font-peyda line-clamp-3">
          
        </Skeleton>
      </div>
    </div>
  );
}