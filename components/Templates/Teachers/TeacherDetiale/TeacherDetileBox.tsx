import MainButton from "@/components/Modules/Button/MainButton";
import Image from "next/image";
import React from "react";
import bgImg from "@/public/pictures/teachers/arian.webp";

function TeacherDetileBox() {
  return (
    <div className="relative mt-20 h-[300px] lg:h-[750px] lgb:h-[950px] mb-20 text-DarkBody rounded-3xl">
      <div className="absolute overflow-hidden top-0 left-0 w-full h-full z-0 rounded-3xl">
        <Image
          src={bgImg}
          className="absolute top-0 left-0 w-full z-0 rounded-3xl"
          alt=""
        />
      </div>
      <div className="flex w-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.9)] to-[#000] lg:from-[rgba(0,0,0,0.2)] lg:via-[rgba(0,0,0,0.92)] lg:to-[#000] z-10 absolute top-0 left-0 h-full rounded-3xl">
        <div className="flex justify-between h-full p-5 pr-8 w-full">
          <div className="flex flex-col gap-4 w-full sm:w-[50%]">
            <div className="flex flex-col gap-3 py-10">
              <h1 className="text-center sm:text-right text-white text-[20px] md:text-[25px] lgb:text-[30px] xl:text-[34px] mb-1 font-bold font-peyda">
                مایکل آقایی
              </h1>
              <p className="text-darkTitle w-full text-sm lgb:text-lg hidden sm:block">
                علی رضایی هستم چند ساله مشغول برنامه نویسی هستم با استفاده از
                asp.net core چندین پروژه کار کردم به js و دیتابیس و دیتا علاقه
                زیادی دارم و عاشق تدریسم
              </p>
            </div>
            <div>
              <MainButton
                className="bg-primary dark:bg-primary-darker text-btnText px-8 py-4 lgb:px-10 lgb:py-6 rounded-3x text-md"
                content={<p>خرید آنلاین دوره</p>}
              />
            </div>
          </div>
          <div className="lg:-translate-y-20 lg:translate-x-10 w-[40%] rounded-3xl overflow-hidden block">
            <Image src={bgImg} className="w-full rounded-3xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetileBox;
