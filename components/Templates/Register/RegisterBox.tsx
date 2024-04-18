import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import React from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerForm } from "@/interfaces/registerForm.interface";
import Link from "next/link";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import MainButton from "@/components/Modules/Button/MainButton";

export default function RegisterBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>();

  const submitFormHandler: SubmitHandler<registerForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <AuthenticationCard image={loginImage}>
        <form onSubmit={handleSubmit(submitFormHandler)}>
          <p className="font-peyda text-lightTitle dark:text-darkTitle text-3xl">
            ثبت نام
          </p>
          <p className="font-peyda flex gap-x-1 mt-1.5 text-lg">
            <span className="text-lightBody dark:text-darkBody">
              حساب کاربری دارید؟
            </span>
            <Link
              href={"/login"}
              className="text-primary dark:text-primary-lighter"
            >
              وارد شوید.
            </Link>
          </p>
          <div className="flex flex-col gap-y-2 my-4">
            <PrimaryInput
              variant="faded"
              placeholder="نام"
              className="font-peyda"
              register={{
                ...register("fullName", {
                  required: "اسمت رو نمیتونی خالی بذاری",
                }),
              }}
              errorMessage={errors.fullName && errors.fullName.message}
            />
            <PrimaryInput
              variant="faded"
              placeholder="شماره تماس"
              className="font-peyda"
              register={{
                ...register("phone", {
                  required: "شماره تماست رو نمیتونی خالی بذاری",
                  pattern: {
                    value:
                      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
                    message: "شماره تماسی که نوشتی درست نیست",
                  },
                }),
              }}
              errorMessage={errors.phone && errors.phone.message}
            />
            <PrimaryInput
              variant="faded"
              placeholder="رمز عبور"
              className="font-peyda"
              register={{
                ...register("password", {
                  required: "رمز عبورت رو نمیتونی خالی بذاری",
                  minLength: {
                    value: 8,
                    message: "رمز عبورت حداقل باید ۸ کاراکتر داشته باشه.",
                  },
                }),
              }}
              errorMessage={errors.password && errors.password.message}
            />
          </div>
          <MainButton
            content={<p>ادامه</p>}
            type="submit"
            className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
          />
          <Link
            href={"#"}
            className="font-vazir underline text-lightBody dark:text-darkBody text-sm flex justify-end mt-2"
          >
            قوانین و شرایط
          </Link>
        </form>
      </AuthenticationCard>
    </div>
  );
}
