import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";
import Link from "next/link";
import { Skeleton } from "@nextui-org/react";

export default function TopBlogCard() {
  return (
    <div className="border-x-3 border-lightTitle dark:border-darkTitle px-2 relative overflow-hidden col-span-4 h-[400px]">
      <div>
      <Skeleton  className="absolute w-full h-[400px] -top-[30%] lg:-top-[50%] left-0 z-0"/>
      </div>
      
      <div className="absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="z-10 w-full absolute top-0 left-0 flex flex-col items-center justify-center h-full p-5">
        <Skeleton className="text-darkTitle text-2xl h-full font-kalamehBlack mb-1">
          
        </Skeleton>
        <Skeleton className="text-darkBody h-20 font-peyda"></Skeleton>
      </div>
    </div>
  );
}