import { Card, CardBody, Skeleton } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import teacherSummary from "@/constants/teacherSummary";

function SkeletonTeacherDetailBox() {
  const summaryItemsValues = [5, 15, 5, 4];
  return (
    <Card className="relative kir mt-12 overflow-visible rounded-2xl">
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-sm z-10 rounded-2xl"></div>
      <Skeleton className="w-full h-[700px] mdb:h-[620px] object-cover rounded-2xl" />
      <Skeleton className="absolute z-20 w-[270px] h-[300px] left-10 -top-6 rounded-2xl hidden md:block" />
      <CardBody className="absolute top-8 right-1/2 translate-x-[50%] md:right-8 md:translate-x-0 z-20 w-full md:w-1/2 text-center md:text-right">
        <h1 className="font-kalamehBlack text-4xl text-white mb-6">
          <Skeleton className="h-6 w-28 rounded-md" />
        </h1>
        <p className="line-clamp-2 text-darkBody">
          <Skeleton className="h-6 w-full rounded-md mb-5" />
        </p>
        <Skeleton className="rounded-md h-14" />
        <div className="grid 2xs:grid-cols-2 xs:grid-cols-4 md:grid-cols-2  mdb:grid-cols-4 gap-4 items-center mt-8">
          {teacherSummary.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <Image src={item.icon} alt="" className="w-10 " />
              <p className="text-white text-sm lg:text-md xl:text-lg">
                {item.title}
              </p>
              <span className="text-darkBody text-xs">
                <Skeleton className="h-6 w-20 rounded-md" />
              </span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default SkeletonTeacherDetailBox;
