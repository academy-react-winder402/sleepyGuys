import { News } from "@/interfaces/news.interface";
import Image from "next/image";
import React from "react";

export default function NewsCard({ des, img, id, title }: News) {
  return (
    <div className="flex flex-col sm:flex-row-reverse p-6 gap-x-6 h-full bg-white dark:bg-dark-lighter">
      <Image src={img} alt="" className="h-auto sm:h-full w-full sm:w-auto" />
      <div className="pb-5 sm:pb-0 flex flex-col md:gap-4 lg:gap-5 gap-3">
        <h2 className="font-kalamehBlack text-[30px] md:text-[38px] text-lightTitle dark:text-darkTitle">
          {title}
        </h2>
        <p
          className="text-[16px] md:text-[18px] text-lightBody dark:text-darkBody"
          dir="rtl"
        >
          {des.length >= 120 ? des.slice(0, 120) + "...." : des + "...."}
        </p>
      </div>
    </div>
  );
}
