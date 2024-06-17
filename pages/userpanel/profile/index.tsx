import Image from "next/image";
import React, { useState } from "react";
import img from "@/public/pictures/userPanel/userProfile.png";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { combinedEmailAndPhoneRegex } from "@/utils/combinedEmailAndPhoneRegex";
import ProfileBox from "@/components/Templates/UserPanel/ProfileBox/ProfileBox";
import PersonalInfoBox from "@/components/Templates/UserPanel/PersonalInfoBox/PersonalInfoBox";
import PassWordBox from "@/components/Templates/UserPanel/PasswordBox/PasswordBox";

export default function Index() {
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
    <div className="flex gap-8">
      <div className="flex flex-col bg-white dark:bg-dark-lighter w-[60%] rounded-3xl overflow-hidden p-5">
        <ProfileBox/>
        <PersonalInfoBox/>
      </div>
      <div className="flex flex-col bg-white dark:bg-dark-lighter w-[40%] rounded-3xl p-5">
        <PassWordBox/>
      </div>
    </div>
  );
}
