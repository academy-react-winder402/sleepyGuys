import MainButton from "@/components/Modules/Button/MainButton";
import MainCountdown from "@/components/Modules/Counter/MainCountdown";
import { useVerifyCodeApi } from "@/hooks/api/useAuthApi";
import { otpFormProps } from "@/interfaces/otpForm.interface";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import OtpInput from "react-otp-input";

export default function OtpForm({ goToRegisterStep3 }: {
  goToRegisterStep3: () => void
}) {
  const router = useRouter();
  const { query } = router
  const { control, handleSubmit, watch, reset } = useForm<otpFormProps>({
    defaultValues: {
      verifyCode: ""
    }
  })

  const { mutate, isPending } = useVerifyCodeApi(goToRegisterStep3);

  const verifyCode = watch("verifyCode")

  const submitFormHandler: SubmitHandler<otpFormProps> = (data) => {
    mutate({
      phoneNumber: query?.phoneNumber,
      verifyCode: data.verifyCode,
    });

  }
  const memoizedMainCountdown = useMemo(
    () => <MainCountdown clearOtpInputHandler={reset} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <form dir="ltr" onSubmit={handleSubmit(submitFormHandler)} className="flex flex-col gap-5">
      <Controller
        name="verifyCode"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <OtpInput
            {...field}
            numInputs={5}
            shouldAutoFocus
            inputType="number"
            renderSeparator={<span className="px-1 sm:px-2 md:px-2.5"></span>}
            renderInput={(props) => <input {...props} />}
            containerStyle="mt-5 flex justify-center"
            inputStyle="border-2 border-primary dark:border-primary-lighter h-16 text-2xl text-bold rounded-md text-lightTitle font-peyda dark:text-darkTitle bg-mainBodyBg dark:bg-dark otp"
          />
        )}
      />
      {memoizedMainCountdown}
      <MainButton
        content={<p>ادامه</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
        isLoading={isPending}
        isDisabled={verifyCode.length < 5}
      />
    </form>
  );
}
