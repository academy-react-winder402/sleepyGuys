import React from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { loginFormType } from "@/interfaces/loginForm.interface";
import Link from "next/link";
import MainButton from "@/components/Modules/Button/MainButton";

export default function LoginBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormType>();

  const submitFormHandler: SubmitHandler<loginFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <AuthenticationCard image={loginImage}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-lightTitle-lighter dark:text-darkTitle text-[22px] md:text-[24px] font-peyda">
              ورود با موبایل
            </p>
            <p className="text-lightBody dark:text-darkBody font-peyda flex gap-x-1 text-lg">
              <span>حساب کاربری ندارید؟</span>
              <Link
                href={"/register"}
                className="text-primary dark:text-primary-lighter"
              >
                ثبت نام کنید.
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submitFormHandler)}
            className="flex flex-col gap-5"
          >
            <PrimaryInput
              placeholder="شماره موبایل"
              variant="faded"
              className="font-peyda"
              type="number"
              register={{
                ...register("phone", {
                  required: "شماره موبایلت رو نمیتونی خالی بذاری",
                  pattern: {
                    value:
                      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
                    message: "شماره موبایلت که نوشتی درست نیست",
                  },
                }),
              }}
              errorMessage={errors.phone && errors.phone.message}
            />
            <MainButton
              className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
              type="submit"
              content={<p>ادامه</p>}
            />
          </form>
          <div className="flex justify-between w-full text-[16px]">
            <p className="text-lightBody dark:text-darkBody">ورود با ایمیل</p>
            <p className="text-lightBody dark:text-darkBody underline">
              حریم خصوصی
            </p>
          </div>
        </div>
      </AuthenticationCard>
    </div>
  );
}
