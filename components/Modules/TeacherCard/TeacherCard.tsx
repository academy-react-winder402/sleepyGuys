import courseIcon from "@/public/pictures/teachers/course.svg";
import starIcon from "@/public/pictures/teachers/star.svg";
import clockIcon from "@/public/pictures/teachers/clock.svg";
import teacherIcon from "@/public/pictures/teachers/teacher.svg";
import { teachers } from "@/interfaces/teacher.interface";
import {
  Card,
  CardBody,
  Button,
  Slider,
  Chip,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function TeacherCard({
  id,
  title,
  description,
  courseTime,
  courseCount,
  star,
  image,
}: teachers) {
  console.log(image);
  return (
    <Card
      isBlurred
      className="border-none w-full lg:w-[70%] flex p-4 bg-white dark:bg-dark-lighter shadow-none"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative w-full lg:w-[40%] lgb:[30%] h-auto lg:h-[280px] rounded-3xl overflow-hidden">
            <Image src={image} alt="" className="w-full" />
          </div>

          <div className="flex flex-col justify-start text-right w-full lg:w-[60%] lgb:[70%]">
            <h2 className="font-kalamehBlack mb-2 text-[24px] md:text-[29px] text-lightTitle dark:text-darkTitle">
              {title}
            </h2>
            <p
              className="text-[14px] font-peyda line-clamp-2 md:text-[16px] text-lightBody dark:text-darkBody"
              dir="rtl"
            >
              {description}
            </p>
            <div className="md:grid hidden grid-cols-1 md:grid-cols-2 gap-4 my-6 md:w-[70%] lg:w-full lgb:w-[80%]">
              <Chip
                startContent={<Image src={clockIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark max-w-[200px] px-4 h-12"
              >
                {courseTime} ساعت
              </Chip>
              <Chip
                startContent={<Image src={courseIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark max-w-[200px] px-4 h-12"
              >
                {courseCount} دوره آموزشی
              </Chip>
              <Chip
                startContent={<Image src={teacherIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark max-w-[200px] px-4 h-12"
              >
                {title}
              </Chip>
              <Chip
                startContent={<Image src={starIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark max-w-[200px] px-4 h-12"
              >
                <div className="pt-[5px]">5 / {star}</div>
              </Chip>
            </div>
          </div>
        </div>
        <Divider className="my-4"/>
        <div className="flex justify-center items-center mt-2">
          <Link
            href={``}
            className="md:col-start-3 col-span-1 mx-auto md:ms-auto md:mx-0 flex justify-center w-full items-center gap-x-2 text-lightTitle dark:text-darkTitle"
          >
            <Divider className="w-[60px] rounded-full h-1 bg-lightBody dark:bg-darkBody font-peyda" />
            مشاهده پروفایل
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
