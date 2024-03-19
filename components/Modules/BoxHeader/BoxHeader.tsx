import { BoxHeader } from "@/interfaces/boxHeader.interface";
import React from "react";

export default function BoxHeader({ title }: BoxHeader) {
  return (
    <h1 className="font-peyda text-[30px] md:text-[35px] text-primary dark:text-primary-lighter lg:mb-10 mb-8 text-center">
      {title}
    </h1>
  );
}
