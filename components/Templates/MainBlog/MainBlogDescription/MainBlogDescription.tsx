import MainButton from "@/components/Modules/Button/MainButton";
import { Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import chevronDown from "@/public/icons/solid/chevron-down.svg";
import chevronUp from "@/public/icons/solid/chevron-up.svg";

export default function MainBlogDescription({ des }: { des: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="p-6 shadow-none rounded-l-[50px] dark:bg-dark-lighter"
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
          className={`${
            isExpanded ? "h-[40dvh]" : "h-auto"
          }  leading-7 flex flex-col gap-y-6 overflow-hidden mb-10 text-lightBody dark:text-darkBody transition-height !duration-500 !ease-in-out`}
          visibility="auto"
        >
          <p>{des}</p>
        </ScrollShadow>
        <MainButton
          content={<p>{!isExpanded ? "مشاهده بیشتر" : "مشاهده کمتر"}</p>}
          className="w-max mx-auto bg-primary dark:bg-primary-darker text-btnText"
          endIcon={<Image src={!isExpanded ? chevronDown : chevronUp} alt="" />}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </CardBody>
    </Card>
  );
}
