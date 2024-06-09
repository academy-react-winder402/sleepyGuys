import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Blog } from "@/interfaces/blog.interface";
import { validateImageAddress } from "@/utils/validateImageAdderss";
import fallbackImage from "@/public/pictures/blog/blogImage.jpg"

function BlogOtherCard(data: any) {
  const router = useRouter();
  return (
    <div className="pt-[55px]" onClick={() => router.push(`/blogs/${data.data?.id}`)}>
      <div className="flex py-6 bg-white dark:bg-dark-lighter flex-col gap-4 rounded-3xl ">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="overflow-hidden rounded-[38px] w-[85%] -mt-20">
            <Image src={validateImageAddress(data.data?.addUserProfileImage, fallbackImage)} width={400} height={400} alt="" />
          </div>
          <div className="w-[85%] flex flex-col gap-4">
            <h2 className="text-[20px] overflow-hidden font-peyda font-bold text-lightTitle dark:text-darkTitle">
              {data.data?.title}
            </h2>
            <p className="text-[15px] font-vazir font-bold text-lightBody dark:text-darkBody line-clamp-2">
              {data.data?.miniDescribe}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BlogOtherCard;
