import Image from "next/image";
import React, { useState } from "react";
import img from "@/public/pictures/userPanel/userProfile.png";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { combinedEmailAndPhoneRegex } from "@/utils/combinedEmailAndPhoneRegex";

export default function PassWordBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const submitFormHandler: SubmitHandler<any> = (data) => {
    console.log({
      ...data,
    });
  };
  return (
    <>
      <div>
        <div className="font-kalamehBlack text-primary-darker text-2xl">
          تغییر پسورد
        </div>
        <form
          onSubmit={handleSubmit(submitFormHandler)}
          className="flex flex-col gap-5 mt-8"
        >
          <PrimaryInput
            placeholder="رمزعبور"
            variant="faded"
            className="font-peyda"
            type="text"
            register={{
              ...register("password", {
                required: "رمزعبورت رو نمیتونی خالی بذاری",
              }),
            }}
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.password?.message}
          />
          <PrimaryInput
            placeholder="تکرار رمزعبور"
            variant="faded"
            className="font-peyda"
            type="text"
            register={{
              ...register("repeatPassword", {
                required: "تکرار رمزعبور رو نمیتونی خالی بذاری",
              }),
            }}
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.repeatPassword?.message}
          />
          <MainButton
            content={<p>ثبت</p>}
            type="submit"
            className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
            isLoading={false}
          />
        </form>
      </div>
    </>
  );
}
