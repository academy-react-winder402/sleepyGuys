import { News } from "@/interfaces/news.interface";
import { validateImageAddress } from "@/utils/validateImageAdderss";
import Image from "next/image";
import React from "react";
import fallbackImage from '@/public/icons/hero/header-img.svg'
import { Skeleton } from "@nextui-org/react";

export default function SkeletonNewsCard(data: News) {
  return (
    <div className="flex w-full flex-col sm:flex-row-reverse p-6 gap-x-6 h-full bg-white dark:bg-dark-lighter">
      <Skeleton  className="rounded-xl w-[270px] h-full" />
      <div className="pb-5 w-full sm:pb-0 flex flex-col md:gap-4 lg:gap-5 gap-3">
        <Skeleton className="font-kalamehBlack text-[30px] rounded-full md:text-[38px] text-lightTitle dark:text-darkTitle">
          <div className="p-[16px] w-[150px]"></div>
        </Skeleton>
        <Skeleton
          className="text-[16px] rounded-full md:text-[18px] text-lightBody dark:text-darkBody"
          dir="rtl"
        >
            <div className="w-80 p-[10px]"></div>
        </Skeleton>
        <Skeleton
          className="text-[16px] rounded-full md:text-[18px] text-lightBody dark:text-darkBody"
          dir="rtl"
        >
            <div className="w-80 p-[10px] rounded-full"></div>
        </Skeleton>
        <Skeleton
          className="text-[16px] rounded-full md:text-[18px] text-lightBody dark:text-darkBody"
          dir="rtl"
        >
            <div className="w-80 p-[10px] rounded-full"></div>
        </Skeleton>
      </div>
    </div>
  );
}