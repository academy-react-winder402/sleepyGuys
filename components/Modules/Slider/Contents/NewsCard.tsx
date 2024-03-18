import { News } from "@/interfaces/news.interface";
import Image from "next/image";
import React from "react";

export default function NewsCard({ des , img , id , title}: News) {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center gap-x-6">
      <Image
        src={img}
        alt=""
        width={300}
        height={300}
        className="w-[200px] sm:w-[220px] md:w-[250px] lg:w-[337px]"
      />
      <div className="text-right w-3/4 sm:w-1/2 pb-5 sm:pb-0">
        <h2 className="font-kalamehBlack text-[50px] text-gray">{title}</h2>
        <p className="font-vazir text-[18px] text-[#8D8D8D]">{des}</p>
      </div>
    </div>
  );
}
