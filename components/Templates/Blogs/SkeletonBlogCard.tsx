import React from "react";
import { Skeleton } from "@nextui-org/react";

export default function BlogCard() {
  return (
    <div
      className={`border-l-2 col-span-4 md:col-span-2 lg:col-span-1 border-lightTitle dark:border-darkTitle px-2 gap-y-2 flex flex-col`}
    >
      <Skeleton className="h-[240px] w-full" />
      <Skeleton className="h-[25px] w-[150px] rounded-sm" />
      <div className="space-y-1">
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton className="h-[12px] rounded-sm" key={index} />
        ))}
      </div>
    </div>
  );
}