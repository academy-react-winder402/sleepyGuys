import { UserCardType } from "@/types/userCard";
import Image from "next/image";
import React from "react";

export default function UserCard({ title, description, image }: UserCardType) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary dark:bg-primary-lighter rounded-full">
        <Image src={image} alt="" width={38} height={18} />
      </div>
      <div>
        <p className="text-2xl text-primary dark:text-primary-lighter mb-0.1 font-kalamehBlack">
          {title}
        </p>
        <p className="text-xs text-lightBody dark:text-darkBody">
          {description}
        </p>
      </div>
    </div>
  );
}
