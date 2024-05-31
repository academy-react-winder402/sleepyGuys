import MainButton from "@/components/Modules/Button/MainButton";
import { Card, CardBody, CardHeader, ScrollShadow, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import chevronDown from "@/public/icons/solid/chevron-down.svg";
import chevronUp from "@/public/icons/solid/chevron-up.svg";

export default function CourseDescriptionBox({ description, isLoading }: { description: string, isLoading: boolean }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card
      className="shadow-2xl shadow-shadowColor dark:shadow-none p-6 dark:bg-dark-lighter"
      dir="rtl"
    >
      <CardHeader>
        <p className="font-kalamehBlack text-3xl text-primary dark:text-primary-lighter">
          توضیحات
        </p>
      </CardHeader>
      <CardBody className="text-right">
        <ScrollShadow
          size={200}
          className={`${!isExpanded ? "h-[60dvh]" : "h-auto"
            }  leading-7 flex flex-col gap-y-6 overflow-hidden mb-10 text-lightBody dark:text-darkBody transition-height !duration-500 !ease-in-out`}
          visibility="auto"
        >
          {isLoading ?
            <div className="space-y-3">
              {Array.from({ length: 3 }, (_, index) => (
                <Skeleton className="rounded-md w-full h-[25px]" key={index} />
              ))}
            </div> : description}
        </ScrollShadow>
        <MainButton
          content={<p>{!isExpanded ? "مشاهده کمتر" : "مشاهده بیشتر"}</p>}
          className="w-max mx-auto bg-primary dark:bg-primary-darker text-btnText"
          endIcon={<Image src={!isExpanded ? chevronUp : chevronDown} alt="" />}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </CardBody>
    </Card>
  );
}
