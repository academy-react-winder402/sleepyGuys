import MainButton from "@/components/Modules/Button/MainButton";
import Image from "next/image";
import React from "react";
import bgImg from "@/public/picturse/courses/courseDitale.jpg";

export default function CourseDetailsBox() {
  return (
    <div className="relative h-[300px] lg:h-[350px] lgb:h-[450px] mb-20 text-DarkBody rounded-3xl">
      <Image
        src={bgImg}
        className="absolute top-0 left-0 w-full h-full z-0 rounded-3xl"
        alt=""
      />
      <div className="flex w-full bg-gradient-to-r from-[rgba(0,0,0,0.2)] via-[#000] to-[#000] z-10 absolute top-0 left-0 h-full rounded-3xl">
        <div className="flex items-center h-full p-5 pr-8 w-full">
          <div className="flex flex-col gap-8 lgb:gap-16 w-full sm:w-4/7">
            <div className="flex flex-col gap-3">
              <h1 className="text-primary-lighter text-center sm:text-right text-[20px] md:text-[25px] lgb:text-[30px] xl:text-[34px] mb-1 font-bold font-peyda">
                آموزش تخصصی Redux مقدماتی تا پیشرفته
              </h1>
              <p className="text-lightBody dark:text-darkBody w-1/2 lg:w-full text-sm lgb:text-lg hidden sm:block">
                حدود 40 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت
                ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به
                صورت کاملا پروژه محور و کاربردی یاد میگیرید! ری اکت گل سرسبد
                فرانت اند محسوب میشود،اگر دوره
              </p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center sm:items-end w-full">
              <div>
                <MainButton
                  className="bg-primary text-btnText px-8 py-4 lgb:px-10 lgb:py-6 rounded-3x text-md"
                  content="خرید آنلاین دوره"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                <p className="text-lightBody lgb:text-xl text-lg line-through text-left">
                  2,300,000 تومان
                </p>
                <p className="text-darkTitle lgb:text-3xl text-2xl font-vazir">
                  920,000 تومان
                </p>
              </div>
            </div>
          </div>
          <div className="-translate-x-10 w-3/7 hidden lg:block">
            <Image src={bgImg} className="rounded-3xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
