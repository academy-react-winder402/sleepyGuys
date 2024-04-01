import { UserCardType } from "@/interfaces/userCard.interface";
import Image from "next/image";
import React from "react";

export default function UserCard({ title, description, image , size }: UserCardType) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center justify-center p-2  bg-primary rounded-full">
        <Image src={image} alt="" width={size} height={size} />
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
