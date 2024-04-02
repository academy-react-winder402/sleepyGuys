import React from "react";
import Image from "next/image";
import { Course } from "@/interfaces/course.interface";
import clock from "@/public/icons/courses/clock.svg";
import { Chip, Divider } from "@nextui-org/react";
import { useRouter } from "next/router";

function CourseCard({ title, image, des, time, teachers, price }: Course) {
  const router = useRouter();

  return (
    <div className="pt-[55px]" onClick={() => router.push(`/courses/${title}`)}>
      <div className="flex py-6 bg-white dark:bg-dark-lighter flex-col gap-4 rounded-3xl ">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="overflow-hidden rounded-3xl w-[85%] -mt-20">
            <Image src={image} alt="" />
          </div>
          <div className="w-[85%] flex flex-col gap-4">
            <h2 className="text-[20px] font-peyda font-bold text-lightTitle dark:text-darkTitle">
              {title}
            </h2>
            <p className="text-[15px] font-vazir font-bold text-lightBody dark:text-darkBody">
              {des.slice(0, 85)} ...
            </p>
            <Chip
              classNames={{
                dot: ["bg-primary dark:bg-primary-lighter px-1.5"],
                base: [
                  "border-none font-vazir text-primary dark:text-primary-lighter",
                ],
              }}
              variant="dot"
            >
              {teachers}
            </Chip>
          </div>
          <Divider className="w-[85%] mx-auto bg-gray-lighter" />
          <div className="flex justify-between w-[85%]">
            <Chip
              startContent={<Image src={clock} alt="" />}
              variant="solid"
              className="font-vazir text-white bg-gray-lighter dark:bg-gray-darker"
            >
              {time}
            </Chip>
            <p className="text-xl text-primary dark:text-primary-lighter">
              {price === 0 ? "رایگان!" : `${price} تومان`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
