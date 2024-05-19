import React from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import Link from "next/link";
import LoginForm from "./LoginForm/LoginForm";

export default function LoginBox() {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <AuthenticationCard image={loginImage}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-lightTitle-lighter dark:text-darkTitle text-[22px] md:text-[24px] font-peyda">
              ورود با موبایل
            </p>
            <p className="text-lightBody dark:text-darkBody font-peyda flex gap-x-1 mt-1.5 text-lg">
              حساب کاربری ندارید؟{" "}
              <Link
                href={"/register"}
                className="text-primary dark:text-primary-lighter"
              >
                ثبت نام کنید.
              </Link>
            </p>
          </div>
          <div>
            <LoginForm />
          </div>
          <p className="text-lightBody dark:text-darkBody underline font-peyda font-bold text-[16px]">
            حریم خصوصی
          </p>
          <div className="flex justify-between w-full text-[13px] mt-3">
            <p className="text-lightBody dark:text-darkBody opacity-50 font-peyda font-bold">
              با عضویت در سایت تمامی شرایت وقوانین آکادمی سپهر را پذیرفته اید.
            </p>
          </div>
        </div>
      </AuthenticationCard>
    </div>
  );
}
