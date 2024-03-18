import React from "react";
import Image from "next/image";
import { Course } from "@/interfaces/course.interface";
import clock from "@/public/icons/courses/clock.svg";
function CourseCard({ title, id, image, des, time, teachers, price }: Course) {
  return (
    <div className="pt-[55px]">
      <div className="flex py-6 bg-white-100 flex-col gap-4 w-[100%] md:w-[350px] mdb:w-[400px] lgl:w-[425px] lg:w-[280px] lgb:w-[325px] xl:w-[360px] xlb:w-[380px] xll:w-[420px] rounded-3xl dark:bg-opacity-5">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="overflow-hidden rounded-3xl w-[85%] md:w-[300px] mdb:w-[350px] lg:w-[260px] lgb:w-[290px] xll:w-[380px] xl:w-[340px] -mt-20">
            <Image src={image} alt="" style={{ width: "100%" }} />
          </div>
          <div className= "w-[85%] md:w-[300px] mdb:w-[350px] lg:w-[260px] lgb:w-[290px] xl:w-[340px] xll:w-[380px] flex flex-col gap-4">
            <h2 className="text-[20px] font-peyda font-bold text-black-400 dark:text-white-100">
              {title}
            </h2>
            <p className="text-[15px] font-vazir font-bold text-black-600 dark:text-black-800">
              {des.substr(0, 85)} ....
            </p>
            <div className="flex gap-1 items-center py-1">
              <span className="h-2 w-3 bg-primary dark:bg-primary-lighter rounded-full"></span>
              <p className="text-[13px] font-vazir font-bold text-primary dark:text-primary-lighter">
                {teachers}
              </p>
            </div>
          </div>
          <div className="bg-black-800 w-[85%] md:w-[300px] mdb:w-[350px] lg:w-[260px] lgb:w-[290px] xl:w-[340px] xll:w-[380px] m-2 dark:bg-black-800 h-[1px]"></div>
          <div className="flex justify-between w-[85%] md:w-[300px] mdb:w-[350px] lg:w-[260px] lgb:w-[290px] xl:w-[340px] xll:w-[380px]">
            <span className="flex items-center gap-2 bg-black-800 dark:bg-white-100 dark:bg-opacity-10 px-2 py-1 rounded-xl">
              <span>
                <Image
                  className="scale-95"
                  src={clock}
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
              <p className="text-white-100 text-sm">{time}</p>
            </span>
            <p className="text-xl text-primary dark:text-primary-lighter">
              {price === 0 ? "رایگان!" : `${price} تومان`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
