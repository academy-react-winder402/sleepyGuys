import { UserCardType } from "@/types/userCard";
import Image from "next/image";
import React from "react";

export default function UserCard({ title, description, image }: UserCardType) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center justify-center w-12 h-12 md:w-20 md:h-20 bg-MainPrimary rounded-full">
        <Image src={image} alt="" width={38} height={18} />
      </div>
      <div>
        <p className="text-2xl text-primary dark:text-primary-lighter mb-0.1 font-kalamehBlack">
          {title}
        </p>
        <p className="text-xs text-LightBody dark:text-black-800">
          {description}
        </p>
      </div>
    </div>
  );
}
