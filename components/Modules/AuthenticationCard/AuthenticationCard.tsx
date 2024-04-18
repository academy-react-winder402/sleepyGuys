import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Logo from "@/public/icons/logo/navbarLogo.svg";
import { authCard } from "@/interfaces/authCard.interface";

export default function AuthenticationCard({ image, children }: authCard) {
  return (
    <Card className="flex flex-row w-full lg:w-[90%] gap-5 lgb:gap-20 shadow-none p-10 dark:bg-dark-lighter">
      <div className="flex flex-col gap-7 w-full lg:w-1/2">
        <div className="flex gap-3 lgb:gap-7 items-center">
          <Image src={Logo} height={90} width={90} className="w-[60px] md:w-[80px]" alt="" />
          <p className="text-lightTitle-lighter dark:text-darkTitle text-[28px] md:text-[32px] font-peyda font-bold">
            آکادمی سپهر
          </p>
        </div>
        {children}
      </div>
      <div className="w-1/2 hidden lg:flex items-center">
        <Image src={image} alt="" style={{ width: "100%" }} />
      </div>
    </Card>
  );
}
