import { UserCardType } from "@/types/userCard";
import Image from "next/image";
import React from "react";

export default function UserCard({ title, description, image }: UserCardType) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center justify-center p-2  bg-primary rounded-full">
        <Image src={image} alt="" width={50} height={50} />
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
