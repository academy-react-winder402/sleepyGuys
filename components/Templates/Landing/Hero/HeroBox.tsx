import Image from "next/image";
import React from "react";
import heroImage from "@/public/icons/hero/header-img.svg";
import search from "@/public/icons/hero/search.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewsLetterFormType } from "@/types/newsLetterForm";
import PrimaryInput from '@/components/Modules/Input/PrimaryInput';

function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsLetterFormType>();

  const submitFormHandler: SubmitHandler<NewsLetterFormType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-full md:w-2/5 flex flex-col gap-8">
          <div className="flex flex-col gap-2 justify-center text-center md:text-right">
            <h1 className="text-primary dark:text-primary-lighter text-3xl lgl:text-4xl lg:text-[41px] xl:text-[43px] mb-1 font-bold font-peyda">
              دنبال چی می گردی؟
            </h1>
            <p className="text-lightBody dark:text-darkBody text-lg">
              دیگه وقتشه یه تکونی به خودت بدی…
            </p>
            <div className="lg:ml-16 relative">
              <form
                onSubmit={handleSubmit(submitFormHandler)}
              >
                <PrimaryInput
                  placeholder="ایمیلت رو برامون بنویس..."
                  variant="faded"
                  className="font-peyda w-full"
                  register={{
                    ...register("email", {
                      required: true,
                    }),
                  }}
                />
              </form>
              <Image
                className="absolute left-[10px] top-[10px] rounded-[18px] cursor-pointer"
                src={search}
                width={48}
                height={48}
                alt=""
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2 justify-center text-center md:text-right">
            <h1 className="text-secondary dark:text-secondary text-1x2 lg:text-[30px] font-bold font-peyda">
              آکادمی سپهر
            </h1>
            <p className="text-lightBody dark:text-darkBodytext-[16px]">
              آکادمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد
              نیزار برای طراحی وب با بهترین روش یاد بگیری{" "}
            </p>
          </div>
        </div>
        <div className="w-3/5 hidden md:block">
          <Image
            alt=""
            className="xl:-translate-x-10 lg:-translate-x-5 -translate-x-3"
            src={heroImage}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
