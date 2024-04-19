import React, { useState } from "react";
import OtpInput from "react-otp-input";
import loginImage from "@/public/pictures/login/loginImage.svg";
import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { loginFormType } from "@/interfaces/loginForm.interface";
import Link from "next/link";
import MainButton from "@/components/Modules/Button/MainButton";

export default function LoginBox() {
  const [sendSms, setSendSms] = useState(false);
  const [otp, setOtp] = useState("");
  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(otp)
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormType>();

  const submitFormHandler: SubmitHandler<loginFormType> = (data) => {
    console.log(data);
    setSendSms(prev => !prev)
  };

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <AuthenticationCard image={loginImage}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-lightTitle-lighter dark:text-darkTitle text-[22px] md:text-[24px] font-peyda">
              ورود با موبایل
            </p>
<<<<<<< HEAD
            <p className="text-lightBody dark:text-darkBody font-peyda flex gap-x-1 mt-1.5 text-lg">
              حساب کاربری ندارید؟{" "}
=======
            <p className="text-lightBody dark:text-darkBody font-peyda flex gap-x-1 text-lg">
              <span>حساب کاربری ندارید؟</span>
>>>>>>> main
              <Link
                href={"/register"}
                className="text-primary dark:text-primary-lighter"
              >
                ثبت نام کنید.
              </Link>
            </p>
          </div>
<<<<<<< HEAD
          <div>
            {!sendSms ? (
              <form
                onSubmit={handleSubmit(submitFormHandler)}
                className="flex flex-col gap-5"
              >
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
                <MainButton onClick={handleSubmit(submitFormHandler)} content="ادامه" className="bg-primary font-peyda font-bold h-[64px] flex justify-center items-center rounded-lg text-white w-full"/>
              </form>
            ) : (
              <form dir="ltr" onSubmit={HandleSubmit} className="flex flex-col gap-5">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span className="px-3 lg:px-5"></span>}
                  renderInput={(props) => <input {...props} />}
                  containerStyle="mt-5 flex justify-center"
                  inputStyle="border-2 border-primary dark:border-primary-lighter h-16 text-2xl text-bold rounded-md text-lightTitle-lighter font-peyda dark:text-primary-lighter bg-mainBodyBg dark:bg-dark otp"
                />
                <p className="text-primary dark:text-primary-lighter font-peyda font-bold">
                  کد ارسال شده را وارد کنید.
                </p>
                <MainButton onClick={HandleSubmit} content="ادامه" className="bg-primary font-peyda font-bold h-[64px] flex justify-center items-center rounded-lg text-white w-full"/>
              </form>
            )}
          </div>
          <div className="flex justify-between w-full text-[16px]">
            <p className="text-lightBody dark:text-darkBody font-peyda font-bold">
              ورود با ایمیل
            </p>
            <p className="text-lightBody dark:text-darkBody underline font-peyda font-bold">
              حریم خصوصی
            </p>
          </div>
          <div className="flex justify-between w-full text-[13px] mt-3">
            <p className="text-lightBody dark:text-darkBody opacity-50 font-peyda font-bold">
              با عضویت در سایت تمامی شرایت وقوانین آکادمی سپهر را پذیرفته اید.
            </p>
=======
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
>>>>>>> main
          </div>
        </div>
      </AuthenticationCard>
    </div>
  );
}
