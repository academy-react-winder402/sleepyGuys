"use client";
import convertToPersianDigit from "@/utils/convertToPersianDigit";
import { Divider } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function MainStepper({ steps }: { steps: number }) {
  const [scrollToStep, setScrollToStep] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 20) {
        setScrollToStep(null);
      } else if (scrollPosition >= 20 && scrollPosition < 370) {
        setScrollToStep(1);
      } else if (scrollPosition >= 370 && scrollPosition < 770) {
        setScrollToStep(2);
      } else if (scrollPosition >= 770) {
        setScrollToStep(3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollToStep]);

  return (
    <div className="hidden lg:block">
      {Array.from({ length: steps }, (_, index) => (
        <div className="relative h-[400px] flex items-center" key={index}>
          <span
            className={`${
              scrollToStep === index + 1 ? "step-animation" : ``
            } rounded-full border-dashed border-black dark:border-white border-[1px] font-peyda inline-flex justify-center items-center w-[30px] h-[30px]`}
          >
            {convertToPersianDigit(index + 1)}
          </span>
          {steps - 1 !== index && (
            <Divider className="border-dashed bg-black rotate-90 absolute -right-[170px] top-[399px] w-[369px]" />
          )}
          <Divider className="border-dashed bg-black absolute w-52 top-[200px] right-[30px]" />
        </div>
      ))}
    </div>
  );
}
