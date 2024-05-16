import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { useSendCodeApi } from "@/hooks/api/useAuthApi";
import { registerForm } from "@/interfaces/registerForm.interface";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function RegisterForm({
  goToOtpForm,
}: {
  goToOtpForm: () => void;
}) {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>();

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const router = useRouter()

  const sendCode = useSendCodeApi();

  useEffect(() => {
    if (sendCode.isSuccess) {
      goToOtpForm()
      router.push(`/register?phoneNumber=${getValues(["phoneNumber"])[0]}`);
    }
  }, [sendCode.isSuccess])

  const submitFormHandler: SubmitHandler<registerForm> = (data) => {
    sendCode.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submitFormHandler)}>
      <div className="flex flex-col gap-y-2 my-4">
        <PrimaryInput
          variant="faded"
          placeholder="شماره موبایل"
          className="font-peyda"
          type="number"
          register={{
            ...register("phoneNumber", {
              required: "شماره موبایلت رو نمیتونی خالی بذاری",
              pattern: {
                value:
                  /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
                message: "شماره موبایلت که نوشتی درست نیست",
              },
            }),
          }}
          isInvalid={Boolean(errors.phoneNumber)}
          errorMessage={errors.phoneNumber?.message}
        />
      </div>
      <MainButton
        content={<p>ادامه</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
        isDisabled={!isTermsAccepted}
        isLoading={sendCode.isPending}
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
