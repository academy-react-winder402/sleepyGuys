import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { loginFormType } from "@/interfaces/loginForm.interface";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm({ setSendSms }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormType>();

  const submitFormHandler: SubmitHandler<loginFormType> = (data) => {
    console.log(data);
    setSendSms((prev: boolean) => !prev);
  };
  
  return (
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
            required: true,
          }),
        }}
      />
      <MainButton
        content={<p>ادامه</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
      />
    </form>
  );
}
