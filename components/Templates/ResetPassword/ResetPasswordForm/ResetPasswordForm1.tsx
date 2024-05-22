import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { useResetPasswordUserApi } from "@/hooks/api/useAuthApi";
import { resetPasswordForm1Type } from "@/interfaces/resetPasswordForm.interface";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ResetPasswordForm1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPasswordForm1Type>();

  const resetPasswordUser = useResetPasswordUserApi();

  const baseUrl: string | undefined = process.env.NEXT_PUBLIC_BASE_URL

  const submitFormHandler: SubmitHandler<resetPasswordForm1Type> = (data) => {
    console.log(data)
    resetPasswordUser.mutate({
      ...data,
      baseUrl
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitFormHandler)}
      className="flex flex-col gap-5"
    >
      <PrimaryInput
        placeholder="جیمیل"
        variant="faded"
        className="font-peyda"
        type="text"
        register={{
          ...register("email", {
            required: "جیمیلت رو نمیتونی خالی بذاری",
            pattern: {
              value: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
              message: "جیمیلت که نوشتی درست نیست",
            },
          }),
        }}
        isInvalid={Boolean(errors.email)}
        errorMessage={errors.email?.message}
      />
      <MainButton
        content={<p>درخواست فراموشی رمز</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
        isLoading={resetPasswordUser.isPending}
      />
    </form>
  );
}
