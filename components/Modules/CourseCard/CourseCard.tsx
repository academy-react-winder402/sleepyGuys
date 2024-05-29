import React from "react";
import Image from "next/image";
import { Course } from "@/interfaces/course.interface";
import clock from "@/public/icons/courses/clock.svg";
import { Chip, Divider } from "@nextui-org/react";
import { useRouter } from "next/router";
import convertToPersianDigit from "@/utils/convertToPersianDigit";
import addCommasToPersianNumber from "@/utils/addCommasToPersianDigit";
import calculateTimeAgo from "@/utils/calculateTimeAgo";
import { validateImageAddress } from "@/utils/validateImageAdderss";
import fallbackImage from "@/public/pictures/courses/next.webp"

function CourseCard({ title, tumbImageAddress, describe, teacherName, cost, lastUpdate, courseId }: Course) {
  const router = useRouter();
  return (
    <div className="pt-[55px] h-[435px]" onClick={() => router.push(`/courses/${courseId}`)}>
      <div className="flex py-6 bg-white dark:bg-dark-lighter rounded-3xl h-full">
        <div className="w-full flex flex-col gap-5">
          <div className="rounded-3xl w-[85%] mx-auto -mt-20 h-[160px]">
            <Image src={validateImageAddress(tumbImageAddress, fallbackImage)} alt="" width={400} height={400} className="h-full w-full rounded-3xl" />
          </div>
          <div className="w-[85%] mx-auto flex flex-col gap-4">
            <h2 className="text-[20px] font-peyda font-bold text-lightTitle dark:text-darkTitle">
              {title}
            </h2>
            <p className="text-[15px] font-vazir font-bold text-lightBody dark:text-darkBody line-clamp-2">
              {describe}
            </p>
          </div>
          <div className="mt-auto w-[85%] mx-auto">
            <Chip
              classNames={{
                dot: ["bg-primary dark:bg-primary-lighter px-1.5"],
                base: [
                  "border-none font-vazir text-primary dark:text-primary-lighter",
                ],
              }}
              variant="dot"
            >
              {teacherName}
            </Chip>
            <Divider className="bg-gray-lighter mb-4 mt-1" />
            <div className="flex justify-between items-center">
              <Chip
                startContent={<Image src={clock} alt="" />}
                variant="solid"
                className="font-vazir text-lightTitle dark:text-darkTitle bg-mainBodyBg dark:bg-dark"
              >
                {calculateTimeAgo(lastUpdate)}
              </Chip>
              <p className="text-md text-primary dark:text-primary-lighter font-peyda">
                {addCommasToPersianNumber(convertToPersianDigit(cost))} تومان
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
