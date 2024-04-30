import { teachers } from "@/interfaces/teacher.interface";
import { Card, CardBody, Button, Slider } from "@nextui-org/react";
import Image from "next/image";

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
    <Card isBlurred className="border-none w-[80%]" shadow="sm">
      <CardBody>
        <div className="flex gap-6 md:gap-4">
          <div className="relative col-span-6 md:col-span-4 w[30%]">
            <Image src={image} alt="" className="rounded-3xl h-64 w-full" />
          </div>

          <div className="flex flex-col w-[70%] justify-start text-right">
            <h2 className="font-kalamehBlack text-[30px] md:text-[38px] text-lightTitle dark:text-darkTitle">
              {title}
            </h2>
            <p
              className="text-[16px] md:text-[18px] text-lightBody dark:text-darkBody"
              dir="rtl"
            >
              {description}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
