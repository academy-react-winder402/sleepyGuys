import Image from "next/image";
import React, { useState } from "react";
import img from "@/public/pictures/userPanel/userProfile.png";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { combinedEmailAndPhoneRegex } from "@/utils/combinedEmailAndPhoneRegex";

export default function PersonalInfoBox() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<any>();
    
      const [rememberMe, setRememberMe] = useState<boolean>(false);
    
      const submitFormHandler: SubmitHandler<any> = (data) => {
        console.log({
          ...data,
          rememberMe,
        });
      };
  return (
    <>
    <div>
    <div className="font-kalamehBlack text-primary-darker text-2xl mt-8">تغییر اطلاعات فردی</div>
          <form
            onSubmit={handleSubmit(submitFormHandler)}
            className="flex flex-col gap-5 mt-8"
          >
            <PrimaryInput
              placeholder="شماره موبایل"
              variant="faded"
              className="font-peyda"
              type="text"
              register={{
                ...register("phone", {
                  required: false,
                  pattern: {
                    value: combinedEmailAndPhoneRegex(),
                    message: "شماره موبایل",
                  },
                }),
              }}
              isInvalid={Boolean(errors.phone)}
              errorMessage={errors.phone?.message}
            />
            <PrimaryInput
              placeholder="نام"
              variant="faded"
              className="font-peyda"
              type="text"
              register={{
                ...register("name", {
                  required: false,
                }),
              }}
              isInvalid={Boolean(errors.name)}
              errorMessage={errors.name?.message}
            />
            <PrimaryInput
              placeholder="نام خانوادگی"
              variant="faded"
              className="font-peyda"
              type="text"
              register={{
                ...register("lastName", {
                  required: false,
                }),
              }}
              isInvalid={Boolean(errors.lastName)}
              errorMessage={errors.lastName?.message}
            />
            <PrimaryInput
              placeholder="نام کاربری"
              variant="faded"
              className="font-peyda"
              type="text"
              register={{
                ...register("userName", {
                  required: false,
                }),
              }}
              isInvalid={Boolean(errors.userName)}
              errorMessage={errors.userName?.message}
            />
            <PrimaryInput
              placeholder="ایمیل"
              variant="faded"
              className="font-peyda"
              type="text"
              register={{
                ...register("email", {
                  required: false,
                }),
              }}
              isInvalid={Boolean(errors.email)}
              errorMessage={errors.email?.message}
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
  )
}
