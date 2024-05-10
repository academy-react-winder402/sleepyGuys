import { BoxHeader as BoxHeaderType } from "@/interfaces/boxHeader.interface";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function BoxHeader({
  title,
  hasLink,
  linkTitle,
  route,
  titleColor = "text-primary dark:text-primary-lighter",
}: BoxHeaderType) {
  return (
    <div className="flex-grow items-center grid grid-cols-1 md:grid-cols-3 justify-between">
      <h1
        className={`font-peyda text-[30px] md:text-[35px] ${titleColor} mb-2 md:mb-4 lg:mb-10  text-center md:col-start-2 col-span-1 mx-auto`}
      >
        {title}
      </h1>
      {hasLink && (
        <Link
          href={`${route}`}
          className="md:col-start-3 col-span-1 mx-auto md:ms-auto md:mx-0 flex items-center gap-x-2 mb-8 md:mb-4 lg:mb-10 text-lightTitle dark:text-darkTitle"
        >
          <Divider className="w-[40px] rounded-full h-1 bg-primary dark:bg-primary-lighter" />
          {linkTitle}
        </Link>
      )}
    </div>
  );
}
