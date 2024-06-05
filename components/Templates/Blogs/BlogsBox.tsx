import { Divider } from "@nextui-org/react";
import React from "react";
import BlogCard from "./BlogCard";
import TopBlogCard from "./TopBlogCard";
import { getBlogs } from "@/mock/getBlogs";
import StandardPagination from "@/components/Modules/Pagination/StandardPagination";
import { Blog } from "@/interfaces/blog.interface.interface";
import SkeletonBlogCard from "@/components/Templates/Blogs/SkeletonBlogCard";
import SkeletonTopBlogCard from "@/components/Templates/Blogs/SkeletonTopBlogCard";

interface BlogsBoxProps {
  data: Blog[];
  isLoading: boolean;
  totalCount: number;
}

export default function BlogsBox({
  data,
  isLoading,
  totalCount
}: BlogsBoxProps) {
  console.log(data);
  return (
    <>
      {!isLoading ? (
        <div className="mt-6 flex flex-col gap-10">
          <div className="flex flex-col mt-5">
            <div className="flex justify-between items-center text-lightBody dark:text-darkBody">
              <p className="font-peyda">خبرنامه سپهر</p>
              <p className="font-peyda">پنجشنبه ۱۹ تیر</p>
            </div>
            <div className="flex items-center">
              <Divider className="w-[35%] md:w-[40%] h-[3px] rounded-md bg-lightTitle dark:bg-darkTitle" />
              <h1 className="w-[30%] md:w-[20%] text-center font-kalamehBlack text-lightTitle dark:text-darkTitle text-2xl md:text-3xl lg:text-4xl">
                روزنامه سپهر
              </h1>
              <Divider className="w-[35%] md:w-[40%] h-[3px] bg-lightTitle dark:bg-darkTitle" />
            </div>
          </div>
          <div className="grid grid-cols-4 bg-white dark:bg-dark-lighter gap-3 lg:gap-4 lgb:gap-8 p-10 lg:[&>*:nth-child(odd)]:flex-col-reverse">
            {data?.map((blog) => (
              <BlogCard {...blog} key={blog.id} />
            ))}
            {data?.slice(4, 5).map((blog) => (
              <TopBlogCard {...blog} key={blog.id} />
            ))}
            {data?.slice(5, 9).map((blog) => (
              <BlogCard {...blog} key={blog.id} />
            ))}
            <StandardPagination totalCount={totalCount}/>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-10">
          <div className="flex flex-col mt-5">
            <div className="flex justify-between items-center text-lightBody dark:text-darkBody">
              <p className="font-peyda">خبرنامه سپهر</p>
              <p className="font-peyda">پنجشنبه ۱۹ تیر</p>
            </div>
            <div className="flex items-center">
              <Divider className="w-[35%] md:w-[40%] h-[3px] rounded-md bg-lightTitle dark:bg-darkTitle" />
              <h1 className="w-[30%] md:w-[20%] text-center font-kalamehBlack text-lightTitle dark:text-darkTitle text-2xl md:text-3xl lg:text-4xl">
                روزنامه سپهر
              </h1>
              <Divider className="w-[35%] md:w-[40%] h-[3px] bg-lightTitle dark:bg-darkTitle" />
            </div>
          </div>
          <div className="grid grid-cols-4 bg-white dark:bg-dark-lighter gap-3 lg:gap-4 lgb:gap-8 p-10 lg:[&>*:nth-child(odd)]:flex-col-reverse">
            {data?.slice(0, 4).map((blog , index) => (
              <SkeletonBlogCard key={index}/>
            ))}
            {data?.slice(4, 5).map((blog , index) => (
              <SkeletonTopBlogCard key={index}/>
            ))}
            {data?.slice(5, 9).map((blog , index) => (
              <SkeletonBlogCard key={index}/>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
