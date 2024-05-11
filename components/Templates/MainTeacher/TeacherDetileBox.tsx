import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import MainButton from "@/components/Modules/Button/MainButton";
import teacherSummary from "@/constants/teacherSummary";
import { teacherSummaryProps } from "@/interfaces/teacherSummary.interface";

function TeacherDetileBox({ data }: { data: teacherSummaryProps }) {
  const {
    title,
    description,
    img,
    coursesCount,
    website,
    students,
    degree,
    rate,
  } = data;

  const summaryItemsValues = [coursesCount, students, degree, rate];
  return (
    <Card className="relative mt-12 overflow-visible rounded-2xl">
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-sm z-10 rounded-2xl"></div>
      <Image
        alt=""
        src={img}
        className="w-full h-[700px] mdb:h-[620px] object-cover rounded-2xl"
      />
      <Image
        alt=""
        src={img}
        className="absolute z-20 w-[270px] left-10 -top-6 rounded-2xl hidden md:block"
      />
      <CardBody className="absolute top-8 right-1/2 translate-x-[50%] md:right-8 md:translate-x-0 z-20 w-full md:w-1/2 text-center md:text-right">
        <h1 className="font-kalamehBlack text-4xl text-white mb-6">{title}</h1>
        <p className="line-clamp-2 text-darkBody">{description}</p>
        <MainButton
          content={<p>وبسایت شخصی استاد</p>}
          className="w-max bg-primary dark:bg-primary-darker text-btnText mt-8 py-7 px-5 text-xl mx-auto md:mx-0"
          onClick={() => (window.location.href = website)}
        />
        <div className="grid 2xs:grid-cols-2 xs:grid-cols-4 md:grid-cols-2  mdb:grid-cols-4 gap-4 items-center mt-8">
          {teacherSummary.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <Image src={item.icon} alt="" className="w-10 " />
              <p className="text-white text-sm lg:text-md xl:text-lg">
                {item.title}
              </p>
              <span className="text-darkBody text-xs">
                {summaryItemsValues[index]}
              </span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default TeacherDetileBox;
