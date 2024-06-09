import React from "react";
import { Skeleton } from "@nextui-org/react";

export default function SkeletonMainBlogDetails() {
  return (
    <div className="pt-10 lg:mr-20 relative">
      <Skeleton className="absolute h-[50px] w-[200px] rounded-br-3xl rounded-bl-3xl -bottom-[50px] left-20 " />
      <div className="w-[38%] hidden lg:block"></div>
      <Skeleton className="mx-auto lg:mr-[350px] mb-4 w-[250px] h-[40px] rounded-md" />
      <div className="flex flex-col lg:flex-row gap-6 bg-white dark:bg-dark-lighter rounded-[50px]">
        <div className="relative w-full h-[380px] md:h-[600px] lg:h-auto lg:w-[30%] md:mb-[110px] lg:mb-0 py-20 mb-12 lg:py-0 flex justify-center">
          <div className=" w-[340px] md:w-[600px] h-auto lgb:h-[310px] lg:h-[280px] lg:w-[280px] xlb:w-[400px] lgb:w-[350px] relative">
            <div className="bg-[#ccc] dark:bg-dark-darker w-full absolute lg:-top-10 lg:-right-10 lgb:-top-20 lgb:-right-12 h-[340px] md:h-[600px] lg:h-[280px] lgb:h-[310px] xlb:h-[380px] rounded-3xl lgb:rounded-[38px] rotate-6 md:rotate-12"></div>
            <Skeleton
              className="w-full h-[330px] md:h-[600px] lg:h-[300px] xl:h-[350px] rounded-3xl absolute lg:-top-10 lg:-right-10 lgb:-top-20 lgb:-right-10"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] ml-8 mt-8 space-y-2 mb-8">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton className="w-[70%] mx-auto lg:mx-0 lg:w-full h-[25px] rounded-md" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}