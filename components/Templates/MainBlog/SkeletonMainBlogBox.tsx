import React from "react";
import { getBlogs } from "@/mock/getBlogs";
import BlogOtherCard from "./BlogOtherCard/BlogOtherCard";
import { Skeleton } from "@nextui-org/react";

export default function MainBlogBox({ data, comments, isLoding }: any) {
  console.log(data, comments);
  return (
    <>
      {!isLoding ? (
        <>
          <div className="pt-10 lg:mr-20 relative">
            <Skeleton className="absolute flex justify-center items-center p-5 rounded-b-xl h-[50px] w-20 text-lightTitle dark:text-darkTitle -bottom-[50px] left-20 bg-[#ccc] dark:bg-dark-darker">
            
            </Skeleton>
            <h2 className="flex items-center pb-5 font-peyda text-[30px] text-lightTitle dark:text-darkTitle">
              <div className="w-[38%] hidden lg:block"></div>
              <Skeleton className="pr-2 font-peyda w-full h-10 flex justify-center lg:justify-start">
                
              </Skeleton>
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 bg-white dark:bg-dark-lighter rounded-[50px]">
              <div className="relative w-full h-[380px] md:h-[600px] lg:h-auto lg:w-[30%] md:mb-[110px] lg:mb-0 py-20 mb-12 lg:py-0 flex justify-center">
                <div className=" w-[340px] md:w-[600px] h-auto lgb:h-[310px] lg:h-[280px] lg:w-[280px] xlb:w-[400px] lgb:w-[350px] relative">
                  <div className="bg-[#ccc] dark:bg-dark-darker w-full absolute lg:-top-10 lg:-right-10 lgb:-top-20 lgb:-right-12 h-[340px] md:h-[600px] lg:h-[280px] lgb:h-[310px] xlb:h-[380px] rounded-3xl lgb:rounded-[38px] rotate-6 md:rotate-12"></div>
                  <Skeleton
                    className="w-full h-[200px] rounded-3xl lgb:rounded-[38px] absolute lg:-top-10 lg:-right-10 lgb:-top-20 lgb:-right-10"
                  />
                </div>
              </div>
              <div className="lg:w-[70%] w-full">
                <Skeleton className="w-full h-[400px]" />
              </div>
            </div>
          </div>
          <div className="text-lightTitle dark:text-darkTitle text-[30px] font-peyda mb-10 mt-40">
            اخبار مشابه
          </div>
          {/* <div className="gap-5 grid lgb:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {getBlogs()
              .slice(0, 4)
              .map((blog, index) => (
                <BlogOtherCard {...blog} key={index} />
              ))}
          </div> */}
          {/* <BlogComments data={getComments()} /> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
}