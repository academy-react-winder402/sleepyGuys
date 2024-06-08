import React from "react";
import { Skeleton } from "@nextui-org/react";

export default function TopBlogCard() {
  return (
    <div className="border-x-3 border-lightTitle dark:border-darkTitle px-2 relative col-span-4 h-[400px]">
      <div className="absolute w-full h-full top-0 left-0 z-0 bg-mainBodyBg dark:bg-dark"></div>
      <div className="z-50 w-full absolute top-0 left-0 flex flex-col items-center justify-center h-full p-5">
        <Skeleton className="h-[40px] w-[400px] rounded-sm mb-4" />
        <div className="space-y-1">
          {Array.from({ length: 2 }, (_, index) => (
            <Skeleton className="h-[15px] rounded-sm w-[700px]" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}