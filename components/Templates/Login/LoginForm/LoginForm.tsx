import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { useLoginUserApi } from "@/hooks/api/useAuthApi";
import { loginFormType } from "@/interfaces/loginForm.interface";
import { combinedEmailAndPhoneRegex } from "@/utils/combinedEmailAndPhoneRegex";
import { Checkbox } from "@nextui-org/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<loginFormType>();

  const [rememberMe, setRememberMe] = useState<boolean>(false)

  const loginUser = useLoginUserApi()

  const submitFormHandler: SubmitHandler<loginFormType> = (data) => {
    loginUser.mutate({
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
      <Checkbox
        isSelected={rememberMe}
        className="mt-1"
        onValueChange={setRememberMe}
      >
        <p className="ms-1 font-peyda text-lightBody dark:text-darkBody">
          منو فراموش نکن
        </p>
      </Checkbox>
      <MainButton
        content={<p>ورود</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
        isLoading={loginUser.isPending}
      />
    </form>
  );
}
