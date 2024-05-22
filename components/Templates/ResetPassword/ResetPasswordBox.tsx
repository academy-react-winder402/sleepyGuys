import React, { useState } from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import ResetPasswordForm1 from "@/components/Templates/ResetPassword/ResetPasswordForm/ResetPasswordForm1";
import ResetPasswordForm2 from "@/components/Templates/ResetPassword/ResetPasswordForm/ResetPasswordForm2";
import Link from "next/link";

function ForgetPasswordBox() {
  const [isGmailValid, setIsGmailValid] = useState<boolean>(true);

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <AuthenticationCard image={loginImage}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-lightTitle-lighter dark:text-darkTitle text-[22px] md:text-[24px] font-peyda">
              تغییر رمزعبور
            </p>
          </div>
          <div>
            {!isGmailValid && <ResetPasswordForm1 />}
            {isGmailValid && <ResetPasswordForm2 />}
          </div>
          <Link href="policy" className="text-lightBody dark:text-darkBody underline font-peyda font-bold text-[16px]">
            حریم خصوصی
          </Link>
          <p className="text-lightBody dark:text-darkBody opacity-50 font-peyda font-bold text-[13px]">
            با عضویت در سایت تمامی شرایت وقوانین آکادمی سپهر را پذیرفته اید.
          </p>
        </div>
      </AuthenticationCard>
    </div>
  );
}

export default ForgetPasswordBox;
