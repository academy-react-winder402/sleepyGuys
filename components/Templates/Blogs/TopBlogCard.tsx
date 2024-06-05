import Image from "next/image";
import React from "react";
import { Blog } from "@/interfaces/blog.interface";
import Link from "next/link";

export default function TopBlogCard(data: any) {
  return (
    <div className="border-x-3 border-lightTitle dark:border-darkTitle px-2 relative overflow-hidden col-span-4 h-[400px]">
      <Link href={`/blogs/${data.title}`}>
      <Image src={data.currentImageAddressTumb} width={1000} height={400} alt=""  className="absolute w-full -top-[30%] lg:-top-[50%] left-0 z-0"/>
      </Link>
      
      <div className="absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="z-10 w-full absolute top-0 left-0 flex flex-col items-center justify-center h-full p-5">
        <h2 className="text-darkTitle text-2xl font-kalamehBlack mb-1">
          {data.title}
        </h2>
        <p className="text-darkBody font-peyda">
        سلام این یه تکست کاملا رندوم برای پر کردن این قسمته داداش من میدونم قراره اول بشیم میترکونیم! ….

        </p>
      </div>
    </div>
  );
}


