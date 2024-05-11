import { teacherSummaryProps } from "@/interfaces/teacherSummary.interface";
import { Card, CardBody, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SuggestedTeacherCard({
  data,
}: {
  data: teacherSummaryProps;
}) {
  const { title, img } = data;
  return (
    <Link href={"#"} className="cursor-pointer">
      <Card className="bg-white dark:bg-dark-lighter overflow-visible w-fit ms-auto -mt-20 shadow-md dark:shadow-none">
        <CardBody className="flex items-center flex-row gap-2 overflow-visible py-0">
          <Image
            alt=""
            src={img}
            className="w-16 h-16 object-cover rounded-xl -translate-y-7"
          />
          <div className="flex items-center gap-2 font-bold">
            <span className="text-lightBody dark:text-darkBody text-sm">
              رفتن به صفحه
            </span>
            <span className="text-lightTitle dark:text-darkTitle">{title}</span>
            <Divider className="w-[35px] h-[2px] bg-primary dark:bg-primary-lighter" />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
