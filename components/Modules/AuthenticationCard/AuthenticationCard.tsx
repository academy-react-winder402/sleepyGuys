import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Logo from "@/public/icons/logo/navbarLogo.svg";
import { authCard } from "@/interfaces/authCard.interface";

export default function AuthenticationCard({ image, children }: authCard) {
  return (
    <Card className="grid grid-cols-2 shadow-none px-10 py-6 dark:bg-dark-lighter">
      <div className="flex flex-col gap-7 pt-10 w-2/3">
        <div className="flex gap-5 items-center">
          <Image src={Logo} height={90} width={90} alt="" />
          <p className="text-lightTitle dark:text-darkTitle text-[32px] font-peyda font-bold">
            آکادمی سپهر
          </p>
        </div>
        {children}
      </div>
      <div className="">
        <Image src={image} alt="" className="" />
      </div>
    </Card>
  );
}
