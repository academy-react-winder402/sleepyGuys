import convertToPersianDigit from "@/utils/convertToPersianDigit";
import { Divider } from "@nextui-org/react";
import React from "react";

export default function MainStepper({ steps }: { steps: number }) {
  return (
    <div className="hidden lg:block">
      {Array.from({ length: steps }, (_, index) => (
        <div className="relative h-[400px] flex items-center" key={index}>
          <span className="rounded-full border-dashed border-black dark:border-white border-[1px] font-peyda inline-flex justify-center items-center w-[30px] h-[30px]">
            {convertToPersianDigit(index + 1)}
          </span>
          {steps - 1 !== index && (
            <Divider className="border-dashed bg-black rotate-90 absolute -right-[175px] top-[400px] w-[380px]" />
          )}
          <Divider className="border-dashed bg-black absolute w-52 top-[200px] right-7" />
        </div>
      ))}
    </div>
  );
}
