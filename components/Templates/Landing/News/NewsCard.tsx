import { News } from "@/interfaces/news.interface";
import { validateImageAddress } from "@/utils/validateImageAdderss";
import Image from "next/image";
import React from "react";
import fallbackImage from '@/public/icons/hero/header-img.svg'

export default function NewsCard(data: News) {
  return (
    <div className="flex flex-col sm:flex-row-reverse p-6 gap-x-6 h-full bg-white dark:bg-dark-lighter">
      <Image src={validateImageAddress(data?.currentImageAddressTumb, fallbackImage)} width={400} height={400} alt="" className="h-auto sm:h-full w-full sm:w-auto" />
      <div className="pb-5 sm:pb-0 flex flex-col md:gap-4 lg:gap-5 gap-3">
        <h2 className="font-kalamehBlack text-[30px] md:text-[38px] text-lightTitle dark:text-darkTitle">
          {data?.title}
        </h2>
        <p
          className="text-[16px] md:text-[18px] text-lightBody dark:text-darkBody"
          dir="rtl"
        >
          {data?.miniDescribe}
        </p>
      </div>
    </div>
  );
}
