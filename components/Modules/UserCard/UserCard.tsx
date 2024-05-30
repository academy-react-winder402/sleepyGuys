import { UserCardType } from "@/interfaces/userCard.interface";
import { validateImageAddress } from "@/utils/validateImageAdderss";
import Image from "next/image";
import React from "react";
import fallbackImage from "@/public/pictures/courses/next.webp"

export default function UserCard({
  title,
  description,
  image,
  size,
}: UserCardType) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center justify-center p-2  bg-primary dark:bg-primary-darker rounded-full">
        <Image src={validateImageAddress("",fallbackImage)} alt="" width={size} height={size} />
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
