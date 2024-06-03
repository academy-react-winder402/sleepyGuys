import courseIcon from "@/public/pictures/teachers/course.svg";
import newspaperIcon from "@/public/icons/theme/newspaper.svg";
import linkedinIcon from "@/public/icons/theme/linkedin.svg";
import { Card, CardBody, Chip, Divider, Skeleton } from "@nextui-org/react";
import Image from "next/image";

export default function TeacherCard() {
  return (
    <Card
      isBlurred
      className="border-none w-full lg:w-[70%] flex p-4 bg-white dark:bg-dark-lighter shadow-none"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-[40%] lgb:[30%] h-auto md:h-[280px] rounded-3xl overflow-hidden">
            <Skeleton className="w-full h-[300px] sm:h-[250px] lg:h-[300px] rounded-3xl" />
          </div>

          <div className="flex flex-col justify-start text-right w-full sm:w-[60%] lgb:[70%]">
            <Skeleton className="h-[30px] w-[200px] rounded-md mb-4" />
            <div className="space-y-2">
              {Array.from({ length: 2 }, (_, index) => (
                <Skeleton className="h-[25px] w-3/4 rounded-md" key={index} />
              ))}
            </div>
            <div className="hidden sm:grid sm:grid-cols-2 gap-4 my-6 md:w-[80%] lg:w-full lgb:w-[80%]">
              <Chip
                startContent={<Image src={newspaperIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark px-4 h-12 max-w-none"
              >
                <Skeleton className="h-[20px] rounded-md" />
              </Chip>
              <Chip
                startContent={<Image src={courseIcon} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl text-white dark:text-darkTitle bg-lightBody dark:bg-dark px-4 h-12 max-w-none"
              >
                <Skeleton className="h-[20px] rounded-md" />
              </Chip>
              <Chip
                startContent={<Image src={linkedinIcon} width={25} alt="" />}
                variant="solid"
                className="font-peyda rounded-xl col-span-2 text-white dark:text-darkTitle bg-lightBody dark:bg-dark px-4 h-12 max-w-none min-w-full overflow-hidden"
              >
                <Skeleton className="h-[20px] rounded-md" />
              </Chip>
            </div>
          </div>
        </div>
        <Divider className="my-4" />
        <div className="flex justify-center items-center mt-2">
          <Skeleton className="rounded-lg h-[35px] w-[250px]" />
        </div>
      </CardBody>
    </Card>
  );
}