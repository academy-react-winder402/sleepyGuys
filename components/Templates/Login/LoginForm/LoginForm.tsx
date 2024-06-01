import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { useLoginUserApi } from "@/hooks/api/useAuthApi";
import { loginFormType } from "@/interfaces/loginForm.interface";
import { combinedEmailAndPhoneRegex } from "@/utils/combinedEmailAndPhoneRegex";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<loginFormType>();

  const [rememberMe, setRememberMe] = useState<boolean>(false)

  const { mutate, isPending } = useLoginUserApi()

  const submitFormHandler: SubmitHandler<loginFormType> = (data) => {
    mutate({
      ...data,
      rememberMe,
    })
  };

  return (
    <form
      onSubmit={handleSubmit(submitFormHandler)}
      className="flex flex-col gap-5"
    >
      <PrimaryInput
        placeholder="شماره موبایل/جیمیل"
        variant="faded"
        className="font-peyda"
        type="text"
        register={{
          ...register("phoneOrGmail", {
            required: "شماره موبایل/جیمیلت رو نمیتونی خالی بذاری",
            pattern: {
              value: combinedEmailAndPhoneRegex(),
              message: "شماره موبایل/جیمیلت که نوشتی درست نیست"
            }
          }),
        }}
        isInvalid={Boolean(errors.phoneOrGmail)}
        errorMessage={errors.phoneOrGmail?.message}
      />
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
      <div className="flex justify-between items-center mt-1">
        <Checkbox
          isSelected={rememberMe}
          classNames={{
            label: ["ms-1 font-peyda text-lightBody dark:text-darkBody"]
          }}
          onValueChange={setRememberMe}
        >

          منو فراموش نکن
        </Checkbox>
        <Link href="resetPassword" className="font-peyda text-lightBody dark:text-darkBody">رمزت رو فراموش کردی؟</Link>
      </div>
      <MainButton
        content={<p>ورود</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
        isLoading={isPending}
      />
    </form>
  );
}
