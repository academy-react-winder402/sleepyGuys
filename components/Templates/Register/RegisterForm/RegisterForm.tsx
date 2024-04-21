import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { registerForm } from "@/interfaces/registerForm.interface";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function RegisterForm() {
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
      >
        <p className="flex items-center gap-x-1 ms-1 font-peyda">
          <Link
            href={"#"}
            className="underline text-primary dark:text-primary-lighter"
          >
            قوانین و شرایط
          </Link>
          <span className="text-lightBody dark:text-darkBody">
            سپهر آکادمی را پذیرفته ام
          </span>
        </p>
      </Checkbox>
    </form>
  );
}
