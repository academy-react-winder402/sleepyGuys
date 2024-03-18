import { News } from "@/interfaces/news.interface";
import Image from "next/image";
import React from "react";

export default function NewsCard({ des , img , id , title}: News) {
  return (
    <div className="flex flex-col sm:flex-row-reverse p-6 gap-x-6 sm:h-full bg-white-100 dark:bg-opacity-5">
      <Image
        src={img}
        alt=""
        className="h-auto sm:h-full w-full sm:w-auto"
      />
      <div className="pb-5 sm:pb-0 flex flex-col md:gap-4 lg:gap-5 gap-3">
        <h2 className="font-kalamehBlack text-[35px] md:text-[38px] text-gray dark:text-white-100">{title}</h2>
        <p className="text-[18px] dark:text-white-300 text-[#8D8D8D] lg:block hidden">{des} ....</p>
        <p className="text-[18px] dark:text-white-300 text-[#8D8D8D] lg:hidden block">{des.substr(0, 120)} ....</p>
      </div>
    </div>
  );
}
