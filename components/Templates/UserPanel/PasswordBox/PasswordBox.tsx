import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { useChangePasswordApi } from "@/hooks/api/usePanelApi";

export default function ChangePasswordBox() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const { mutate: changePasswordMutate, isPending: changePasswordPending } = useChangePasswordApi(reset)

  const submitFormHandler: SubmitHandler<any> = (data) => {
    changePasswordMutate(data)
  };
  return (
    <>
      <div>
        <div className="font-kalamehBlack text-primary dark:text-primary-lighter text-2xl">
          تغییر پسورد
        </div>
        <form
          onSubmit={handleSubmit(submitFormHandler)}
          className="flex flex-col gap-5 mt-8"
        >
          <PrimaryInput
            placeholder="رمزعبور فعلی"
            variant="faded"
            className="font-peyda"
            type="text"
            register={{
              ...register("oldPassword", {
                required: "رمزعبور فعلیت رو نمیتونی خالی بذاری",
              }),
            }}
            isInvalid={Boolean(errors.oldPassword)}
            errorMessage={errors.oldPassword?.message}
          />
          <PrimaryInput
            placeholder="رمزعبور جدید"
            variant="faded"
            className="font-peyda"
            type="text"
            register={{
              ...register("newPassword", {
                required: "رمزعبور جدیدت رو نمیتونی خالی بذاری",
              }),
            }}
            isInvalid={Boolean(errors.newPassword)}
            errorMessage={errors.newPassword?.message}
          />
          <MainButton
            content={<p>ثبت</p>}
            type="submit"
            className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
            isLoading={changePasswordPending}
          />
        </form>
      </div>
    </>
  );
}
