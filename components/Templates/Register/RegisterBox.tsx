import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";
import React, { useState } from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import Link from "next/link";
import RegisterForm from "./RegisterForm/RegisterForm";
import OtpForm from "../Login/LoginForm/OtpForm";
import FinalRegisterForm from "./FinalRegisterForm/FinalRegisterForm";

export default function RegisterBox() {
  const [isOtpFormOpen, setIsOtpFormOpen] = useState<boolean>(false);

  const [isRegisterStep3Open, setRegisterStep3Open] = useState<boolean>(false)

  const goToOtpForm = () => {
    setIsOtpFormOpen(true);
  };

  const goToRegisterStep3 = () => {
    setRegisterStep3Open(true)
  }

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <AuthenticationCard image={loginImage}>
        <div className="flex flex-col">
          <p className="font-peyda text-lightTitle dark:text-darkTitle text-[22px] md:text-[24px]">
            ثبت نام
          </p>
          <p className="font-peyda flex gap-x-1 text-lg">
            <span className="text-lightBody dark:text-darkBody">
              حساب کاربری دارید؟
            </span>
            <Link
              href={"/login"}
              className="text-primary dark:text-primary-lighter"
            >
              وارد شوید.
            </Link>
          </p>
          {!isOtpFormOpen && <RegisterForm goToOtpForm={goToOtpForm} />}
          {(isOtpFormOpen && !isRegisterStep3Open) && <OtpForm goToRegisterStep3={goToRegisterStep3} />}
          {isRegisterStep3Open && <FinalRegisterForm />}
          <Link
            href={"#"}
            className="font-vazir underline text-lightBody dark:text-darkBody text-sm flex justify-end mt-2"
          ></Link>
        </div>
      </AuthenticationCard>
    </div>
  );
}
