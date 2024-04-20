import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import React, { useState } from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerForm } from "@/interfaces/registerForm.interface";
import Link from "next/link";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import MainButton from "@/components/Modules/Button/MainButton";
import { Checkbox } from "@nextui-org/react";

export default function RegisterBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>();

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const submitFormHandler: SubmitHandler<registerForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <AuthenticationCard image={loginImage}>
        <div className="flex flex-col">
          <p className="font-peyda text-lightTitle dark:text-darkTitle text-[22px] md:text-[24px]">
            ثبت نام
          </p>
          <p className="font-peyda flex gap-x-1 text-lg">
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
          <form onSubmit={handleSubmit(submitFormHandler)}>
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
                placeholder="شماره موبایل"
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
              <PrimaryInput
                variant="faded"
                placeholder="رمز عبور"
                className="font-peyda"
                type="password"
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
              isDisabled={!isTermsAccepted}
            />
            <Checkbox
              isSelected={isTermsAccepted}
              className="mt-1"
              onValueChange={setIsTermsAccepted}
              color="success"
            >
              <p className="flex items-center gap-x-1 ms-1 font-peyda">
                <Link
                  href={"#"}
                  className="underline text-primary dark:text-primary-lighter"
                >
                  قوانین و شرایط
                </Link>
                <span className="text-lightBody dark:bg-darkBody">سپهر آکادمی را پذیرفته ام</span>
              </p>
            </Checkbox>
          </form>
          <Link
            href={"#"}
            className="font-vazir underline text-lightBody dark:text-darkBody text-sm flex justify-end mt-2"
          ></Link>
        </div>
      </AuthenticationCard>
    </div>
  );
}
