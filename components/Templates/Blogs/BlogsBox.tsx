import { Divider } from "@nextui-org/react";
import React from "react";
import BlogCard from "./BlogCard";
import TopBlogCard from "./TopBlogCard";
import { getBlogs } from "@/mock/getBlogs";
import StandardPagination from "@/components/Modules/Pagination/StandardPagination";

export default function BlogsBox() {
  return (
    <>
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
          {getBlogs()
            .slice(0, 4)
            .map((blog, index) => (
              <BlogCard {...blog} key={index} />
            ))}
          {getBlogs()
            .slice(4, 5)
            .map((blog, index) => (
              <TopBlogCard {...blog} key={index} />
            ))}
          {getBlogs()
            .slice(5, 9)
            .map((blog, index) => (
              <BlogCard {...blog} key={index} />
            ))}
          <StandardPagination />
        </div>
      </div>
    </>
  );
}
