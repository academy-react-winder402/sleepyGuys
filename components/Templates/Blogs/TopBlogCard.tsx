import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";

export default function BlogCard({ title, image, des }: Blog) {
  return (
    <div className="border-l-3 border-lightTitle dark:border-darkTitle px-2 relative overflow-hidden col-span-4 h-[400px]">
      <Image src={image} alt=""  className="absolute w-full -top-[30%] lg:-top-[50%] left-0 z-0"/>
      <div className="absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="z-10 w-full absolute top-0 left-0 flex flex-col items-center justify-center h-full p-5">
        <h2 className="text-darkTitle text-2xl font-kalamehBlack mb-1">{title}</h2>
        <p className="text-darkBody font-peyda">
          {des}
        </p>
      </div>
    </div>
  );
}
