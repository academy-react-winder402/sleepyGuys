import Image from "next/image";
import React from "react";
import heroImage from "@/public/icons/hero/header-img.svg";
import search from "@/public/icons/hero/search.svg";
import HeroInput from "@/components/Templates/Landing/HeroBox/Input/HeroInput";

function Hero() {
  return (
    <>
      <div
        className="
      hidden 
      md:block
      dark:bg-[#252a37]
      bg-[#f9f9fa]
      md:w-[570px]
      md:h-[570px]
      lg:w-[600px]
      lg:h-[600px]
      xl:w-[650px]
      xl:h-[680px]
      absolute 
      top-0 
      -right-10 
      -z-10 
      rotate-45 
      md:rounded-tl-[260px]
      lg:rounded-tl-[260px] 
      xl:rounded-tl-[320px] 
      md:rounded-tr-[200px]
      lg:rounded-tr-[120px] 
      xl:rounded-tr-[180px] 
      md:rounded-bl-[200px]
      lg:rounded-bl-[150px] 
      xl:rounded-bl-[180px] 
      md:rounded-br-[260px]
      lg:rounded-br-[200px] 
      xl:rounded-br-[200px]"
      ></div>
      <div className="flex items-center justify-between">
        <div className="w-full md:w-2/5 flex flex-col gap-8">
          <div className="flex flex-col gap-2 justify-center text-center md:text-right">
            <h1 className="text-primary dark:text-primary-lighter text-3xl lg:text-4xl font-bold font-peyda">
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
            <h1 className="text-orange-100 dark:text-orange-100 text-1x2 lg:text-[30px] font-bold font-peyda">
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
    </>
  );
}

export default Hero;
