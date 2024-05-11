import React from "react";
import Image from "next/image";
import clock from "@/public/icons/courses/clock.svg";
import { Chip, Divider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Blog } from "@/interfaces/blog.interface";

function BlogOtherCard({ title, image, des }: Blog) {
  const router = useRouter();
  return (
    <div className="pt-[55px]" onClick={() => router.push(`/courses/${title}`)}>
      <div className="flex py-6 bg-white dark:bg-dark-lighter flex-col gap-4 rounded-3xl ">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="overflow-hidden rounded-[38px] w-[85%] -mt-20">
            <Image src={image} alt="" />
          </div>
          <div className="w-[85%] flex flex-col gap-4">
            <h2 className="text-[20px] font-peyda font-bold text-lightTitle dark:text-darkTitle">
              {title}
            </h2>
            <p className="text-[15px] font-vazir font-bold text-lightBody dark:text-darkBody line-clamp-2">
              {des}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default BlogOtherCard;
