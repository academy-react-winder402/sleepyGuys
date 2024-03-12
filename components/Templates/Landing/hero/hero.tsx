import Image from "next/image";
import React from "react";
import heroImage from "@/public/icons/hero/headr-img.svg";
import search from "@/public/icons/hero/search.svg";
import HeroInput from "@/components/Templates/Landing/Hero/Input/HeroInput";

function Hero() {
  return (
    <div className="flex items-center">
      <div className="w-full md:w-2/5 flex flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center text-center md:text-right">
          <h1 className="text-primary dark:text-primary-lighter text-3xl lg:text-4xl font-bold peyda">
            دنبال چی می گردی؟
          </h1>
          <p className="text-black-600 dark:text-black-800 text-lg">
            دیگه وقتشه یه تکونی به خودت بدی…
          </p>
          <div className="lg:ml-16 rounded-[20px] border-[1px] border-solid border-primary dark:border-[1px] dark:border-primary-lighter relative">
            <HeroInput />
            <Image
              className="absolute left-1 top-1 rounded-[18px]"
              src={search}
              width={48}
              height={48}
              alt=""
            />
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-2 justify-center text-center md:text-right">
          <h1 className="text-orange-100 dark:text-orange-100 text-1x2 lg:text-[30px] font-bold peyda">
            آکادمی سپهر
          </h1>
          <p className="text-black-600 dark:text-black-800 text-[16px]">
            آکادمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد
            نیزار برای طراحی وب با بهترین روش یاد بگیری{" "}
          </p>
        </div>
      </div>
      <div className="w-3/5 md:block hidden ">
        <Image
          alt=""
          className="-translate-x-6"
          src={heroImage}
          style={{
            width: "auto",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
