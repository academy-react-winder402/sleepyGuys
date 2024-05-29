import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { useFinalStepResetPasswordUserApi } from "@/hooks/api/useAuthApi";
import { resetPasswordForm2Type } from "@/interfaces/resetPasswordForm.interface";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ResetPasswordForm1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPasswordForm2Type>();
  const resetPasswordUser = useFinalStepResetPasswordUserApi();
  const submitFormHandler: SubmitHandler<resetPasswordForm2Type> = (data) => {
    console.log(data)
    resetPasswordUser.mutate({
      ...data,
      userId: 4,
      resetValue: "hgvfdrdyfc",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitFormHandler)}
      className="flex flex-col gap-5"
    >
      <PrimaryInput
        placeholder="پسورد جدید"
        variant="faded"
        className="font-peyda"
        type="text"
        register={{
          ...register("newPassword", {
            required: "پسورد جدید رو نمیتونی خالی بذاری",
            // pattern: {
            //   value: passwordRegex,
            //   message: "پسورد جدید که نوشتی درست نیست",
            // },
          }),
        }}
        isInvalid={Boolean(errors.newPassword)}
        errorMessage={errors.newPassword?.message}
      />
      <MainButton
        content={<p>ثبت</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
        isLoading={resetPasswordUser.isPending}
      />
    </form>
  );
}