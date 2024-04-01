import { courseSummary } from "@/interfaces/courseSummary.interface";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function CourseSummaryItem({
  icon,
  title,
  value,
}: courseSummary) {
  return (
    <Card
      className="shadow-2xl shadow-shadowColor dark:shadow-none p-6 dark:bg-dark-lighter"
      dir="rtl"
    >
      <CardBody className="flex flex-col md:flex-row items-center gap-6">
        <Image src={icon} alt="" className="scale-[2]" />
        <div className="text-right">
          <p className="font-peyda text-lightTitle dark:text-darkTitle text-md mb-1">
            {title}
          </p>
          <p className="text-sm text-lightBody dark:text-darkBody">{value}</p>
        </div>
      </CardBody>
    </Card>
  );
}
