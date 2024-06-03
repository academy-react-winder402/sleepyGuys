import courseIcon from "@/public/pictures/teachers/course.svg";
import newspaperIcon from "@/public/icons/theme/newspaper.svg";
import teacherIcon from "@/public/pictures/teachers/teacher.svg";
import linkedinIcon from "@/public/icons/theme/linkedin.svg";
import { teachers } from "@/interfaces/teacher.interface";
import { Card, CardBody, Chip, Divider , Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { validateImageAddress } from "@/utils/validateImageAdderss";
import fallbackImage from "@/public/pictures/teachers/arian.webp"
import convertToPersianDigit from "@/utils/convertToPersianDigit";

export default function TeacherCard({
  teacherId,
  fullName,
  linkdinProfileLink,
  courseCounts,
  newsCount,
  pictureAddress
}: teachers) {
  return (
    <Card
      isBlurred
      className="border-none w-full lg:w-[80%] lg:-translate-x-20 flex p-4 bg-white dark:bg-dark-lighter shadow-none"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-[40%] lgb:[30%] h-auto md:h-[280px] rounded-3xl overflow-hidden">
            <Skeleton  className="w-full h-full" />
          </div>

          <div className="flex flex-col justify-start text-right w-full sm:w-[60%] lgb:[70%]">
            <h2 className="font-kalamehBlack mb-2 text-[24px] md:text-[29px] text-lightTitle dark:text-darkTitle">
              <Skeleton className="h-5 w-28 rounded-full"/>
            </h2>
            <p
              className="text-[14px] font-peyda line-clamp-2 md:text-[16px] text-lightBody dark:text-darkBody"
              dir="rtl"
            >
              به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.
            </p>
            <div className="hidden sm:grid sm:grid-cols-2 gap-4 my-6 md:w-[80%] lg:w-full lgb:w-[80%]">
              <Chip
                startContent={<Image src={newspaperIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark px-4 h-12 max-w-none"
              >
              <Skeleton className="h-5 rounded-full"/>
              </Chip>
              <Chip
                startContent={<Image src={courseIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark px-4 h-12 max-w-none"
              >
              <Skeleton className="h-5 rounded-full"/>
              </Chip>
              <Chip
                startContent={<Image src={linkedinIcon} width={25} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl col-span-2 text-white dark:text-darkTitle bg-lightBody dark:bg-dark px-4 h-12 max-w-none min-w-full overflow-hidden"
              >
              <Skeleton className="h-5 rounded-full"/>
              </Chip>
            </div>
          </div>
        </div>
        <Divider className="my-4" />
        <div className="flex justify-center items-center mt-2">
          <Skeleton
           
            className="md:col-start-3 rounded-full col-span-1 mx-auto md:ms-auto md:mx-0 flex justify-center w-full items-center gap-x-2 text-lightTitle dark:text-darkTitle font-peyda"
          >
            <Divider className="w-[60px] rounded-full h-1 bg-lightBody dark:bg-darkBody" />
            <Skeleton className="h-5 rounded-full"/>
          </Skeleton>
        </div>
      </CardBody>
    </Card>
  );
}