import React from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { loginFormType } from "@/interfaces/loginForm.interface";

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
    <div className="flex items-center justify-center h-[100dvh]">
      <AuthenticationCard image={loginImage}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 lg:mt-3">
            <p className="text-lightTitle-lighter dark:text-darkTitle text-[22px] md:text-[24px] font-peyda font-bold">
              ورود با موبایل
            </p>
            <p className="text-lightBody dark:text-darkBody">
              حساب کاربری ندارید؟{" "}
              <span className="text-primary dark:text-primary-lighter">
                ثبت نام کنید.
              </span>
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(submitFormHandler)} className="flex flex-col gap-5">
              <PrimaryInput
                placeholder="موبایل رو برامون بنویس..."
                variant="faded"
                className="font-peyda"
                register={{
                  ...register("phone", {
                    required: true,
                  }),
                }}
              />
              <button className="bg-primary dark:bg-primary-lighter p-3 lg:p-5 flex justify-center items-center rounded-2xl text-white">
                ادامه
              </button>
            </form>
          </div>
          <div className="flex justify-between w-full text-[16px]">
            <p className="text-lightBody dark:text-darkBody">ورود با ایمیل</p>
            <p className="text-lightBody dark:text-darkBody underline">حریم خصوصی</p>
          </div>
          <div className="flex justify-between w-full text-[13px] mt-3">
            <p className="text-lightBody dark:text-darkBody">با عضویت در سایت تمامی شرایت وقوانین آکادمی سپهر را پذیرفته اید.</p>
          </div>
        </div>
      </AuthenticationCard>
    </div>
  );
}
