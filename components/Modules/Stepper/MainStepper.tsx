import convertToPersianDigit from "@/utils/convertToPersianDigit";
import { Divider } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";

export default function MainStepper({ steps }: { steps: number }) {
  const [scrollToStep, setScrollToStep] = useState<number>(0);

  const positions = useRef<{ y: number }[]>([]);

  const spanRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      positions.current.forEach((position, index) => {
        if (
          scrollPosition >= position.y - 350 &&
          scrollPosition < position.y + 350 &&
          scrollPosition !== index + 1
        ) {
          setScrollToStep(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollToStep]);

  useEffect(() => {
    const initialPositions = spanRefs.current.map((span) => {
      if (span) {
        const rect = span.getBoundingClientRect();
        return { y: rect.top + window.scrollY };
      }
      return { y: 0 };
    });
    positions.current = initialPositions;
  }, [steps]);

  return (
    <div className="hidden lg:block">
      {Array.from({ length: steps }, (_, index) => (
        <div className="relative h-[400px] flex items-center" key={index}>
          <span
            ref={(span) => (spanRefs.current[index] = span)}
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
