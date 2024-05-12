import MainButton from "@/components/Modules/Button/MainButton";
import { useVerifyCodeApi } from "@/hooks/api/useAuthApi";
import { useRouter } from "next/router";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function OtpForm() {
  const [otp, setOtp] = useState("");

  const verifyCode = useVerifyCodeApi();

  const router = useRouter();

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    verifyCode.mutate({
      phoneNumber: router.query?.phoneNumber,
      verifyCode: otp,
    });
  };

  return (
    <form dir="ltr" onSubmit={HandleSubmit} className="flex flex-col gap-5">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        renderSeparator={<span className="px-3 lg:px-5"></span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="mt-5 flex justify-center"
        inputStyle="border-2 border-primary dark:border-primary-lighter h-16 text-2xl text-bold rounded-md text-lightTitle-lighter font-peyda dark:text-primary-lighter bg-mainBodyBg dark:bg-dark otp"
      />
      <MainButton
        content={<p>ادامه</p>}
        type="submit"
        className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
        isLoading={verifyCode.isPending}
        isDisabled={otp.length < 5}
      />
    </form>
  );
}
